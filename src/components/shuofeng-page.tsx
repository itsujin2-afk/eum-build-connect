import { ArrowRight, Check, Clock3, DraftingCompass, Factory, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import doorHero from "@/assets/eum/075.jpg";
import doorClassic from "@/assets/eum/071.jpg";
import doorModern from "@/assets/eum/069.jpg";
import interiorLiving from "@/assets/shuofeng-products/panel-living.jpg.asset.json";
import interiorBedroom from "@/assets/shuofeng-products/wardrobe.jpg.asset.json";
import interiorFeature from "@/assets/shuofeng-products/media-wall.jpg.asset.json";

const metrics = [
  ["1988", "목공 사업 시작"], ["45,000㎡", "공장 건축 면적"], ["3,400㎡", "제품 전시장"],
  ["180명", "전문 인력"], ["7개", "생산 작업장"], ["4개", "전문 창고"],
] as const;

const capacities = [
  ["300세트", "목문 일 생산"], ["1,000㎡", "목마감재 일 생산"],
  ["200㎡", "수납장 일 생산"], ["3,000m", "몰딩 일 생산"],
] as const;

const productSystems = [
  ["목문", "원목문, 실목문, 실목복합문, 수성 도장문과 라미네이트문을 공간 조건에 맞춰 제작합니다."],
  ["벽면 · 천장", "목재 마감판, 그릴, 배경벽과 병풍을 문과 같은 목재 톤으로 연결합니다."],
  ["맞춤 수납", "옷장, 서재장, 신발장, 현관장, 세면대장과 주방장을 한 번에 설계합니다."],
  ["계단 · 몰딩", "계단, 핸드레일, 바닥 몰딩과 장식 몰딩까지 같은 디테일로 완성합니다."],
] as const;

const projectFields = [
  ["5성급 호텔", "객실 목문과 고정 가구, 공용부 목공을 프로젝트 단위로 공급합니다."],
  ["고급 주거", "아파트와 단독주택, 빌라의 문·벽·수납장을 하나의 디자인으로 맞춥니다."],
  ["업무 · 의료", "사무실과 병원에 필요한 내구성, 규격과 기능 조건을 반영합니다."],
] as const;

const process = [
  ["01", "실측 · 상세설계", "도면과 샘플룸 조건을 검토하고 현장 실측 후 제작 도면을 확정합니다."],
  ["02", "자재 · 생산", "확정된 사양에 따라 자재를 준비하고 공정별 품질 검사를 진행합니다."],
  ["03", "검수 · 분류 포장", "완제품 검사 후 현장과 세대, 설치 순서에 맞춰 나눠 포장합니다."],
  ["04", "운송 · 설치", "전용 운송과 전문 설치팀을 연계해 현장의 공정에 맞춰 시공합니다."],
] as const;

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-3xl">
    <p className="eyebrow text-muted-foreground">{eyebrow}</p>
    <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>
    {body && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{body}</p>}
  </div>;
}

export function ShuofengPage() {
  return <SiteShell>
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-24 lg:pt-40">
        <div>
          <p className="eyebrow text-muted-foreground">06 · 슈오펑 목문 · 1988년 설립</p>
          <h1 className="mt-6 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">37년 목공 기술로<br/><span className="text-gold">문·벽·장을 한 번에</span></h1>
          <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">산동 슈오펑은 고급 주택과 5성급 호텔의 목문, 벽면 마감과 맞춤 가구를 함께 제작합니다. 서로 다른 품목을 하나의 목재 톤과 디테일로 연결해 공간 전체의 완성도를 높입니다.</p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold"><span>실목 전 공간 맞춤 제작</span><span>고급 주택 · 호텔 프로젝트</span><span>설계 · 생산 · 설치 일체화</span></div>
          <Link to="/brands/shuofeng-products" className="mt-8 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품 보기 <ArrowRight size={16}/></Link>
        </div>
        <figure className="relative overflow-hidden bg-surface"><img src={doorHero} alt="슈오펑 화이트 클래식 목문" className="aspect-[4/3] w-full object-cover object-center saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><figcaption className="absolute bottom-0 left-0 bg-background/95 px-5 py-3 text-[11px] font-bold backdrop-blur-sm">슈오펑 · 전 공간 원목 맞춤 제작</figcaption></figure>
      </div>
    </section>

    <section className="border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><SectionHead eyebrow="COMPANY PROFILE" title="목공소에서 시작해 전 공간 맞춤 제작 기업으로" body="1988년 창업 이후 목문을 중심으로 기술을 쌓고, 현재는 디자인·연구개발·생산·판매·설치를 연결하는 전문 제조 체계를 운영합니다. 중국 판재와 물류의 중심지인 산동성 린이에 자리해 원자재 조달과 대형 프로젝트 공급에 유리합니다."/><div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">{metrics.map(([value,label])=><div key={label} className="bg-background p-5 sm:p-7"><strong className="text-2xl font-bold text-gold sm:text-3xl">{value}</strong><p className="mt-3 text-xs leading-5 text-muted-foreground">{label}</p></div>)}</div></div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2"><img src={doorClassic} alt="슈오펑 클래식 원목문" className="aspect-[16/10] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={doorModern} alt="슈오펑 현대식 블랙 목문" className="aspect-[16/10] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="INTEGRATED WOODWORK" title="문 하나가 아니라, 공간 전체를 맞춥니다" body="방문과 벽면, 수납장, 계단과 몰딩을 각각 주문하는 대신 디자인과 재료를 한 체계에서 조율합니다."/>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{productSystems.map(([title,text],index)=><article key={title} className="bg-background p-7"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><img src={interiorLiving.url} alt="슈오펑 목재 벽면과 수납장 일체화 거실" className="aspect-[16/10] h-full w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={interiorBedroom.url} alt="슈오펑 목재 벽면을 적용한 침실" className="aspect-[16/10] h-full w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></div>
    </div></section>

    <section className="border-y border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><SectionHead eyebrow="SMART PRODUCTION" title="대형 프로젝트의 물량과 납기를 함께 관리합니다" body="자동 문짝·문틀 생산, UV 롤코팅과 도장, 수납장과 목재 마감판 생산라인을 갖추고 품목별 공정을 연결합니다."/><div className="grid grid-cols-2 gap-px border border-border bg-border">{capacities.map(([value,label])=><div key={label} className="bg-background p-6 sm:p-8"><Factory size={19} className="text-gold"/><strong className="mt-6 block text-2xl font-bold sm:text-3xl">{value}</strong><p className="mt-2 text-xs text-muted-foreground">{label}</p></div>)}</div></div>
      <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">{[[DraftingCompass,"정밀 설계","현장 실측과 상세 도면을 생산 오더로 연결합니다."],[ShieldCheck,"공정별 검사","자재 입고부터 제작, 완제품과 설치까지 단계별로 확인합니다."],[Clock3,"현장 대응","서비스 요청 접수 후 4시간 이내에 응답하고, 24시간 이내에 전문 기술 인력을 현장에 파견합니다."]].map(([Icon,title,text])=>{const ItemIcon=Icon as typeof Factory; return <article key={String(title)} className="bg-background p-7"><ItemIcon size={21} className="text-gold"/><h3 className="mt-7 text-lg font-bold">{String(title)}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{String(text)}</p></article>})}</div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="PROJECT EXPERIENCE" title="호텔·고급 주거·업무 공간에서 쌓은 경험" body="객실 한 곳부터 수백 세대의 목문과 고정 가구까지, 설계와 생산·설치 조직을 프로젝트 규모에 맞춰 편성합니다."/>
      <div className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="divide-y divide-border border-y border-border">{projectFields.map(([title,text],index)=><article key={title} className="grid gap-4 py-6 sm:grid-cols-[44px_130px_1fr]"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="font-bold">{title}</h3><p className="break-keep text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div><img src={interiorFeature.url} alt="슈오펑 고급 주거 목공 프로젝트" className="aspect-[16/10] h-full w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></div>
      <p className="mt-10 text-xs leading-6 text-muted-foreground">주요 수행 분야: 하이난·칭다오·쉬저우·타이안·린이 지역의 호텔 객실, 고급 아파트, 별장과 오피스 프로젝트</p>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="PROJECT DELIVERY" title="설계부터 설치와 사후관리까지 한 흐름으로"/>
      <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-4">{process.map(([number,title,text])=><article key={number} className="bg-background p-7"><span className="text-xs font-bold text-gold">{number}</span><h3 className="mt-7 text-lg font-bold">{title}</h3><p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">{[["E1 등급","프로젝트용 판재 기준"],["2년","제품 품질보증"],["종신","유상 유지보수 지원"]].map(([value,label])=><div key={label} className="bg-background p-7"><Check size={18} className="text-gold"/><strong className="mt-6 block text-2xl">{value}</strong><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}</div>
    </div></section>

    <section className="border-b border-border bg-surface"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">문·벽·수납장의 디자인과 규격을 한국에서 함께 정리합니다.</h2><p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">이음앤빌드가 도면과 샘플, 물량을 검토하고 슈오펑 생산팀과 사양·납기·설치 조건을 직접 조율합니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/brands/shuofeng-products" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품 보기 <ArrowRight size={16}/></Link><Link to="/company" className="inline-flex items-center gap-2.5 border border-foreground px-8 py-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-primary-foreground">이음앤빌드 소개</Link></div></div><a href="tel:01031138668" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-bold transition-colors hover:border-gold hover:text-gold">010-3113-8668 <ArrowRight size={16}/></a></div></section>
  </SiteShell>;
}