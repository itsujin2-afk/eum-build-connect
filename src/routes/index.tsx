import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { brands, steps } from "@/lib/site-data";
import { ContactBand, SiteShell } from "@/components/site-shell";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const asset = (id:string) => imageModules[`../assets/eum/${id}.jpg`];

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:"이음앤빌드 — 중국 6개 건축자재 브랜드 공식 한국 HQ"},{name:"description",content:"본사 직통 단일 마진 구조로 석재, 타일, 유리, 마루, 목문, 벽패널을 공급하는 이음앤빌드입니다."},{property:"og:title",content:"이음앤빌드 — Exclusive Regional HQ"},{property:"og:description",content:"중국 최정상 6개 건축자재 브랜드의 공식 한국 독점 HQ"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),
  component: Home,
});

function Home(){return <SiteShell>
  <section className="relative min-h-[820px] overflow-hidden bg-foreground pt-20 text-background">
    <img src={asset("000")} alt="현대 건축 외관" className="absolute inset-0 h-full w-full object-cover opacity-55"/>
    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_0%,color-mix(in_oklab,var(--foreground)_70%,transparent)_54%,transparent_100%)]"/>
    <div className="relative mx-auto flex min-h-[740px] max-w-[1440px] flex-col px-5 py-14 lg:px-10">
      <div className="flex justify-between text-[10px] font-bold tracking-[.25em] text-background/55"><span>EXCLUSIVE REGIONAL HQ</span><span>SEOUL, KOREA</span></div>
      <div className="mt-auto max-w-5xl"><p className="eyebrow text-primary-foreground/65">CURATED MATERIAL PORTFOLIO · 2026</p><h1 className="mt-7 text-5xl font-semibold leading-[1.06] md:text-7xl lg:text-[92px]">중국 최정상 6개 브랜드<br/><span className="text-primary-foreground">공식 한국 HQ</span></h1><p className="mt-8 max-w-2xl text-base leading-8 text-background/70">단순한 수입 창구가 아닙니다. 6개 본사의 상업 권한을 한국에서 직접 집행하고, 계약부터 하자 책임까지 한국 법인이 맡습니다.</p></div>
      <div className="mt-12 flex items-center gap-5"><Link to="/company" className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-bold text-primary-foreground">이음앤빌드 소개 <ArrowUpRight size={16}/></Link><a href="#portfolio" className="grid h-12 w-12 place-items-center rounded-full border border-background/35" aria-label="브랜드 보기"><ArrowDown size={17}/></a></div>
    </div>
  </section>
  <section className="border-b border-border"><div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
    {[['01','DIRECT','본사 직통'],['02','SINGLE MARGIN','단일 마진 구조'],['03','ACCOUNTABILITY','한국 법인 직접 책임']].map(([n,en,ko])=><div key={n} className="border-b border-border p-7 md:border-b-0 md:border-r lg:p-10"><div className="flex justify-between text-xs text-muted-foreground"><span>{n}</span><span>{en}</span></div><p className="mt-8 text-2xl font-semibold">{ko}</p></div>)}
  </div></section>
  <section className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10"><div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow text-primary">WHY EUM&amp;BUILD</p><h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">중간 단계를<br/>아예 없앴습니다.</h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">본사 회신을 기다리는 대신 협의 자리에서 결정합니다. 가격은 투명해지고, 책임은 선명해집니다.</p></div><div><div className="flow-row muted"><span>일반 경로</span><p>중국 본사 → 무역상 → 현지 브로커 → 국내 유통 → 발주처</p></div><div className="flow-row"><span>직통 경로</span><p>중국 본사 <MoveRight/> <b>이음앤빌드 한국 HQ</b> <MoveRight/> 발주처</p></div>{[['의사결정 속도','협의 자리에서 즉시 확정'],['가격 구조','본사 직결 단일 마진'],['책임 소재','한국 법인이 계약 당사자로 직접 부담']].map(([a,b])=><div key={a} className="flex items-center gap-4 border-b border-border py-5 text-sm"><Check size={16} className="text-primary"/><span className="w-28 text-muted-foreground">{a}</span><b>{b}</b></div>)}</div></div></section>
  <section id="portfolio" className="bg-muted py-28"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-primary">THE CURATED PORTFOLIO</p><h2 className="mt-5 text-4xl font-semibold md:text-6xl">여섯 개의 브랜드</h2></div><p className="max-w-lg text-sm leading-7 text-muted-foreground">석재, 타일, 유리, 마루, 목문과 정목 가구, 벽패널과 바닥재까지 마감재 전 영역을 한 창구에서 조달합니다.</p></div><div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as never} className="group bg-background"><div className="overflow-hidden"><img src={asset(brand.heroImage)} alt={brand.name} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-6"><div className="flex justify-between text-xs text-muted-foreground"><span>BRAND {brand.number}</span><span>{brand.since&&`SINCE ${brand.since}`}</span></div><h3 className="mt-8 text-2xl font-semibold">{brand.name}</h3><p className="mt-2 text-xs text-muted-foreground">{brand.english}</p><div className="mt-8 flex items-end justify-between"><span className="text-sm">{brand.category}</span><ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div></div></Link>)}</div></div></section>
  <section className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10"><div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-primary">HOW WE WORK</p><h2 className="mt-5 text-4xl font-semibold md:text-6xl">한 번의 미팅으로<br/>견적이 확정됩니다.</h2></div><div>{steps.map(([n,title,body])=><article key={n} className="grid gap-4 border-t border-border py-7 sm:grid-cols-[80px_180px_1fr]"><span className="text-primary">{n}</span><h3 className="font-semibold">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{body}</p></article>)}</div></div></section>
  <ContactBand/>
</SiteShell>}