import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Sun, Volume2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import hqAerial from "@/assets/jincheng/hq-aerial.jpg.asset.json";
import lineCutting from "@/assets/jincheng/line-cutting.jpg.asset.json";
import lineEdging from "@/assets/jincheng/line-edging.jpg.asset.json";
import lineAutoclave from "@/assets/jincheng/line-autoclave.jpg.asset.json";
import glassTempered from "@/assets/jincheng/glass-tempered.jpg.asset.json";
import glassHollow from "@/assets/jincheng/glass-hollow.jpg.asset.json";
import glassLaminated from "@/assets/jincheng/glass-laminated.jpg.asset.json";
import glassFireproof from "@/assets/jincheng/glass-fireproof.jpg.asset.json";
import glassLowe from "@/assets/jincheng/glass-lowe.jpg.asset.json";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`] ?? "";

const metrics = [
  ["1996", "연태 진청 유리 설립"], ["33,000m²", "생산 부지 약 50여 무"], ["2023", "고신기술기업 인정"],
  ["307208", "치루 지분거래센터 상장"], ["10+개", "공급 성·시"], ["4개 라인", "강화 · 복층 · 접합 · Low-E"],
] as const;

const products = [
  { title: "강화 유리", en: "TEMPERED", image: glassTempered.url, points: ["깨져도 파편이 둔각의 작은 알갱이로 부서져 상해 위험이 낮습니다.", "같은 두께 일반 유리보다 충격·굽힘 강도가 3~5배입니다.", "최대 300°C의 온도 변화를 견디는 열안정성을 갖췄습니다."] },
  { title: "복층 유리", en: "HOLLOW", image: glassHollow.url, points: ["공기층이 열 전달을 줄여 냉난방 에너지를 절약합니다.", "음파를 흡수해 조용한 주거·업무 환경을 만듭니다.", "산·알칼리에 강해 황변이나 변색 없이 관리가 쉽습니다."] },
  { title: "접합 유리", en: "LAMINATED", image: glassLaminated.url, points: ["자외선을 99% 이상 차단합니다.", "PVB 필름이 소리의 전파를 막아 소음을 줄입니다.", "파손 시 파편이 중간층에 붙어 비산하지 않는 방폭 유리입니다."] },
  { title: "방화 유리", en: "FLAMEPROOF", image: glassFireproof.url, points: ["규정된 내화 시험에서 완전성과 단열성을 유지합니다.", "접합 복합, 철망, 복합 주입, 세슘칼륨 단층 등으로 구분됩니다.", "치수에 맞춰 가공해야 하며 복합 건식형만 절단이 가능합니다."] },
] as const;

const equipment = [
  ["Bottero", "이탈리아 자동 절단 라인"], ["JINGGLASS", "강화로"], ["Leway", "PVB 접합 오토클레이브"],
  ["BOZA", "Low-E 막층 제거기 · 자동 간봉 절곡기"], ["진보(金博)", "직선 연삭기"], ["HANJIANG", "자동 실란트 도포기"],
] as const;

const certificates = [
  "중국 국가 강제성 제품 인증(CCC) · GB 15763.2",
  "산동성 건축공정 품질 감독 검사 테스트 센터 인증",
  "산동성 건설공업 제품 등록 비안 증명",
  "산동성 신형 벽재 건축 절에너지 기술제품 응용 인정",
  "ISO 9001 · ISO 14001 품질·환경 경영 시스템",
  "CE · ASTM 해외 규격 대응",
] as const;

const partners = ["COFCO 中粮", "SUNAC 融创", "COUNTRY GARDEN 碧桂园", "江西建工", "飞龙집단", "中昌집단", "嘉元집단"] as const;

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">{eyebrow}</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>{body && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{body}</p>}</div>;
}

export function JinchengGlassPage() {
  return <SiteShell>
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div className="relative z-10">
          <p className="eyebrow text-muted-foreground">03 · JINCHENG GLASS · SINCE 1996</p>
          <h1 className="mt-6 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">30년의<br/><span className="text-gold">건축용 안전 유리</span></h1>
          <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">산동 진청 특종 유리는 1996년 설립 이후 강화·복층·접합·Low-E 유리를 자체 라인에서 생산하는 고신기술기업입니다. 커튼월과 창호 프로젝트에 필요한 안전성과 단열 성능을 규격에 맞춰 공급합니다.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><a href="tel:01031138668" className="inline-flex items-center gap-2.5 bg-foreground px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">사양·견적 문의 <ArrowRight size={16}/></a><span className="text-xs text-muted-foreground">강화 · 복층 · 접합 · 방화 · Low-E</span></div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold"><span>2023 고신기술기업</span><span>치루 지분거래센터 상장 (307208)</span><span>CCC · ISO · CE</span></div>
        </div>
        <figure className="relative aspect-[4/3] self-center overflow-hidden bg-surface"><img src={hqAerial.url} alt="산동 진청 특종 유리 생산기지 전경" className="absolute inset-0 h-full w-full object-cover saturate-[0.86]"/><figcaption className="absolute bottom-0 left-0 bg-background/95 px-4 py-3 text-[11px] font-bold backdrop-blur-sm">SHANDONG JINCHENG · ZHAOYUAN PLANT</figcaption></figure>
      </div>
    </section>

    <section className="border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><SectionHead eyebrow="COMPANY PROFILE" title="유리 한 장을 처음부터 끝까지 직접 만드는 회사" body="산동성 초원시 개발구에 약 33,000m² 규모의 생산 부지를 두고, 강화 생산라인과 전자동 복층(IGU) 생산라인, 접합 유리 생산라인을 함께 운영합니다. 2023년 7월 치루 지분거래센터에 상장했고 같은 해 고신기술기업으로 인정받았습니다." /><div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">{metrics.map(([value,label])=><div key={label} className="bg-background p-5 sm:p-7"><strong className="text-2xl font-bold text-gold sm:text-3xl">{value}</strong><p className="mt-3 text-xs leading-5 text-muted-foreground">{label}</p></div>)}</div></div>
      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
        <figure className="overflow-hidden bg-surface"><img src={lineCutting.url} alt="진청 유리 자동 절단 라인" className="aspect-[16/10] w-full object-cover saturate-[0.86]"/><figcaption className="p-4"><b className="text-xs">원판 · 자동 절단</b><p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">XYG, 金晶(GGG), 玉晶, 南玻 등 중국 일류 원판만 사용합니다.</p></figcaption></figure>
        <figure className="overflow-hidden bg-surface"><img src={lineEdging.url} alt="진청 유리 직선 연삭 라인" className="aspect-[16/10] w-full object-cover saturate-[0.86]"/><figcaption className="p-4"><b className="text-xs">연삭 · 가공</b><p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">직선 연삭기로 절단면을 다듬어 강화 공정의 안정성을 확보합니다.</p></figcaption></figure>
        <figure className="overflow-hidden bg-surface"><img src={lineAutoclave.url} alt="진청 유리 강화로 및 접합 설비" className="aspect-[16/10] w-full object-cover saturate-[0.86]"/><figcaption className="p-4"><b className="text-xs">강화 · 접합</b><p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">강화로와 PVB 오토클레이브로 안전 유리를 완성합니다.</p></figcaption></figure>
      </div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="PRODUCT SYSTEM" title="현장 조건에 맞춰 고르는 네 가지 안전 유리" body="안전성, 단열, 차음, 내화 중 프로젝트가 우선하는 성능에 따라 조합을 제안합니다."/>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{products.map(product=><article key={product.title}><img src={product.image} alt={`${product.title} 제품 이미지`} className="aspect-[4/3] w-full bg-background object-cover saturate-[0.9]"/><p className="mt-5 text-xs font-bold text-gold">{product.en}</p><h3 className="mt-2 text-xl font-bold">{product.title}</h3><ul className="mt-4 space-y-3">{product.points.map(point=><li key={point} className="flex gap-2.5 text-sm leading-7 text-muted-foreground"><Check size={16} className="mt-1.5 shrink-0 text-gold"/><span className="break-keep">{point}</span></li>)}</ul></article>)}</div>
      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">{[[ShieldCheck,"자연 파손률 3%","2023년 강화 유리 업계 표준 기준"],[Volume2,"파편 ≥ 40개","50×50mm 내 파편 수 (GB 15763.2)"],[Sun,"UV 99% 차단","접합 유리 기준"]].map(([Icon,value,label])=>{const MetricIcon=Icon as typeof ShieldCheck; return <article key={String(label)} className="bg-background p-7"><MetricIcon size={22} className="text-gold"/><strong className="mt-7 block text-2xl sm:text-3xl">{String(value)}</strong><p className="mt-2 text-sm text-muted-foreground">{String(label)}</p></article>})}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src={glassLowe.url} alt="Low-E 복층 유리 단면" className="aspect-[16/10] w-full bg-surface object-cover"/>
        <div><SectionHead eyebrow="LOW-E TECHNOLOGY" title="햇빛의 열은 반사하고, 실내 온도는 지킵니다" body="Low-E 유리는 표면에 저방사 은(銀)층을 코팅해 태양광의 원적외선 열복사를 반사합니다. 일반 투명 유리에는 없는 기능입니다."/>
        <ul className="mt-8 grid gap-4 text-sm">{["단은(Single Silver): 은층 1개를 포함한 약 5개 코팅층 구성","이은(Double Silver): 은층을 하나 더해 7~10개 코팅층 구성","커튼월에 적용하면 겨울은 따뜻하고 여름은 시원하게 유지","복층 구조와 결합해 냉난방 부하를 함께 줄입니다"].map(item=><li key={item} className="flex gap-3 border-t border-border pt-4"><Check size={17} className="mt-0.5 shrink-0 text-gold"/><span className="break-keep">{item}</span></li>)}</ul></div>
      </div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><SectionHead eyebrow="CURTAIN WALL" title="유리 커튼월이 선택되는 이유" body="외장 계획 단계에서 미관과 하중, 내풍·내진, 열 성능과 유지관리를 함께 검토합니다."/>
        <div className="divide-y divide-border border-y border-border">{[["아름다움","보는 각도와 빛의 변화에 따라 다른 색조를 보여주는 현대 건축의 외장 언어입니다."],["경량성","같은 면적 벽체의 1/5~1/10 무게로 건물 하중과 공사 비용을 줄입니다."],["내풍 · 내진","유연한 설계 방식으로 바람과 지진에 강해 해안 고층 건물에 적합합니다."],["열안정성","강화 유리는 약 300°C까지 견디고, 복층 커튼월은 실내 온도를 안정적으로 유지합니다."],["에너지 절약","Low-E 유리와 결합해 단열·차열 성능을 확보합니다."],["유지관리","외부에서 접근하는 설계로 세척과 교체가 편리합니다."]].map(([title,text],index)=><article key={title} className="grid gap-4 py-6 sm:grid-cols-[48px_150px_1fr]"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="font-bold">{title}</h3><p className="break-keep text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
      </div>
      <figure className="mt-16 overflow-hidden"><img src={asset("020")} alt="진청 유리가 적용된 커튼월 외장" className="aspect-[21/9] w-full object-cover saturate-[0.84]"/></figure>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="EQUIPMENT & CERTIFICATION" title="설비와 인증으로 품질을 관리합니다"/>
      <div className="mt-14 grid gap-16 lg:grid-cols-2">
        <div><h3 className="text-sm font-bold">주요 생산 설비</h3><div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">{equipment.map(([name,role])=><div key={name} className="bg-background p-6"><b className="text-base">{name}</b><p className="mt-2 text-xs leading-6 text-muted-foreground">{role}</p></div>)}</div></div>
        <div><h3 className="text-sm font-bold">보유 인증</h3><ul className="mt-6 grid gap-4 text-sm">{certificates.map(item=><li key={item} className="flex gap-3 border-t border-border pt-4"><Check size={17} className="mt-0.5 shrink-0 text-gold"/><span className="break-keep">{item}</span></li>)}</ul></div>
      </div>
      <div className="mt-20"><h3 className="text-sm font-bold">주요 협력 기업</h3><div className="mt-6 flex flex-wrap gap-3">{partners.map(name=><span key={name} className="border border-border px-5 py-3 text-xs font-semibold">{name}</span>)}</div></div>
      <div className="mt-20 grid gap-8 border-t border-border pt-12 lg:grid-cols-2"><div><p className="eyebrow text-muted-foreground">SUSTAINABILITY</p><p className="mt-5 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">폐수·배기·폐기물·소음 네 가지 영역에서 청정 생산을 관리하고, 공장 지붕의 태양광 발전으로 생산 전력의 90%를 충당하며 나머지 10%는 전력망에 공급합니다.</p></div><div><p className="eyebrow text-muted-foreground">SOCIAL CONTRIBUTION</p><p className="mt-5 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">연태시 상회 이사기업이자 지역 자원봉사 협회의 애심기업으로, 조손·결손 아동 후원 활동에 꾸준히 참여하고 있습니다.</p></div></div>
    </div></section>

    <section className="border-b border-border bg-surface"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">유리 구성과 두께, 규격을 프로젝트 조건에 맞춰 함께 정리합니다.</h2><p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">이음앤빌드가 도면 검토부터 사양 확정, 납기 조율까지 한국에서 직접 진행합니다.</p><div className="mt-8 flex flex-wrap items-center gap-4"><Link to="/company" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">이음앤빌드 소개 <ArrowRight size={16}/></Link><span className="text-xs text-muted-foreground">강화 · 복층 · 접합 · 방화 · Low-E</span></div></div><a href="tel:01031138668" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-bold transition-colors hover:border-gold hover:text-gold">010-3113-8668 <ArrowRight size={16}/></a></div></section>
  </SiteShell>;
}
