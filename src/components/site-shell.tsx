import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { brands } from "@/lib/site-data";
import { buttonVariants } from "@/components/ui/button";

const productLinks = {
  "huanqiu-stone": "/brands/huanqiu-stone-products",
  "intco-decor": "/brands/intco-decor-products",
  "forest-house": "/brands/forest-house-products",
  "lion-king": "/brands/lion-king-products",
  "shuofeng": "/brands/shuofeng-products",
} as const;

export function SiteShell({ children, overlayHeader = false, hideFooter = false, hideFooterLogo = false, fullscreen = false }: { children: ReactNode; overlayHeader?: boolean; hideFooter?: boolean; hideFooterLogo?: boolean; fullscreen?: boolean }) {
  return <div className={fullscreen ? "flex h-svh flex-col overflow-hidden bg-background text-foreground" : "min-h-screen bg-background text-foreground"}>
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`relative flex items-center justify-end px-6 py-4 sm:px-10 sm:py-5 md:px-14 ${overlayHeader ? "text-primary-foreground" : "text-foreground"}`}>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex" aria-label="주요 메뉴">
          <Link to="/" activeOptions={{exact:true}} className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>Home</Link>
          <Link to="/company" className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>회사소개</Link>
          <div className="group relative py-7">
             <span className={`${overlayHeader ? "text-xs font-semibold text-primary-foreground/80" : "nav-link"} flex cursor-default items-center gap-1`}>브랜드 <ChevronDown size={13}/></span>
             <div className="invisible absolute left-1/2 top-[58px] w-80 -translate-x-1/2 rounded-md border border-border bg-background p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
               {brands.map((brand)=><div key={brand.slug}>
                 <Link to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="flex items-center justify-between rounded-sm px-4 py-3 text-sm hover:bg-surface"><span><b className="mr-3 font-normal text-muted-foreground">{brand.number}</b>{brand.name}</span><span className="text-[10px] text-muted-foreground">{brand.english}</span></Link>
                 {brand.slug in productLinks && <Link to={productLinks[brand.slug as keyof typeof productLinks]} className="mb-1 ml-9 flex items-center justify-between rounded-sm px-4 py-1.5 text-xs text-muted-foreground hover:bg-surface hover:text-foreground"><span>제품소개</span><ArrowUpRight size={11} className="text-gold"/></Link>}
               </div>)}
            </div>
          </div>
            <a href="tel:01031138668" className={overlayHeader ? "text-xs font-semibold text-primary-foreground/80 hover:text-primary-foreground" : "nav-link"}>문의하기</a>
        </nav>
        <a href="tel:01031138668" className={buttonVariants({className:`hidden h-auto rounded-lg px-5 py-2.5 shadow-none sm:inline-flex ${overlayHeader ? "bg-background text-foreground hover:bg-surface" : ""}`})}><Phone size={14}/> 견적 상담</a>
        <details className="relative sm:hidden"><summary className="list-none cursor-pointer p-2" aria-label="메뉴 열기"><Menu/></summary><div className="absolute right-0 mt-3 w-72 rounded-md border border-border bg-background p-3 text-foreground shadow-sm"><Link to="/" className="mobile-link">Home</Link><Link to="/company" className="mobile-link">회사소개</Link>{brands.map((brand)=><Link key={brand.slug} to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="mobile-link"><span className="mr-2 text-muted-foreground">{brand.number}</span>{brand.name}</Link>)}<Link to="/brands/huanqiu-stone-products" className="mobile-link font-semibold">환구석재 제품소개</Link><Link to="/brands/intco-decor-products" className="mobile-link font-semibold">잉코 데코 제품소개</Link><Link to="/brands/forest-house-products" className="mobile-link font-semibold">이센메이쥐 제품소개</Link><Link to="/brands/lion-king-products" className="mobile-link font-semibold">라이온킹 제품소개</Link><Link to="/brands/shuofeng-products" className="mobile-link font-semibold">슈오펑 제품소개</Link></div></details>
      </div>
    </header>
    <main className={fullscreen ? "min-h-0 flex-1" : undefined}>{children}</main>
    {!hideFooter && <footer className="shrink-0 border-t border-border bg-background text-foreground">
      <div className={`mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-4 gap-y-1 px-5 text-[10px] leading-5 text-muted-foreground sm:justify-between sm:text-[11px] lg:px-10 ${fullscreen ? "py-2.5" : "py-6"}`}>
        <div className="flex items-center gap-3">
          {!hideFooterLogo && <img src="/logo.jpg" alt="이음앤빌드" className="h-6 w-auto object-contain"/>}
          <span className="font-semibold tracking-[.12em] text-foreground">EUM&amp;BUILD CO., LTD.</span>
        </div>
        <p>서울 강남구 테헤란로 329 삼흥빌딩 1612호</p>
        <a className="inline-flex items-center gap-1.5 text-foreground" href="tel:01031138668">010-3113-8668 <ArrowUpRight size={13}/></a>
        <p>© {new Date().getFullYear()} 주식회사 이음앤빌드</p>
      </div>
    </footer>}
  </div>
}

export function ContactBand(){return <section className="bg-surface"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-24 lg:flex-row lg:items-end lg:px-10"><div><p className="eyebrow text-muted-foreground">START A PROJECT</p><h2 className="mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">사양과 물량을 알려주시면<br/>가능 여부와 조건을 즉시 회신합니다.</h2></div><a href="tel:01031138668" className={buttonVariants({size:"lg",className:"h-auto rounded-lg py-4 shadow-none"})}>빠른 견적 문의 <ArrowUpRight size={17}/></a></div></section>}