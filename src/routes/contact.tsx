import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const EMAIL = "eumbuild7@naver.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "문의하기 — 이음앤빌드" },
      { name: "description", content: "제품 문의와 샘플 요청은 이메일 eumbuild7@naver.com 으로 보내주시면 성심껏 답변드리겠습니다." },
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
          <h1 className="mt-5 break-keep text-3xl font-bold leading-[1.25] sm:text-5xl">문의하기</h1>
          <div className="mt-10 max-w-2xl space-y-3 break-keep text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9">
            <p>안녕하세요. 이음앤빌드입니다.</p>
            <p>문의사항이 있으시거나 샘플 요청을 하실 분들은 이메일로 문의하시면 성심껏 답변드리겠습니다.</p>
          </div>

          <div className="mt-14 max-w-2xl border border-border bg-surface p-7 sm:p-10">
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
        </div>
      </section>
    </SiteShell>
  );
}
