import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import portlandInterior from "@/assets/lion/portland-interior.jpg.asset.json";
import y1 from "@/assets/lion/portland-y1.jpg.asset.json";
import y2 from "@/assets/lion/portland-y2.jpg.asset.json";
import y3 from "@/assets/lion/portland-y3.jpg.asset.json";
import y4 from "@/assets/lion/portland-y4.jpg.asset.json";
import y5 from "@/assets/lion/portland-y5.jpg.asset.json";
import y6 from "@/assets/lion/portland-y6.jpg.asset.json";
import m20 from "@/assets/lion/portland-m20.jpg.asset.json";
import m24 from "@/assets/lion/portland-m24.jpg.asset.json";
import m25 from "@/assets/lion/portland-m25.jpg.asset.json";
import m26 from "@/assets/lion/portland-m26.jpg.asset.json";
import m27 from "@/assets/lion/portland-m27.jpg.asset.json";
import selected002 from "@/assets/lion/selected-002.jpg.asset.json";
import selected007 from "@/assets/lion/selected-007.jpg.asset.json";
import selected178 from "@/assets/lion/selected-178.jpg.asset.json";
import selected312 from "@/assets/lion/selected-312.jpg.asset.json";
import selected339 from "@/assets/lion/selected-339.jpg.asset.json";
import selected341 from "@/assets/lion/selected-341.jpg.asset.json";

const plainSurfaces = [
  ["Y1", y1.url], ["Y2", y2.url], ["Y3", y3.url],
  ["Y4", y4.url], ["Y5", y5.url], ["Y6", y6.url],
];

const moldedSurfaces = [
  ["M20", m20.url], ["M24", m24.url], ["M25", m25.url],
  ["M26", m26.url], ["M27", m27.url],
];

const selectedCollections = [
  { title: "이탈리안 그레이", size: "750 × 1500 mm", models: "CX715P97 · CX715P98", image: selected002.url },
  { title: "마이크로시멘트", size: "750 × 1500 mm", models: "CX75021GY · CX75022GY · CX75023GY", image: selected007.url },
  { title: "사암", size: "900 × 1800 mm", models: "SW918103GY · SW918104GY · SW918105GY", image: selected178.url },
  { title: "홀로그램 컬러", size: "900 × 1800 mm", models: "SW918115GY · SW918116GY", image: selected312.url },
  { title: "말라카이트 · 블루 오션", size: "900 × 1800 mm", models: "SY918077GY · SY918078GY", image: selected339.url },
  { title: "트래버틴", size: "900 × 1800 mm", models: "CX918T07–T12 · CX918T21–T25", image: selected341.url },
];

export function LionKingProductsPage() {
  return (
    <SiteShell>
      <main className="overflow-hidden bg-background text-foreground">
        <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 lg:px-14 lg:pt-36">
          <Link to="/brands/lion-king" className="inline-flex items-center gap-2 text-[11px] font-semibold text-muted-foreground hover:text-foreground">
            <ArrowLeft size={13} /> 라이온킹 소개
          </Link>
          <div className="mt-6 flex flex-col justify-between gap-6 border-b border-border pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-gold">광둥 라이온 킹 세라믹스 · 포틀랜드 2025</p>
              <h1 className="mt-4 break-keep text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
                포틀랜드 시리즈,<br />한 가지 돌의 여러 가지 표면
              </h1>
            </div>
            <p className="max-w-md break-keep text-sm leading-7 text-muted-foreground">
              같은 색의 평면과 입체 표면을 조합해 바닥과 벽을 자연스럽게 연결합니다.
            </p>
          </div>
          <a href="/catalogs/lion-king-product-catalog-ko.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">
            제품 카탈로그 보기 <ExternalLink size={16} />
          </a>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-14">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">평면 6종</h2>
            <span className="text-[10px] font-semibold text-muted-foreground">PLAIN SURFACE</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {plainSurfaces.map(([name, src]) => (
              <figure key={name}>
                <div className="aspect-[1/2] overflow-hidden bg-surface">
                  <img src={src} alt={`포틀랜드 ${name} 평면 타일`} className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-xs font-semibold">{name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-[1280px] px-5 sm:px-8 lg:px-14">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">몰드면 5종</h2>
            <span className="text-[10px] font-semibold text-muted-foreground">MOLDED SURFACE</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {moldedSurfaces.map(([name, src]) => (
              <figure key={name}>
                <div className="aspect-[1/2] overflow-hidden bg-surface">
                  <img src={src} alt={`포틀랜드 ${name} 입체 타일`} className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-2 text-xs font-semibold">{name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="eyebrow text-gold">SELECTED COLLECTIONS</p><h2 className="mt-4 break-keep text-3xl font-semibold leading-tight sm:text-4xl">새 카탈로그에서 고른<br />대표 제품 컬렉션</h2></div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">대형 공간에 활용하기 좋은 주요 색상과 질감을 규격별로 간결하게 선별했습니다.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:gap-x-5">
              {selectedCollections.map((item) => <article key={item.title}>
                <div className="aspect-[3/4] overflow-hidden bg-background"><img src={item.image} alt={`${item.title} 라이온킹 타일`} className="h-full w-full object-cover" /></div>
                <h3 className="mt-4 text-base font-semibold sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold text-gold">{item.size}</p>
                <p className="mt-2 break-words text-[11px] leading-5 text-muted-foreground">{item.models}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="grid gap-10 border-y border-border bg-surface lg:grid-cols-12">
            <figure className="lg:col-span-7">
              <div className="aspect-[4/3] h-full overflow-hidden bg-background">
                <img src={portlandInterior.url} alt="포틀랜드 Y4 타일이 적용된 거실" className="h-full w-full object-cover" />
              </div>
            </figure>
            <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:col-span-5 lg:py-16 lg:pl-0 lg:pr-14">
              <p className="eyebrow text-gold">PROJECT FORMAT</p>
              <h2 className="mt-4 break-keep text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
                공간 규모에 맞춘<br />다섯 가지 규격
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-px bg-border text-sm font-semibold">
                {["900 × 1800", "750 × 1500", "600 × 1200", "800 × 1350", "600 × 600"].map((size) => (
                  <div key={size} className="bg-background px-4 py-4">
                    {size}<span className="ml-1 text-[10px] text-muted-foreground">mm</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 break-keep text-xs leading-6 text-muted-foreground">
                프로젝트의 면적과 시공 조건에 따라 규격을 주문 제작할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 px-5 py-16 sm:flex-row sm:items-end sm:px-8 lg:px-14 lg:py-20">
            <div>
              <p className="eyebrow text-gold">KOREA PROJECT DESK</p>
              <h2 className="mt-4 break-keep text-2xl font-semibold tracking-normal sm:text-4xl">
                라이온킹의 한국 프로젝트는<br />이음앤빌드가 연결합니다.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/brands/lion-king" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-gold hover:text-foreground">
                라이온킹 소개 보기 <ArrowRight size={16} />
              </Link>
              <Link to="/company" className="inline-flex items-center gap-2.5 border border-foreground px-8 py-4 text-sm font-bold transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground">
                이음앤빌드 소개
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
