import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { brands } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="이음앤빌드 홈">
          <span className="text-2xl font-semibold">이음</span><span className="h-5 w-px bg-primary"/><span className="text-xs font-semibold tracking-[.18em] text-muted-foreground">&amp; BUILD</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          <Link to="/" activeOptions={{exact:true}} className="nav-link">HOME</Link>
          <Link to="/company" className="nav-link">COMPANY</Link>
          <div className="group relative py-7">
            <span className="nav-link flex cursor-default items-center gap-1">BRANDS <ChevronDown size={13}/></span>
            <div className="invisible absolute left-1/2 top-[72px] w-80 -translate-x-1/2 border border-border bg-background p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="flex items-center justify-between px-4 py-3 text-sm hover:bg-muted"><span><b className="mr-3 text-primary">{brand.number}</b>{brand.name}</span><span className="text-xs text-muted-foreground">{brand.english}</span></Link>)}
            </div>
          </div>
        </nav>
        <a href="tel:01031138668" className="hidden items-center gap-2 bg-primary px-5 py-3 text-xs font-bold text-primary-foreground transition hover:bg-primary/90 sm:flex"><Phone size={14}/> 견적 문의</a>
        <details className="relative lg:hidden"><summary className="list-none cursor-pointer p-2" aria-label="메뉴 열기"><Menu/></summary><div className="absolute right-0 mt-3 w-72 border border-border bg-background p-3 shadow-xl"><Link to="/" className="mobile-link">HOME</Link><Link to="/company" className="mobile-link">COMPANY</Link>{brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="mobile-link"><span className="mr-2 text-primary">{brand.number}</span>{brand.name}</Link>)}</div></details>
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div><p className="text-3xl font-semibold">이음 &amp; BUILD</p><p className="mt-4 max-w-sm text-sm text-background/60">중국 최정상 6개 건축자재 브랜드의 공식 한국 독점 HQ</p></div>
        <div><p className="eyebrow text-background/50">HEAD OFFICE</p><p className="mt-4 text-sm leading-7">서울특별시 강남구 테헤란로 329<br/>삼흥빌딩 1612호 (역삼동)</p></div>
        <div><p className="eyebrow text-background/50">KOREA BUSINESS</p><p className="mt-4 text-sm">조준우 공동대표이사</p><a className="mt-2 inline-flex items-center gap-2 text-xl" href="tel:01031138668">010-3113-8668 <ArrowUpRight size={18}/></a></div>
      </div><div className="border-t border-background/15 px-5 py-5 text-center text-[10px] tracking-[.2em] text-background/45">BRIDGING MARKETS, GOVERNING ASSETS. · EUM&amp;BUILD CO., LTD.</div>
    </footer>
  </div>
}

export function ContactBand(){return <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-20 lg:flex-row lg:items-end lg:px-10"><div><p className="eyebrow text-primary-foreground/65">START A PROJECT</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">사양과 물량을 알려주시면<br/>가능 여부와 조건을 즉시 회신합니다.</h2></div><a href="tel:01031138668" className="inline-flex items-center gap-3 border border-primary-foreground/40 px-6 py-4 text-sm font-bold transition hover:bg-primary-foreground hover:text-primary">빠른 견적 문의 <ArrowUpRight size={17}/></a></div></section>}