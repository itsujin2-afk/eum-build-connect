import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const EMAIL = "eumbuild7@naver.com";
const tips = ["관심 있는 제품 또는 브랜드", "현장 위치와 예상 물량", "희망 납기 일정"];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "문의하기 — 이음앤빌드" },
      {
        name: "description",
        content:
          "제품 문의와 샘플 요청은 이메일 eumbuild7@naver.com 으로 보내주시면 성심껏 답변드리겠습니다.",
      },
      { property: "og:title", content: "문의하기 — 이음앤빌드" },
      { property: "og:description", content: "제품 문의와 샘플 요청은 이메일로 보내주세요." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <SiteShell>
      <section className="border-b border-border pt-12 sm:pt-14">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:py-32 lg:px-10">
          <p className="eyebrow text-muted-foreground">CONTACT</p>
          <h1 className="mt-5 break-keep text-3xl font-bold leading-[1.25] sm:text-5xl">
            <span className="block">프로젝트에 맞는 자재,</span>
            <span className="block">이음앤빌드가 함께 찾겠습니다.</span>
          </h1>
          <div className="mt-10 max-w-3xl space-y-3 break-keep text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9">
            <p>
              석재·타일·유리·마루·목문·벽패널 6개 브랜드의 제품 문의와 샘플 요청을 받고 있습니다.
            </p>
            <p>
              본사와 직접 소통하는 한국 공식 창구로서, 사양부터 물량·납기까지 정확하게 안내해
              드립니다.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <div className="border border-border bg-surface p-7 sm:p-10">
              <p className="eyebrow text-gold">이메일 주소</p>
              <a
                href={`mailto:${EMAIL}`}
                data-i18n-static
                className="mt-4 block break-all text-2xl font-semibold tracking-tight transition-colors hover:text-gold sm:text-4xl"
              >
                {EMAIL}
              </a>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 bg-gold px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-[color-mix(in_oklch,var(--gold)_82%,black)]"
                >
                  <Mail size={16} /> 이메일 보내기
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-2.5 border border-foreground bg-background px-8 py-4 text-sm font-bold transition-colors hover:border-gold hover:bg-gold/10"
                >
                  {copied ? <Check size={16} className="text-gold" /> : <Copy size={16} />}
                  {copied ? "복사되었습니다" : "주소 복사"}
                </button>
              </div>
            </div>

            <div className="border border-border p-7 sm:p-10">
              <p className="eyebrow text-gold">TIP</p>
              <h2 className="mt-4 break-keep text-lg font-bold sm:text-xl">
                이렇게 보내주시면 더 빠르게 답변드려요
              </h2>
              <ul className="mt-6 space-y-4">
                {tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-3 break-keep text-sm leading-6 text-foreground/80 sm:text-base"
                  >
                    <Check size={16} className="mt-1 shrink-0 text-gold" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
