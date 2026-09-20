import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { brands, type Brand } from "@/lib/site-data";
import { ContactBand, SiteShell } from "@/components/site-shell";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const asset = (id:string) => imageModules[`../assets/eum/${id}.jpg`];

export function BrandPage({ brand }: { brand: Brand | undefined }) {
  if (!brand) return null;
  const index = brands.findIndex((item)=>item.slug===brand.slug);
  const prev = brands.at((index-1+brands.length)%brands.length) ?? brand;
  const next = brands.at((index+1)%brands.length) ?? brand;
  return <SiteShell>
    <section className="relative min-h-[760px] overflow-hidden bg-foreground pt-20 text-background">
      <img src={asset(brand.heroImage)} alt={`${brand.name} 대표 이미지`} className="absolute inset-0 h-full w-full object-cover opacity-50"/>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_0%,color-mix(in_oklab,var(--foreground)_75%,transparent)_48%,color-mix(in_oklab,var(--foreground)_20%,transparent)_100%)]"/>
      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-end px-5 pb-16 lg:px-10">
        <div className="mb-auto flex items-center gap-4 pt-16"><span className="bg-primary px-3 py-2 text-xs font-bold">BRAND {brand.number}</span><span className="eyebrow text-background/60">EXCLUSIVE KOREA HQ</span></div>
        <p className="eyebrow text-primary-foreground/70">{brand.english}{brand.since ? ` · SINCE ${brand.since}`:""}</p>
        <h1 className="mt-5 text-5xl font-semibold md:text-7xl">{brand.name}</h1>
        <h2 className="mt-7 max-w-4xl text-3xl font-medium leading-tight md:text-5xl">{brand.headline}</h2>
        <div className="mt-10 flex flex-wrap items-center gap-6"><p className="max-w-2xl text-base leading-8 text-background/75">{brand.intro}</p><a href="#overview" className="ml-auto grid h-14 w-14 place-items-center rounded-full border border-background/40" aria-label="상세 내용 보기"><ArrowDown/></a></div>
      </div>
    </section>
    <section id="overview" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
      <div className="grid border-y border-border md:grid-cols-3">{brand.highlights.map((item,i)=><article key={item.title} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0"><span className="text-xs text-primary">0{i+1}</span><h3 className="mt-5 text-2xl font-semibold">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p></article>)}</div>
      <div className="mt-20 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">{brand.metrics.map((metric)=><div key={metric.label} className="bg-background px-5 py-9"><p className="text-3xl font-semibold md:text-5xl">{metric.value}</p><p className="mt-3 text-xs text-muted-foreground">{metric.label}</p></div>)}</div>
    </section>
    {brand.sections.map((section,sectionIndex)=><section key={section.title} className={sectionIndex%2 ? "bg-muted" : "bg-background"}><div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-primary">{section.eyebrow}</p><h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">{section.title}</h2>{section.body&&<p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">{section.body}</p>}</div><div className="grid gap-px bg-border sm:grid-cols-2">{section.items.map((item,i)=><article key={`${item.title}-${i}`} className="min-h-40 bg-background p-6"><span className="text-xs text-primary">{String(i+1).padStart(2,"0")}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3>{item.text&&<p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>}</article>)}</div></div></div></section>)}
    <section className="overflow-hidden bg-foreground py-24 text-background"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow text-primary-foreground/50">MATERIAL &amp; REFERENCE</p><h2 className="mt-4 text-4xl font-semibold">현장에서 확인하는 품질</h2></div><span className="hidden text-sm text-background/50 md:block">제안서 수록 이미지</span></div><div className="flex snap-x gap-4 overflow-x-auto pb-5">{brand.gallery.map((id,i)=><figure key={id} className="min-w-[78vw] snap-start sm:min-w-[430px]"><img src={asset(id)} alt={`${brand.name} ${i+1}`} className="aspect-[4/3] w-full object-cover"/><figcaption className="mt-3 text-xs text-background/45">{brand.english} · {String(i+1).padStart(2,"0")}</figcaption></figure>)}</div></div></section>
    <nav className="grid md:grid-cols-2"><Link to={`/brands/${prev.slug}` as "/brands/huanqiu-stone"} className="group flex items-center gap-5 border-b border-border px-5 py-10 hover:bg-muted md:border-b-0 md:border-r lg:px-10"><ArrowLeft/><span><small className="text-muted-foreground">PREVIOUS</small><b className="mt-1 block text-xl">{prev.name}</b></span></Link><Link to={`/brands/${next.slug}` as "/brands/huanqiu-stone"} className="group flex items-center justify-end gap-5 px-5 py-10 text-right hover:bg-muted lg:px-10"><span><small className="text-muted-foreground">NEXT</small><b className="mt-1 block text-xl">{next.name}</b></span><ArrowRight/></Link></nav>
    <ContactBand/>
  </SiteShell>
}