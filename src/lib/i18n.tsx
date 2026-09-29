import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import en from "@/lib/i18n-en.json";
import ja from "@/lib/i18n-ja.json";
import zh from "@/lib/i18n-zh.json";

export type Locale = "ko" | "en" | "ja" | "zh";
type Dictionary = Record<string, string>;

const dictionaries: Record<Exclude<Locale, "ko">, Dictionary> = { en, ja, zh };
const reverse = {
  en: Object.fromEntries(Object.entries(en).map(([ko, translated]) => [translated, ko])),
  ja: Object.fromEntries(Object.entries(ja).map(([ko, translated]) => [translated, ko])),
  zh: Object.fromEntries(Object.entries(zh).map(([ko, translated]) => [translated, ko])),
} satisfies Record<Exclude<Locale, "ko">, Dictionary>;

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({ locale: "ko", setLocale: () => undefined });
const textAttributes = ["alt", "aria-label", "title", "placeholder", "content"] as const;

function koreanSource(value: string): string {
  if (/[가-힣]/.test(value)) return value;
  return reverse.en[value] ?? reverse.ja[value] ?? reverse.zh[value] ?? value;
}

function translateString(value: string, locale: Locale): string {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const core = value.trim();
  if (!core) return value;
  const source = koreanSource(core);
  const translated = locale === "ko" ? source : dictionaries[locale][source] ?? core;
  return `${leading}${translated}${trailing}`;
}

function translateTree(root: ParentNode, locale: Locale) {
  const documentRoot = root instanceof Document ? root.documentElement : root;
  if (!documentRoot) return;
  const walker = document.createTreeWalker(documentRoot, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest("[data-i18n-static]")) continue;
    const current = node.nodeValue ?? "";
    const next = translateString(current, locale);
    if (next !== current) node.nodeValue = next;
  }
  if (documentRoot instanceof Element && !documentRoot.closest("[data-i18n-static]")) {
    const candidates = [documentRoot, ...documentRoot.querySelectorAll("[alt],[aria-label],[title],[placeholder],meta[content]")];
    for (const element of candidates) {
      if (element.closest("[data-i18n-static]")) continue;
      for (const attribute of textAttributes) {
        const current = element.getAttribute(attribute);
        if (!current) continue;
        const next = translateString(current, locale);
        if (next !== current) element.setAttribute(attribute, next);
      }
    }
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("ko");
  const setLocale = useCallback((next: Locale) => {
    updateLocale(next);
    window.localStorage.setItem("eum-build-locale", next);
    document.cookie = `eum-build-locale=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("eum-build-locale");
    if (saved === "en" || saved === "ja" || saved === "zh") updateLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    translateTree(document, locale);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData" && mutation.target.parentNode) translateTree(mutation.target.parentNode, locale);
        if (mutation.type === "attributes" && mutation.target instanceof Element) translateTree(mutation.target, locale);
        for (const node of mutation.addedNodes) {
          if (node instanceof Element || node instanceof DocumentFragment) translateTree(node, locale);
          else if (node.parentNode) translateTree(node.parentNode, locale);
        }
      }
    });
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...textAttributes] });
    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
