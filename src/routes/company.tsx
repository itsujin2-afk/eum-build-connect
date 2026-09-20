import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { brands } from "@/lib/site-data";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

const pillars = [
  ["01", "Direct Authority", "본사 직통 계약"],
  ["02", "Single Margin", "단일 마진 구조"],
  ["03", "Legal Liability", "한국 법인 직접 책임"],
];

const leaders = [
  { role: "CHINA ASSET & PARTNERSHIP", name: "YIN XIUYING", line: "6개 본사 직통 의사결정 · 생산 인프라 직결" },
  { role: "KOREA BUSINESS & EXECUTION", name: "조준우", line: "국내 사업화 · 계약 설계 · 현장 실행 총괄" },
];

export const Route = createFileRoute("/company")({
  head: () => ({ meta: [
    { title: "회사 소개 — 이음앤빌드" },
    { name: "description", content: "이음앤빌드 회사 개요, 직통 계약 구조, 공동대표 리더십과 6개 독점 브랜드를 한 화면에 소개합니다." },
    { property: "og:title", content: "회사 소개 — 이음앤빌드" },
    { property: "og:description", content: "중국 본사와 직접 결정하고 한국 법인이 직접 책임지는 구조" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Company,
});

function Company() {
  return <SiteShell fullscreen>
    <div className="flex h-full min-h-0 flex-col px-5 pb-2 pt-16 sm:px-8 sm:pt-20 lg:px-14">
      <div className="mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col">
        <div className="shrink-0">
          <p className="eyebrow text-muted-foreground">COMPANY · EXCLUSIVE REGIONAL HQ</p>
          <h1 className="mt-2 break-keep text-[20px] font-extrabold leading-[1.3] tracking-tight sm:text-[26px] lg:text-[32px]">
            한국 법인이 직접 계약하고 <span className="text-gold">직접 책임집니다.</span>
          </h1>
        </div>

        <div className="mt-4 grid shrink-0 gap-px bg-border sm:grid-cols-3">
          {pillars.map(([n, en, ko]) => <article key={n} className="bg-background px-4 py-3">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">{n} · {en}</p>
            <h2 className="mt-1.5 text-[13px] font-bold sm:text-sm">{ko}</h2>
          </article>)}
        </div>

        <div className="mt-3 grid shrink-0 gap-px bg-border sm:grid-cols-2">
          {leaders.map((leader) => <article key={leader.name} className="bg-background px-4 py-3">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-gold">{leader.role}</p>
            <p className="mt-1.5 text-[13px] font-bold sm:text-sm">{leader.name} <span className="font-normal text-muted-foreground">· 공동대표이사</span></p>
            <p className="mt-1 text-[11px] leading-5 text-muted-foreground">{leader.line}</p>
          </article>)}
        </div>

        <div className="mt-3 flex min-h-0 flex-1 flex-col">
          <p className="eyebrow shrink-0 text-muted-foreground">THE CURATED PORTFOLIO · SIX BRANDS</p>
          <div className="mt-2 grid min-h-0 flex-1 grid-cols-3 gap-px bg-border lg:grid-cols-6">
            {brands.map((brand) => <Link key={brand.slug} to={`/brands/${brand.slug}` as never} className="group relative min-h-0 overflow-hidden bg-background">
              <img src={asset(brand.heroImage)} alt={brand.name} className="h-full w-full object-cover brightness-95 transition duration-700 group-hover:scale-105 group-hover:brightness-105" />
              <div className="absolute inset-x-0 bottom-0 bg-background/92 px-2 py-1.5 backdrop-blur-sm">
                <p className="text-[9px] font-semibold text-gold">{brand.number}</p>
                <p className="truncate text-[10px] font-bold sm:text-[11px]">{brand.name}</p>
              </div>
            </Link>)}
          </div>
        </div>

        <div className="mt-2 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-[10px] leading-5 text-muted-foreground sm:text-[11px]">
          <span className="font-bold tracking-[0.12em] text-foreground">주식회사 이음앤빌드</span>
          <span>사업자 810-87-04122</span>
          <span className="hidden sm:inline">서울 강남구 테헤란로 329 삼흥빌딩 1612호</span>
          <a href="tel:01031138668" className="inline-flex items-center gap-1 font-semibold text-foreground">견적 상담 010-3113-8668 <ArrowUpRight size={12} className="text-gold" /></a>
        </div>
      </div>
    </div>
  </SiteShell>;
}
