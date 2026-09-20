import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { BoomerangVideoBg } from "@/components/boomerang-video-bg";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:"이음앤빌드 — 중국 6개 건축자재 브랜드 공식 한국 HQ"},{name:"description",content:"본사 직통 단일 마진 구조로 석재, 타일, 유리, 마루, 목문, 벽패널을 공급하는 이음앤빌드입니다."},{property:"og:title",content:"이음앤빌드 — Exclusive Regional HQ"},{property:"og:description",content:"중국 최정상 6개 건축자재 브랜드의 공식 한국 독점 HQ"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
  component: Home,
});

const features: [string, string, string][] = [
  ["01", "Direct Authority", "본사 직통 계약"],
  ["02", "Single Margin", "단일 마진 구조"],
  ["03", "Legal Liability", "한국 법인 직접 책임"],
];

function Home(){
  return <SiteShell fullscreen hideFooter hideFooterLogo>
    <div className="relative flex h-full min-h-0 flex-col items-center overflow-hidden">
      <BoomerangVideoBg />
      <div className="absolute inset-0 z-[1] bg-background/20" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center">
        <img src={logoAsset.url} alt="이음앤빌드" className="w-[170px] drop-shadow-[0_14px_34px_rgba(60,44,8,0.28)] sm:w-[210px]" />
        <h1 className="mt-7 break-keep text-3xl font-bold leading-[1.18] tracking-tight sm:text-5xl">
          중국 최정상 6개 브랜드<br />공식 한국 <span className="text-gold">독점 HQ</span>
        </h1>
        <p className="mt-5 max-w-xl break-keep text-xs leading-6 text-foreground/75 sm:text-sm sm:leading-7">
          본사 직통 단일 마진 구조로 최고급 건축자재를 공급하는 익스클루시브 리저널 본부
        </p>
        <Link to="/company" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/85">
          이음앤빌드 소개 <ArrowRight size={15} />
        </Link>
      </div>

      <div className="relative z-10 mt-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rounded-t-xl border border-b-0 border-border bg-background/90 px-5 pt-6 pb-0 shadow-sm backdrop-blur-sm sm:px-8 sm:pt-8 md:px-12 md:pt-10">
          <div className="grid gap-5 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-muted-foreground">WHAT DO WE DO?</p>
              <h2 className="mt-3 break-keep text-xl font-bold leading-snug tracking-tight sm:text-2xl">중간 단계를 없앤 직통 계약 솔루션</h2>
            </div>
            <p className="break-keep text-[13px] leading-6 text-muted-foreground sm:text-sm sm:leading-7">
              중국 본사와 직접 계약하고 한국 법인이 모든 하자와 책임을 집니다. 지체 없는 의사결정과 투명한 단일 마진으로 프로젝트를 완성합니다.
            </p>
          </div>
          <div className="my-4 h-px w-full bg-border sm:my-6" />
          <div className="grid gap-4 pb-6 sm:grid-cols-3 sm:pb-8">
            {features.map(([num, en, ko]) => <Link key={num} to="/company" className="group flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">{num} · <span className="text-gold">{en}</span></p>
                <p className="mt-2 text-sm font-bold tracking-tight sm:text-[15px]">{ko}</p>
              </div>
              <ArrowRight size={16} className="shrink-0 text-muted-foreground/50 transition group-hover:translate-x-1 group-hover:text-gold" />
            </Link>)}
          </div>
        </div>
      </div>
    </div>
  </SiteShell>
}
