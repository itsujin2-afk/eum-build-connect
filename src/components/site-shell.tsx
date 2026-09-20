import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { brands } from "@/lib/site-data";
import { buttonVariants } from "@/components/ui/button";

function Logo() {
  return <img src="/logo.jpg" alt="이음앤빌드" className="h-10 w-auto object-contain sm:h-12" />;
}

export function SiteShell({ children, overlayHeader = false }: { children: ReactNode; overlayHeader?: boolean }) {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`flex items-center justify-between px-6 py-4 sm:px-10 sm:py-5 md:px-14 ${overlayHeader ? "text-primary-foreground" : "text-foreground"}`}>
        <Link to="/" aria-label="이음앤빌드 홈"><Logo/></Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="주요 메뉴">
          <Link to="/" activeOptions={{exact:true}} className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>Home</Link>
          <Link to="/company" className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>회사소개</Link>
          <div className="group relative py-7">
             <span className={`${overlayHeader ? "text-xs font-semibold text-primary-foreground/80" : "nav-link"} flex cursor-default items-center gap-1`}>브랜드 <ChevronDown size={13}/></span>
             <div className="invisible absolute left-1/2 top-[58px] w-80 -translate-x-1/2 rounded-md border border-border bg-background p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
               {brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="flex items-center justify-between rounded-sm px-4 py-3 text-sm hover:bg-surface"><span><b className="mr-3 font-normal text-muted-foreground">{brand.number}</b>{brand.name}</span><span className="text-[10px] text-muted-foreground">{brand.english}</span></Link>)}
            </div>
          </div>
            <a href="tel:01031138668" className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>문의하기</a>
        </nav>
        <a href="tel:01031138668" className={buttonVariants({className:`hidden h-auto rounded-lg px-5 py-2.5 shadow-none sm:inline-flex ${overlayHeader ? "bg-background text-foreground hover:bg-surface" : ""}`})}><Phone size={14}/> 견적 상담</a>
        <details className="relative sm:hidden"><summary className="list-none cursor-pointer p-2" aria-label="메뉴 열기"><Menu/></summary><div className="absolute right-0 mt-3 w-72 rounded-md border border-border bg-background p-3 shadow-sm"><Link to="/" className="mobile-link">Home</Link><Link to="/company" className="mobile-link">회사소개</Link>{brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="mobile-link"><span className="mr-2 text-muted-foreground">{brand.number}</span>{brand.name}</Link>)}</div></details>
      </div>
    </header>
    <main>{children}</main>
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div><img src="/logo.jpg" alt="이음앤빌드" className="h-32 w-auto max-w-full object-contain object-left"/><p className="mt-4 max-w-sm text-sm text-muted-foreground">중국 최정상 6개 건축자재 브랜드의 공식 한국 독점 HQ</p></div>
        <div><p className="eyebrow text-muted-foreground">HEAD OFFICE</p><p className="mt-4 text-sm leading-7">서울특별시 강남구 테헤란로 329<br/>삼흥빌딩 1612호 (역삼동)</p></div>
        <div><p className="eyebrow text-muted-foreground">KOREA BUSINESS</p><p className="mt-4 text-sm">조준우 공동대표이사</p><a className="mt-2 inline-flex items-center gap-2 text-xl" href="tel:01031138668">010-3113-8668 <ArrowUpRight size={18}/></a></div>
      </div><div className="border-t border-border px-5 py-5 text-center text-[10px] tracking-[.2em] text-muted-foreground">BRIDGING MARKETS, GOVERNING ASSETS. · EUM&amp;BUILD CO., LTD.</div>
    </footer>
  </div>
}

export function ContactBand(){return <section className="bg-surface"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-24 lg:flex-row lg:items-end lg:px-10"><div><p className="eyebrow text-muted-foreground">START A PROJECT</p><h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">사양과 물량을 알려주시면<br/>가능 여부와 조건을 즉시 회신합니다.</h2></div><a href="tel:01031138668" className={buttonVariants({size:"lg",className:"h-auto rounded-lg py-4 shadow-none"})}>빠른 견적 문의 <ArrowUpRight size={17}/></a></div></section>}