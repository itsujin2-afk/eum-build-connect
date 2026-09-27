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

const surfaceSeries = [
  ["포틀랜드", "평면 Y1–Y6 · 몰드 M20/M24/M25/M26/M27"],
  ["라임스톤", "라이트 그레이 · 베이지 · 옐로우 · 미디엄 그레이 · 브라운 · 블랙"],
  ["운산석", "운산석 1–6 · 몰드 M20/M24/M25/M26/M27"],
  ["트래버틴", "트래버틴 1–4 · 몰드 M20/M24/M25/M26/M27"],
  ["앤티크 대리석 슬레이트", "슬레이트 1–6 · 몰드 M20/M24/M25/M26/M27"],
  ["수입 앤티크 대리석", "앤티크 대리석 1–6 · 몰드 M20/M24/M25/M26/M27"],
  ["스몰 포실", "스몰 포실 1–6 · 몰드 M20/M24/M25/M26/M27"],
  ["테라조", "테라조 1–6 · 몰드 M20/M24/M25/M26/M27"],
];

const selectedCollections = [
  { title: "이탈리안 그레이", size: "750 × 1500 mm", models: "CX715P97 · CX715P98", detail: "차분한 회색 결을 두 가지 패턴으로 구성한 대형 타일", image: selected002.url },
  { title: "마이크로시멘트", size: "750 × 1500 mm", models: "CX75021GY · CX75022GY · CX75023GY", detail: "절제된 시멘트 질감을 세 가지 톤으로 전개한 컬렉션", image: selected007.url },
  { title: "사암", size: "900 × 1800 mm", models: "SW918103GY · SW918104GY · SW918105GY", detail: "라이트·미디엄·다크 그레이로 이어지는 사암 질감", image: selected178.url },
  { title: "홀로그램 컬러", size: "900 × 1800 mm", models: "SW918115GY · SW918116GY", detail: "빛과 시선에 따라 표정이 달라지는 장식 표면", image: selected312.url },
  { title: "말라카이트 · 블루 오션", size: "900 × 1800 mm", models: "SY918077GY · SY918078GY", detail: "강한 색과 유기적인 결을 살린 포인트 컬렉션", image: selected339.url },
  { title: "트래버틴", size: "900 × 1800 mm", models: "CX918T07–T12 · CX918T21–T25", detail: "베이지·그레이·레드·브라운으로 확장된 트래버틴", image: selected341.url },
];

const productFamilies = [
  {
    size: "750 × 1500 mm",
    title: "대형 공간을 위한 석재·시멘트 표면",
    description: "이탈리안 그레이와 마이크로시멘트부터 소프트 매트 원석, 메탈과 블루 골드 패턴까지 폭넓게 구성됩니다.",
    lines: [
      ["이탈리안 그레이", "CX715P97 · CX715P98"],
      ["마이크로시멘트", "CX75021GY · CX75022GY · CX75023GY"],
      ["내추럴 원석 · 소프트 매트", "CX715T41 · CX715T42 · CX715R01 · CX715T159–T162 · CX715T52"],
      ["장식 표면", "SW75061GY · SW75007GY · SW75006GY"],
    ],
  },
  {
    size: "900 × 1800 mm",
    title: "결을 크게 보여주는 대형 타일",
    description: "넓은 면에서 패턴의 흐름이 자연스럽게 이어지는 트래버틴, 사암, 뉴트럴 컬러와 장식석 계열입니다.",
    lines: [
      ["트래버틴", "CX918T07–T12 · CX918T21–T25"],
      ["사암", "SW918103GY · SW918104GY · SW918105GY"],
      ["뉴트럴 컬러", "SW918106GY · SW918107GY · SW918108GY"],
      ["홀로그램 컬러", "SW918115GY · SW918116GY"],
      ["비너스 · 나일", "SY918047GY-L · SY918057GY-L"],
      ["말라카이트 · 블루 오션", "SY918077GY · SY918078GY"],
    ],
  },
  {
    size: "300 × 900 mm",
    title: "벽면 구성을 넓히는 장식 타일",
    description: "재료감을 살린 기본 타일부터 포인트 패턴과 공용 세트까지, 벽과 바닥의 조합을 세밀하게 설계할 수 있습니다.",
    lines: [
      ["우드 그레인", "KL39DC020–022 · KL39DC032–039"],
      ["패브릭", "KL39DC023–028"],
      ["앤티크", "KL39DC029–032 · KL39DC042–045"],
      ["테라조", "KL39DC001–004 · CX309Y02 · CX309Y03"],
      ["대리석 패턴 · 재즈 화이트", "KL39DC005–007 · KL39DC017–018"],
      ["벽·바닥 일체형", "CX309Y01–07"],
      ["순블랙 · 순화이트", "KLP001 · KLP002"],
      ["금도금 · 은도금", "KLP003–006"],
    ],
  },
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
              <p className="eyebrow text-gold">광둥 라이온 킹 세라믹스 · 2025 COLLECTION</p>
              <h1 className="mt-4 break-keep text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
                라이온킹 타일 컬렉션,<br />공간에 맞춘 다양한 표면
              </h1>
            </div>
            <p className="max-w-md break-keep text-sm leading-7 text-muted-foreground">
              포틀랜드의 평면·몰드 표면부터 대형 석재 패턴과 300 × 900 mm 장식 타일까지, 공간과 용도에 맞춰 선택할 수 있습니다.
            </p>
          </div>
          <a href="/catalogs/lion-king-product-catalog-ko.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">
            제품 카탈로그 보기 <ExternalLink size={16} />
          </a>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-14">
          <div className="mb-8 border-l-2 border-gold pl-5">
            <p className="eyebrow text-gold">PORTLAND SERIES</p>
            <h2 className="mt-3 text-2xl font-semibold">포틀랜드 표면 컬렉션</h2>
            <p className="mt-3 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">같은 계열의 색을 평면과 몰드면으로 함께 구성해 바닥과 벽, 포인트 면을 자연스럽게 연결합니다.</p>
          </div>
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

        <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold">STONE SURFACE SERIES</p>
              <h2 className="mt-4 break-keep text-3xl font-semibold leading-tight sm:text-4xl">여덟 가지 석재 표면 시리즈</h2>
              <p className="mt-5 break-keep text-sm leading-7 text-muted-foreground">각 시리즈는 평면과 입체 몰드면을 함께 구성해 같은 공간 안에서 색과 깊이를 이어갈 수 있습니다.</p>
            </div>
            <div className="border-t border-border lg:col-span-8">
              {surfaceSeries.map(([name, variants], index) => (
                <div key={name} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[2.5rem_12rem_1fr] sm:items-baseline sm:gap-5">
                  <span className="text-xs font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-sm font-semibold">{name}</h3>
                  <p className="break-keep text-xs leading-6 text-muted-foreground">{variants}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="eyebrow text-gold">LARGE FORMAT COLLECTIONS</p><h2 className="mt-4 break-keep text-3xl font-semibold leading-tight sm:text-4xl">대형 타일<br />주요 컬렉션</h2></div>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">석재와 시멘트의 질감을 넓은 면에 표현한 750 × 1500 mm, 900 × 1800 mm 제품군입니다.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:gap-x-5">
              {selectedCollections.map((item) => <article key={item.title}>
                <div className="aspect-[3/4] overflow-hidden bg-background"><img src={item.image} alt={`${item.title} 라이온킹 타일`} className="h-full w-full object-cover" /></div>
                <h3 className="mt-4 text-base font-semibold sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold text-gold">{item.size}</p>
                <p className="mt-2 break-keep text-xs leading-5 text-muted-foreground">{item.detail}</p>
                <p className="mt-2 break-words text-[11px] leading-5 text-muted-foreground">{item.models}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">PRODUCT RANGE</p>
            <h2 className="mt-4 break-keep text-3xl font-semibold leading-tight sm:text-4xl">규격별 제품 구성</h2>
            <p className="mt-5 break-keep text-sm leading-7 text-muted-foreground">대형 타일부터 장식 타일까지 카탈로그의 주요 제품군을 규격별로 정리했습니다. 각 시리즈의 전체 색상과 세부 모델은 제품 카탈로그에서 확인할 수 있습니다.</p>
          </div>
          <div className="mt-12 border-t border-border">
            {productFamilies.map((family) => (
              <article key={family.size} className="grid gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="text-xs font-bold text-gold">{family.size}</p>
                  <h3 className="mt-3 break-keep text-xl font-semibold">{family.title}</h3>
                  <p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{family.description}</p>
                </div>
                <dl className="lg:col-span-8">
                  {family.lines.map(([name, models]) => (
                    <div key={name} className="grid gap-1 border-b border-border py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6 sm:first:pt-0">
                      <dt className="text-sm font-semibold">{name}</dt>
                      <dd className="break-words text-xs leading-6 text-muted-foreground">{models}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {["빌라·주거", "5성급 호텔", "고급 오피스", "레스토랑", "대형 공공 공간"].map((space) => (
              <div key={space} className="bg-background px-5 py-5 text-sm font-semibold">{space}</div>
            ))}
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
