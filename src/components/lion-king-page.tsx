import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import spaceAesthetics from "@/assets/lion/space-aesthetics.jpg.asset.json";
import portlandHero from "@/assets/lion/portland-hero.jpg";


const strengths = [
  { number: "01", title: "연구개발", text: "국내외 기술과 디자인 흐름을 제품 개발에 빠르게 반영합니다." },
  { number: "02", title: "생산 설비", text: "해외 첨단 장비를 도입해 섬세한 문양과 안정적인 표면을 구현합니다." },
  { number: "03", title: "품질 관리", text: "생산 전 과정을 국제 품질관리 기준에 따라 엄격하게 검사합니다." },
];

const productLines = [
  ["FULL-BODY", "풀바디 대리석 타일", "타일 전체에 자연스러운 석재 질감이 이어져, 절단면까지 고른 완성도를 보여줍니다."],
  ["MARBLE", "대리석 타일", "천연 대리석 특유의 깊이 있는 결을 그대로 담아, 공간에 고급스러운 분위기를 더합니다."],
  ["DIAMOND GLAZE", "다이아몬드 글레이즈", "단단하고 매끄러운 표면 덕분에 질감이 선명하게 살아 있고, 오래 사용해도 관리가 쉽습니다."],
  ["INTERIOR WALL", "내벽 타일", "주거 공간과 상업 공간 모두에 어울리는 차분한 톤으로, 벽면을 깔끔하게 정돈합니다."],
];

export function LionKingPage() {
  return (
    <SiteShell>
      <main className="overflow-hidden bg-background text-foreground">
        <section className="mx-auto grid min-h-[82svh] max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-12 lg:px-14 lg:pb-20 lg:pt-32">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold">03 · 광둥 라이온 킹 세라믹스</p>
            <h1 className="mt-5 break-keep text-[42px] font-semibold leading-[1.12] tracking-normal sm:text-[58px] lg:text-[72px]">
              공간에 남는 것은<br />타일이 아니라<br /><span className="text-gold">표정입니다</span>
            </h1>
            <p className="mt-7 max-w-md break-keep text-sm leading-7 text-muted-foreground sm:text-base">
              광둥성 포산에서 타일의 생산과 연구개발, 판매를 함께 운영하는 라이온킹. 천연석의 결을 현대적인 표면 기술로 다시 만듭니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 text-[11px] font-semibold tracking-normal text-muted-foreground">
              <span>대리석 타일</span><span>다이아몬드 글레이즈</span><span>내벽 타일</span>
            </div>
            <Link to="/brands/lion-king-products" className="mt-9 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-gold hover:text-foreground">제품 소개 보기 <ArrowRight size={16} /></Link>
          </div>
          <figure className="relative lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-surface">
              <img src={portlandHero} alt="라이온킹 세라믹 타일이 적용된 공간" className="h-full w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]" />
            </div>
            <figcaption className="mt-3 flex justify-between text-[10px] font-semibold text-muted-foreground">
              <span>GUANGDONG · FOSHAN</span><span>VISION LIFE</span>
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-28">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold">VISION LIFE</p>
              <h2 className="mt-4 break-keep text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">시각에서 생활로,<br />표면에서 공간으로</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p className="max-w-2xl break-keep text-lg font-medium leading-9">라이온킹은 타일을 단순한 마감재가 아닌, 공간의 분위기와 사용하는 사람의 취향을 담는 재료로 바라봅니다.</p>
              <p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">세계의 디자인 흐름을 살피고 자연석의 질감과 색을 새롭게 해석합니다. 자연스럽고 예술적이며 개성 있는 석재 효과로 주거와 상업 공간에 오래 남는 인상을 만듭니다.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-28">
          <figure className="lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden bg-surface">
              <img src={spaceAesthetics.url} alt="라이온킹이 제안하는 석재 질감과 공간 미학" className="h-full w-full object-cover" />
            </div>
          </figure>
          <div className="lg:col-span-7 lg:pl-10">
            <p className="eyebrow text-gold">SPACE AESTHETICS</p>
            <h2 className="mt-4 break-keep text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">포산에서 완성하는<br />현대적인 석재의 감각</h2>
            <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-muted-foreground">중국 도자기 산업의 중심지인 포산에 기반을 두고 풀바디 대리석 타일, 대리석 타일, 다이아몬드 글레이즈 타일, 내벽 타일을 직접 개발하고 생산합니다.</p>
            <div className="mt-12 divide-y divide-border border-y border-border">
              {strengths.map((item) => (
                <div key={item.number} className="grid grid-cols-[44px_110px_1fr] gap-3 py-5 sm:grid-cols-[56px_150px_1fr]">
                  <span className="text-xs font-semibold text-gold">{item.number}</span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="break-keep text-xs leading-6 text-muted-foreground sm:text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow text-gold">PRODUCT SYSTEM</p>
                <h2 className="mt-4 break-keep text-3xl font-semibold tracking-normal sm:text-5xl">네 가지 타일,<br />하나의 기준</h2>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8">
                {productLines.map(([label, title, text]) => (
                  <article key={label} className="bg-background p-6 sm:p-8">
                    <p className="text-[10px] font-semibold text-gold">{label}</p>
                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 px-5 py-16 sm:flex-row sm:items-end sm:px-8 lg:px-14 lg:py-20">
            <div>
              <p className="eyebrow text-gold">PORTLAND · 2025</p>
              <h2 className="mt-4 break-keep text-2xl font-semibold tracking-normal sm:text-4xl">포틀랜드 시리즈의 표면과 규격은<br />제품 소개에서 확인하세요.</h2>
            </div>
            <Link to="/brands/lion-king-products" className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-gold hover:text-foreground">제품 소개 보기 <ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="flex flex-col justify-between gap-8 border-t border-foreground pt-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-gold">KOREA PROJECT DESK</p>
              <h2 className="mt-4 break-keep text-2xl font-semibold tracking-normal sm:text-4xl">라이온킹의 한국 프로젝트는<br />이음앤빌드가 연결합니다.</h2>
            </div>
            <Link to="/company" className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-bold transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground">이음앤빌드 소개</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}