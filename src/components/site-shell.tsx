import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { brands } from "@/lib/site-data";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLocale, type Locale } from "@/lib/i18n";

const productLinks = {
  "huanqiu-stone": "/brands/huanqiu-stone-products",
  "intco-decor": "/brands/intco-decor-products",
  "forest-house": "/brands/forest-house-products",
  "lion-king": "/brands/lion-king-products",
  "shuofeng": "/brands/shuofeng-products",
} as const;

const materialNames = {
  "huanqiu-stone": "석재",
  "intco-decor": "내외장재",
  "lion-king": "타일",
  "jincheng-glass": "유리",
  "forest-house": "마루",
  "shuofeng": "목재",
} as const;

export function SiteShell({ children, hideFooter = false, hideFooterLogo = false, fullscreen = false }: { children: ReactNode; hideFooter?: boolean; hideFooterLogo?: boolean; fullscreen?: boolean }) {
  const { locale, setLocale } = useLocale();
  const languageSelector = (mobile = false) => <div className={`flex items-center ${mobile ? "justify-between border-b border-border pb-3" : "hidden gap-0.5 lg:flex"}`} role="group" aria-label="언어 선택">
    {(["ko", "en", "ja"] as Locale[]).map((item) => <Button key={item} type="button" variant="ghost" size="sm" aria-pressed={locale === item} onClick={() => setLocale(item)} className={`h-7 min-w-8 rounded-sm px-2 text-[10px] tracking-[0.08em] ${mobile ? (locale === item ? "flex-1 bg-foreground text-background hover:bg-foreground" : "flex-1 border border-border text-muted-foreground hover:text-foreground") : (locale === item ? "bg-foreground text-background hover:bg-foreground" : "text-muted-foreground hover:text-foreground")}`}>{item === "ja" ? "JP" : item.toUpperCase()}</Button>)}
  </div>;
  return <div className={fullscreen ? "flex h-svh flex-col overflow-hidden bg-background text-foreground" : "min-h-screen bg-background text-foreground"}>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background text-foreground">
      <div className="relative flex h-12 items-center justify-end px-5 sm:h-14 sm:px-8 md:px-10">
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex" aria-label="주요 메뉴">
          <Link to="/" activeOptions={{exact:true}} className="nav-link">Home</Link>
          <Link to="/company" className="nav-link">회사소개</Link>
          <div className="group relative py-3">
             <span className="nav-link flex cursor-default items-center gap-1">자재 <ChevronDown size={13}/></span>
             <div className="invisible absolute left-1/2 top-[40px] w-80 -translate-x-1/2 rounded-md border border-border bg-background p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100">
               {brands.map((brand)=><div key={brand.slug}>
                  <Link to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="flex items-center justify-between rounded-sm px-4 py-3 text-sm hover:bg-surface"><span><b className="mr-3 font-normal text-muted-foreground">{brand.number}</b>{materialNames[brand.slug as keyof typeof materialNames]}</span><span className="text-[10px] text-muted-foreground">{brand.name}</span></Link>
                 {brand.slug in productLinks && <Link to={productLinks[brand.slug as keyof typeof productLinks]} className="mb-1 ml-9 flex items-center justify-between rounded-sm px-4 py-1.5 text-xs text-muted-foreground hover:bg-surface hover:text-foreground"><span>제품소개</span><ArrowUpRight size={11} className="text-gold"/></Link>}
               </div>)}
            </div>
          </div>
            <a href="tel:025534122" className="nav-link">문의하기</a>
        </nav>
<div className="flex items-center gap-2">{languageSelector()}<span className="hidden lg:inline-flex"><a href="tel:025534122" className={buttonVariants({className:"h-auto rounded-lg px-5 py-2.5 shadow-none"})}><Phone size={14}/> 견적 상담</a></span></div>
          <div className="flex items-center gap-1 lg:hidden"><div className="flex items-center gap-0.5" role="group" aria-label="언어 선택">{(["ko", "en", "ja"] as Locale[]).map((item) => <button key={item} type="button" aria-pressed={locale === item} onClick={() => setLocale(item)} className={`h-7 min-w-7 rounded-sm px-1 text-[10px] font-medium tracking-[0.05em] ${locale === item ? "bg-foreground text-background" : "text-muted-foreground"}`}>{item === "ja" ? "JP" : item.toUpperCase()}</button>)}</div><a href="tel:025534122" aria-label="전화 문의" className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-surface"><Phone size={17}/></a><details className="group relative"><summary className="list-none cursor-pointer p-2" aria-label="메뉴 열기"><Menu/></summary><div className="absolute right-0 mt-3 hidden max-h-[calc(100dvh-5.5rem)] w-72 overflow-y-auto overscroll-contain rounded-md border border-border bg-background p-3 pb-8 text-foreground shadow-sm group-open:block"><Link to="/" className="mobile-link mt-2">Home</Link><Link to="/company" className="mobile-link">회사소개</Link>{brands.map((brand)=><div key={brand.slug}><Link to={`/brands/${brand.slug}` as "/brands/huanqiu-stone"} className="mobile-link"><span className="mr-2 text-muted-foreground">{brand.number}</span>{materialNames[brand.slug as keyof typeof materialNames]}<span className="ml-2 text-xs text-muted-foreground">{brand.name}</span></Link>{brand.slug in productLinks && <Link to={productLinks[brand.slug as keyof typeof productLinks]} className="mobile-link pl-8 text-xs text-muted-foreground">제품소개</Link>}</div>)}</div></details></div>
      </div>
    </header>
    <main className={fullscreen ? "min-h-0 flex-1" : undefined}>{children}</main>
    {!hideFooter && <footer className="shrink-0 border-t border-border bg-background text-foreground">
      <div className={`mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-4 gap-y-1 px-5 text-[10px] leading-5 text-muted-foreground sm:justify-between sm:text-[11px] lg:px-10 ${fullscreen ? "py-2.5" : "py-6"}`}>
        <div className="flex items-center gap-3">
          {!hideFooterLogo && <img src="/logo.jpg" alt="이음앤빌드" className="h-6 w-auto object-contain"/>}
          <span className="font-semibold text-foreground">주식회사 이음앤빌드</span>
        </div>
        <p>서울 강남구 테헤란로 329 삼흥빌딩 1612호</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1"><a className="inline-flex items-center gap-1.5 text-foreground" href="tel:025534122">02-553-4122 <ArrowUpRight size={13}/></a><a className="text-foreground" href="mailto:eumbuild7@naver.com">eumbuild7@naver.com</a></div>
        <p>© {new Date().getFullYear()} 주식회사 이음앤빌드</p>
      </div>
    </footer>}
  </div>
}

export function ContactBand(){return <section className="bg-surface"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-24 lg:flex-row lg:items-end lg:px-10"><div><p className="eyebrow text-muted-foreground">START A PROJECT</p><h2 className="mt-5 max-w-3xl text-2xl leading-tight md:text-4xl">필요하신 사양과 물량을 알려주시면<br/>빠르게 검토해 답변드립니다.</h2></div><a href="tel:025534122" className={buttonVariants({size:"lg",className:"h-auto rounded-lg py-4 shadow-none"})}>빠른 견적 문의 <ArrowUpRight size={17}/></a></div></section>}