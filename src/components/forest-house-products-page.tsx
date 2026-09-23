import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import fz701 from "@/assets/forest-house-products/fz701.jpg.asset.json";
import fz702 from "@/assets/forest-house-products/fz702.jpg.asset.json";
import fz703 from "@/assets/forest-house-products/fz703.jpg.asset.json";
import fz705 from "@/assets/forest-house-products/fz705.jpg.asset.json";
import fz706 from "@/assets/forest-house-products/fz706.jpg.asset.json";
import fz707 from "@/assets/forest-house-products/fz707.jpg.asset.json";
import fz708 from "@/assets/forest-house-products/fz708.jpg.asset.json";
import fz709 from "@/assets/forest-house-products/fz709.jpg.asset.json";
import fz710 from "@/assets/forest-house-products/fz710.jpg.asset.json";
import fz711 from "@/assets/forest-house-products/fz711.jpg.asset.json";
import pressLine from "@/assets/forest-house/015.jpg.asset.json";

const series = [
  { image: fz701.url, name: "라이트 오크", tone: "밝고 내추럴한 오크 톤" },
  { image: fz702.url, name: "애쉬 그레이", tone: "차분하게 가라앉은 그레이 톤" },
  { image: fz703.url, name: "골든 오크", tone: "결감이 살아 있는 따뜻한 황금빛" },
  { image: fz705.url, name: "샌드 베이지", tone: "부드럽고 밝은 베이지 톤" },
  { image: fz706.url, name: "크림 우드", tone: "맑고 화사한 크림빛 우드" },
  { image: fz707.url, name: "내추럴 우드", tone: "절제된 무광의 담백한 톤" },
  { image: fz708.url, name: "웜 아이보리", tone: "은은하고 포근한 밝은 톤" },
  { image: fz709.url, name: "스모크 우드", tone: "깊이감 있는 그레이 브라운" },
  { image: fz710.url, name: "월넛 브라운", tone: "무게감 있는 다크 우드 톤" },
  { image: fz711.url, name: "레드 마호가니", tone: "고급스러운 붉은 기의 실목 톤" },
] as const;

const features = [
  ["3중 실목 기재", "세 겹의 실목을 교차로 결합해 온도와 습도 변화에 따른 뒤틀림을 줄였습니다."],
  ["지열 난방 대응", "열 전달이 빠르고 고르게 이뤄지는 구조로 바닥 난방 공간에 적합합니다."],
  ["360도 밀랍 마감", "전면 밀랍 처리와 이면 경화 처리로 외부 습기의 침투를 막습니다."],
  ["저방출 소재", "저방출 기재와 활성탄 성분을 적용해 실내 공기 질을 고려했습니다."],
] as const;

export function ForestHouseProductsPage() {
  return <SiteShell>
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-10 lg:pb-24 lg:pt-36">
        <Link to="/brands/forest-house" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/> 이센메이쥐 소개</Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow text-muted-foreground">04 · FOREST HOUSE · PRODUCTS</p>
          <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">신3중 실목마루<br/>FZ70 시리즈</h1>
          <p className="mt-6 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">이센메이쥐가 직접 인쇄·함침·기재 가공부터 완제품까지 생산하는 지열 대응 실목마루입니다. 10가지 색상을 한 페이지에서 비교해 보세요.</p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold text-muted-foreground"><span>색상 10종</span><span>지열 난방 대응</span><span>자체 공장 직생산</span></div>
        </div>
        <figure className="overflow-hidden bg-surface"><img src={fz703.url} alt="신3중 실목마루 FZ70 시리즈 골든 오크 시공 공간" className="aspect-[4/3] w-full object-cover"/><figcaption className="flex items-center justify-between px-5 py-3 text-[11px] text-muted-foreground"><span className="font-bold text-gold">FZ70 SERIES</span><span>신3중 실목마루 · 10 COLORS</span></figcaption></figure>
      </div>
    </section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24">
        <img src={heatingFloor.url} alt="신3중 실목마루 구조와 지열 기술" className="mx-auto max-h-[640px] w-full max-w-xl bg-background object-contain"/>
        <div>
          <p className="eyebrow text-muted-foreground">STRUCTURE</p>
          <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl">난방열을 고르게 전달하는<br/>3중 실목 구조</h2>
          <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">표면 인쇄지부터 기재까지 같은 공장에서 만들어 색상과 품질 편차가 적고, 프로젝트 물량에 맞춰 안정적으로 공급됩니다.</p>
          <div className="mt-9 divide-y divide-border border-y border-border">{features.map(([title,text],i)=><article key={title} className="grid gap-3 py-5 sm:grid-cols-[42px_150px_1fr]"><span className="text-xs font-bold text-gold">0{i+1}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow text-muted-foreground">COLOR COLLECTION</p>
        <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">10가지 색상, 실제 시공 공간으로 확인하세요</h2>
        <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">모든 사진은 실제 시공 공간을 촬영한 이미지입니다. 마음에 드는 색상을 정해 주시면 샘플과 사양을 한국에서 바로 검토해 드립니다.</p>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {series.map((item,i)=><article key={item.name} className="group bg-surface">
          <div className="overflow-hidden"><img src={item.image} alt={`신3중 실목마루 ${item.name} 시공 공간`} className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-[4/5]"/></div>
          <div className="flex items-baseline justify-between px-5 py-4">
            <div><p className="text-[10px] font-bold tracking-[0.22em] text-gold">FZ70 · {String(i+1).padStart(2,"0")}</p><h3 className="mt-1.5 text-lg font-bold">{item.name}</h3></div>
            <p className="max-w-[45%] text-right text-[11px] leading-5 text-muted-foreground">{item.tone}</p>
          </div>
        </article>)}
      </div>
    </div></section>

    <section className="border-t border-border bg-surface"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p>
        <h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">원하는 색상과 면적을 알려주시면 샘플과 공급 조건을 바로 안내합니다.</h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">이음앤빌드가 이센메이쥐 생산라인과 직접 사양·납기·물량을 조율합니다.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="tel:01031138668" className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품·사양 문의 <ArrowRight size={16}/></a>
        <Link to="/brands/forest-house" className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-primary-foreground">이센메이쥐 소개로</Link>
      </div>
    </div></section>
  </SiteShell>;
}
