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
    <section className="relative min-h-[760px] overflow-hidden bg-background pt-20">
      <img src={asset(brand.heroImage)} alt={`${brand.name} 대표 이미지`} className="absolute inset-x-0 bottom-0 h-[58%] w-full object-cover"/>
      <div className="absolute inset-x-0 top-20 h-[48%] bg-background"/>
      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] flex-col px-5 pb-10 pt-14 lg:px-10">
        <div className="flex items-center gap-4"><span className="rounded-md bg-surface px-3 py-2 text-xs font-medium">BRAND {brand.number}</span><span className="eyebrow text-muted-foreground">EXCLUSIVE KOREA HQ</span></div>
        <p className="eyebrow mt-16 text-muted-foreground">{brand.english}{brand.since ? ` · SINCE ${brand.since}`:""}</p>
        <h1 className="mt-4 text-5xl md:text-7xl">{brand.name}</h1>
        <div className="mt-6 grid gap-5 md:grid-cols-2"><h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">{brand.headline}</h2><p className="max-w-xl self-end text-sm leading-7 text-foreground/70">{brand.intro}</p></div>
        <a href="#overview" className="mt-auto grid h-12 w-12 place-items-center self-end rounded-full border border-border bg-background" aria-label="상세 내용 보기"><ArrowDown/></a>
      </div>
    </section>
    <section id="overview" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10">
      <div className="grid border-y border-border md:grid-cols-3">{brand.highlights.map((item,i)=><article key={item.title} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 first:pl-0 last:border-r-0"><span className="text-xs text-muted-foreground">0{i+1}</span><h3 className="mt-5 font-serif text-2xl">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p></article>)}</div>
      <div className="mt-20 grid grid-cols-2 gap-2.5 lg:grid-cols-4">{brand.metrics.map((metric)=><div key={metric.label} className="rounded-md bg-surface px-5 py-9"><p className="font-serif text-3xl md:text-5xl">{metric.value}</p><p className="mt-3 text-xs text-muted-foreground">{metric.label}</p></div>)}</div>
    </section>
    {brand.sections.map((section,sectionIndex)=><section key={section.title} className={sectionIndex%2 ? "bg-surface" : "bg-background"}><div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-muted-foreground">{section.eyebrow}</p><h2 className="mt-5 text-4xl leading-tight md:text-5xl">{section.title}</h2>{section.body&&<p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">{section.body}</p>}</div><div className="grid gap-2.5 sm:grid-cols-2">{section.items.map((item,i)=><article key={`${item.title}-${i}`} className="min-h-40 rounded-md border border-border bg-background p-6"><span className="text-xs text-muted-foreground">{String(i+1).padStart(2,"0")}</span><h3 className="mt-5 font-serif text-xl">{item.title}</h3>{item.text&&<p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>}</article>)}</div></div></div></section>)}
    <section className="overflow-hidden border-y border-border bg-background py-24"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow text-muted-foreground">MATERIAL &amp; REFERENCE</p><h2 className="mt-4 text-4xl">현장에서 확인하는 품질</h2></div><span className="hidden text-sm text-muted-foreground md:block">제안서 수록 이미지</span></div><div className="flex snap-x gap-4 overflow-x-auto pb-5">{brand.gallery.map((id,i)=><figure key={id} className="min-w-[78vw] snap-start sm:min-w-[430px]"><img src={asset(id)} alt={`${brand.name} ${i+1}`} className="aspect-[4/3] w-full rounded-md object-cover"/><figcaption className="mt-3 text-xs text-muted-foreground">{brand.english} · {String(i+1).padStart(2,"0")}</figcaption></figure>)}</div></div></section>
    <nav className="grid md:grid-cols-2"><Link to={`/brands/${prev.slug}` as "/brands/huanqiu-stone"} className="group flex items-center gap-5 border-b border-border px-5 py-10 hover:bg-muted md:border-b-0 md:border-r lg:px-10"><ArrowLeft/><span><small className="text-muted-foreground">PREVIOUS</small><b className="mt-1 block text-xl">{prev.name}</b></span></Link><Link to={`/brands/${next.slug}` as "/brands/huanqiu-stone"} className="group flex items-center justify-end gap-5 px-5 py-10 text-right hover:bg-muted lg:px-10"><span><small className="text-muted-foreground">NEXT</small><b className="mt-1 block text-xl">{next.name}</b></span><ArrowRight/></Link></nav>
    <ContactBand/>
  </SiteShell>
}