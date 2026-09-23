import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Droplets, Flame, Hammer, Leaf, Ruler } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import spcInstall from "@/assets/intco-products/spc-install.jpg.asset.json";
import wallApplication from "@/assets/intco-products/wall-application.jpg.asset.json";
import mouldingApplication from "@/assets/intco-products/moulding-application.jpg.asset.json";
import accessoriesApplication from "@/assets/intco-products/accessories-application.jpg.asset.json";
import outdoorApplication from "@/assets/intco-products/outdoor-application.jpg.asset.json";
import flooringApplication from "@/assets/intco-products/flooring-application.jpg.asset.json";
import spcMorningApplication from "@/assets/intco-products/spc-morning-application.jpg.asset.json";
import spcGreyApplication from "@/assets/intco-products/spc-grey-application.jpg.asset.json";
import spcNightApplication from "@/assets/intco-products/spc-night-application.jpg.asset.json";
import spcColorApplication from "@/assets/intco-products/spc-color-application.jpg.asset.json";
import spcClassicApplication from "@/assets/intco-products/spc-classic-application.jpg.asset.json";

const categories = [
  { id: "wall", number: "01", title: "실내 벽패널", subtitle: "흡음·3D·MDF·SPC 패널", description: "흡음판부터 입체 벽패널까지 공간의 용도와 디자인에 맞춰 고릅니다. 우드·패브릭·석재 느낌을 다양한 규격과 색상으로 제공합니다.", image: wallApplication.url },
  { id: "moulding", number: "02", title: "몰딩과 걸레받이", subtitle: "PS·MDF·PVC 마감재", description: "걸레받이, 벽면 장식 몰딩, 천장 몰딩을 한 제조사에서 구성합니다. 벽과 바닥의 연결부까지 같은 디자인 방향으로 맞출 수 있습니다.", image: mouldingApplication.url },
  { id: "accessory", number: "03", title: "바닥·계단 부속", subtitle: "디딤판·마감·단차 몰딩", description: "계단 디딤판과 T형 몰딩, 레벨링 스트립, 엣지 트림으로 모서리와 단차를 깔끔하게 마감합니다.", image: accessoriesApplication.url },
  { id: "outdoor", number: "04", title: "WPC 실외 마감재", subtitle: "외벽·데크·데크 타일·펜스", description: "비와 햇빛에 노출되는 외부 공간을 위한 벽패널과 데킹 제품입니다. 방수와 미끄럼 방지, 손쉬운 설치를 고려했습니다.", image: outdoorApplication.url },
] as const;

const spcSeries = [
  { name: "모닝 라이트 스톤", size: "1220 × 2440 × 3mm", text: "맑은 흰색 바탕과 회색·금색 결의 밝은 석재 패턴", codes: "8859 · 8869 · 8870 · 8871 · 88672 · 88263 · 1561 · 8066", image: spcMorningApplication.url },
  { name: "그레이 스톤 아웃라인", size: "1220 × 2440 × 3mm", text: "차분한 회색 톤으로 구성한 현대적인 석재 패턴", codes: "88494 · 88652 · 8252 · 8248 · 88226 · 8040", image: spcGreyApplication.url },
  { name: "나이트 록", size: "1220 × 2440 × 3mm", text: "검정과 짙은 회색을 중심으로 한 깊이 있는 패턴", codes: "82312 · 88491 · 88651 · 88671 · 80052 · 8231 · 1164 · 06W1 · 8803", image: spcNightApplication.url },
  { name: "컬러 스톤 컬렉션", size: "1220 × 2440 × 3mm", text: "베이지부터 슬레이트 그레이까지 폭넓은 색상 선택", codes: "80871 · 80042 · 8176 · 88653 · 8088 · 8259", image: spcColorApplication.url },
  { name: "클래식 스톤 무드", size: "1200 × 2440 × 3mm", text: "자연석의 결을 차분하게 재현한 스톤 프레스 제품", codes: "88531 · 88512 · 88521 · 88532 · 9951 · 88539 · 88511", image: spcClassicApplication.url },
] as const;

const benefits = [
  [Droplets, "물과 습기에 강함", "욕실·주방처럼 물을 자주 쓰는 공간에도 적용할 수 있습니다."],
  [Flame, "B1 방화 등급", "제품 시험 기준 B1 등급의 방화 성능을 갖췄습니다."],
  [Leaf, "포름알데히드 불검출", "실내 마감재로 사용할 수 있도록 유해 물질 기준을 관리합니다."],
  [Hammer, "빠른 설치", "접착제와 금속 부속으로 시공해 공사 과정과 시간을 줄입니다."],
  [Check, "청소가 쉬운 표면", "매끄러운 표면이 오염물질이 쌓이는 것을 줄여 일상 관리가 간편합니다."],
  [Ruler, "다양한 디자인", "석재 질감과 색상 선택지가 다양해 여러 공간 분위기에 맞출 수 있습니다."],
] as const;

const acousticLines = [
  ["MDF 흡음 패널", "클래식 · 랜덤 폭 · 아티스틱 · DIY · 접이식 · 플렉시블", "21 × 605 × 2400/3000mm 외"],
  ["PET 흡음 패널", "내추럴 · 라미네이팅 · 인쇄", "300 × 300mm부터 600 × 2400 × 9mm"],
  ["MDF 3D 월패널", "현장 도장 가능 · 래핑 마감", "폭 56–189mm · 두께 9/12mm"],
] as const;

const wallPanelLines = [
  ["이보센 3D · 베이직", "JC1337 · JC1552 · JC1314 · JC1362", "폭 304–315mm · 두께 6–7mm"],
  ["이보센 3D · 프리미엄", "JC695 · JC2064 · JC693 · JC2065 · JC694 · JC696", "폭 250mm · 두께 13–20mm"],
  ["이보센 3D · 디자이너", "JC1215 · JC1216 · JC1154 · JC1232 · JC1235 · JC1217", "폭 200mm · 두께 12–20mm"],
  ["이보센 월패널", "JC971 · JC1047 · JC1077 · JC1051 · JC1213 · JC963 외", "우드 · 스톤 · 가죽 · 단색 마감"],
  ["이스무 3D·월패널", "JF188 · JF178 외", "3D · 중공 · 솔리드 시리즈"],
  ["MDF 3D 월패널", "JM1319 · JM1320 · JM1321 · JM1322 · JM1324 외", "현장 도장 또는 래핑 마감"],
] as const;

const acousticFinishes = ["H361", "H199", "H364", "H363", "B193", "H57", "H362", "H188", "H31", "B191", "30WV", "26WV", "10WV", "B111", "B194", "23WV", "22WV", "20WV", "08WV"] as const;

const outdoorLines = [
  ["외벽 패널", "건물 외벽과 담장에 사용하는 세로형 WPC 패널"],
  ["데크·데크 타일", "수영장, 테라스, 정원 보행 구간용 바닥 마감"],
  ["기둥·펜스", "공간 분리와 시선 차단을 위한 구조 제품"],
  ["높임 화단", "조경 공간을 빠르게 구성하는 모듈형 제품"],
] as const;

const flooringPatterns = [
  ["오크", "WY127 · WY128 · WY129 · WY130 · WY131"],
  ["파인", "WY137 · WY138 · WY140 · WY141"],
  ["메이플", "WY132 · WY133 · WY134 · WY135 · WY136"],
  ["화이트 엘름", "WY142 · WY143 · WY144 · WY145 · WY146"],
] as const;

const fullProductRange = [
  ["월패널", "흡음판 · 이보센 3D 월패널 · 이보센 월패널 · 이스무 3D 월패널 · 이스무 월패널 · MDF 3D 월패널 · SPC 월패널"],
  ["걸레받이", "PS 걸레받이 · MDF 걸레받이 · PVC 걸레받이"],
  ["장식 몰딩", "PS 벽면 장식 몰딩 · PS 크라운 몰딩 · MDF 크라운 몰딩 · PVC 크라운 몰딩"],
  ["바닥·계단 부속", "PVC 계단 디딤판 · PVC 레벨링 스트립 · PVC 엣지 트림"],
  ["아웃도어", "WPC 월패널 · WPC 데킹 · DIY WPC 데크 타일 · WPC 기둥 · WPC 펜스 · WPC 높임 화단"],
  ["바닥재", "SPC 클릭 바닥재 · 계단 및 가장자리 마감 부속"],
] as const;

const spcAccessories = [
  ["JA521", "5 × 17mm"], ["JA522", "7mm"], ["JA523", "9 × 10mm"],
  ["JA524", "5 × 14mm"], ["JA525", "10 × 14mm"], ["JA526", "14 × 14mm"],
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">{eyebrow}</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>{description && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{description}</p>}</div>;
}

export function IntcoProductsPage() {
  return <SiteShell>
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40">
        <Link to="/brands/intco-decor" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/> 잉코 데코 소개</Link>
        <div className="mt-14 grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
          <div><p className="eyebrow text-gold">INTCO DECOR PRODUCT COLLECTION</p><h1 className="mt-5 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">벽부터 바닥·외부 공간까지<br/>한곳에서 고릅니다</h1><p className="mt-7 max-w-2xl break-keep text-sm leading-7 text-muted-foreground sm:text-base">벽패널, 몰딩과 부속, WPC 외장재, SPC 월패널을 실제 패턴과 규격 중심으로 정리했습니다.</p></div>
          <figure className="overflow-hidden border border-border bg-background"><img src={spcMorningApplication.url} alt="모닝 스톤 SPC 월패널이 시공된 실내" className="aspect-[16/10] w-full object-cover"/></figure>
        </div>
      </div>
    </section>

    <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur" aria-label="제품 카테고리"><div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-5 py-4 sm:px-10">{[["wall","벽패널"],["moulding","몰딩"],["accessory","부속"],["outdoor-range","아웃도어"],["spc","SPC 월패널"],["flooring","SPC 바닥재"]].map(([id,label])=><a key={id} href={`#${id}`} className="shrink-0 text-xs font-bold text-muted-foreground hover:text-gold">{label}</a>)}</div></nav>

    <section className="border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHeading eyebrow="PRODUCT RANGE" title="실내외 마감에 필요한 4개 제품군" description="재생 소재를 활용한 패널과 몰딩부터 외부용 WPC까지, 공간별로 필요한 제품을 함께 구성할 수 있습니다."/>
      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">{categories.map((item)=><article key={item.id} id={item.id} className="scroll-mt-20"><div className="overflow-hidden border border-border bg-surface"><img src={item.image} alt={`${item.title} 제품과 시공 예시`} className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02]"/></div><div className="mt-6 grid grid-cols-[auto_1fr] gap-5"><span className="text-xs font-bold text-gold">{item.number}</span><div><p className="text-xs font-semibold text-muted-foreground">{item.subtitle}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{item.description}</p></div></div></article>)}</div>
      <div className="mt-20 border-t border-border pt-12"><p className="eyebrow text-muted-foreground">COMPLETE PRODUCT INDEX</p><h3 className="mt-4 text-3xl font-bold">카탈로그 전체 제품 구성</h3><div className="mt-8 border-t border-border">{fullProductRange.map(([group,items])=><div key={group} className="grid gap-3 border-b border-border py-5 sm:grid-cols-[180px_1fr]"><b className="text-sm">{group}</b><p className="break-keep text-sm leading-7 text-muted-foreground">{items}</p></div>)}</div></div>
      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.25fr]"><figure className="overflow-hidden border border-border bg-surface"><img src={wallApplication.url} alt="우드 루버 흡음 패널을 적용한 거실" className="aspect-[16/10] h-full w-full object-cover"/></figure><div className="bg-surface p-7 sm:p-10"><p className="eyebrow text-gold">ACOUSTIC PANEL</p><h3 className="mt-4 text-3xl font-bold">소음을 줄이는 흡음 패널</h3><p className="mt-5 break-keep text-sm leading-7 text-muted-foreground">MDF 스틱과 PET 화이버를 결합한 구조로, 회의실·사무실·호텔·식음 공간의 울림을 줄이는 데 사용합니다. 종이 무늬목과 천연 무늬목 중 선택할 수 있습니다.</p><ul className="mt-7 grid gap-3 text-sm sm:grid-cols-2">{["JM1114 · JM1372 · JM1216 등 규격","우드 패턴과 다양한 간격 선택","벽·천장 포인트 마감","빠르고 간단한 설치"].map(item=><li key={item} className="flex gap-2 border-t border-border pt-3"><Check size={15} className="mt-0.5 shrink-0 text-gold"/>{item}</li>)}</ul></div></div>
      <div className="mt-16 grid gap-8 border-t border-border pt-16 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><p className="eyebrow text-muted-foreground">2026 SS ACOUSTIC RANGE</p><h3 className="mt-4 text-3xl font-bold">형태와 시공 방식까지 넓어진 흡음 패널</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">한 가지 세로 루버형뿐 아니라 폭이 다른 패턴, 직접 조립하는 소형 패널, 접이식·곡면용 제품과 PET 패널까지 선택할 수 있습니다.</p></div><div className="border-t border-border">{acousticLines.map(([name,series,size])=><div key={name} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[130px_1fr]"><b className="text-sm">{name}</b><div><p className="text-sm text-muted-foreground">{series}</p><p className="mt-2 text-xs font-semibold">대표 규격 · {size}</p></div></div>)}</div></div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[.7fr_1.3fr]"><div className="bg-surface p-7"><p className="eyebrow text-gold">SURFACE FINISHES</p><h3 className="mt-4 text-2xl font-bold">흡음 패널 마감 19종</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">종이 무늬목 또는 천연 무늬목을 선택할 수 있습니다.</p><p className="mt-6 text-xs font-semibold leading-7 text-foreground">{acousticFinishes.join(" · ")}</p></div><div className="border-t border-border"><p className="eyebrow py-5 text-muted-foreground">3D &amp; DECORATIVE WALL PANEL</p>{wallPanelLines.map(([name,models,size])=><div key={name} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[190px_1fr]"><b className="text-sm">{name}</b><div><p className="text-sm leading-6 text-muted-foreground">{models}</p><p className="mt-1 text-xs font-semibold">{size}</p></div></div>)}</div></div>
    </div></section>

    <section id="spc" className="scroll-mt-20 bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><SectionHeading eyebrow="SPC WALL PANEL" title="물과 오염에 강한 대형 SPC 월패널" description="천연석 느낌의 대형 패널을 접착 방식으로 빠르게 시공합니다. 주거, 호텔, 매장, 오피스의 벽면을 위한 제품입니다."/><dl className="grid grid-cols-2 gap-px border border-border bg-border text-sm">{[["표준 규격","1220 × 2440 × 3mm"],["무게","약 6.2kg/㎡"],["밀도","2,000kg/㎥"],["구성","PVC + 탄산칼슘 + 첨가제"],["방화","B1 등급"],["맞춤 길이","2800·2900mm 가능"]].map(([term,value])=><div key={term} className="bg-background p-5"><dt className="text-xs text-muted-foreground">{term}</dt><dd className="mt-2 font-bold">{value}</dd></div>)}</dl></div>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([Icon,title,text])=><article key={title} className="bg-background p-7"><Icon size={22} className="text-gold"/><h3 className="mt-7 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-2"><article className="bg-background p-7 sm:p-9"><p className="eyebrow text-gold">M · UV HIGH-GLOSS</p><h3 className="mt-4 text-2xl font-bold">UV 하이글로시 공정</h3 ris=""><p className="mt-4 text-sm leading-7 text-muted-foreground">SPC 기재 위에 열전사 필름, UV 코팅과 PE 보호필름을 차례로 적용합니다. 고해상도 석재 무늬와 표면 보호 성능을 함께 갖춥니다.</p></article><article className="bg-background p-7 sm:p-9"><p className="eyebrow text-gold">R · STONE PRESS</p><h3 className="mt-4 text-2xl font-bold">석압 공정</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">SPC 기재 위에 PVC 래핑 필름과 PE 보호필름을 적용해 자연석의 깊은 질감과 차분한 표면을 표현합니다.</p></article></div>
      <div className="mt-20 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{spcSeries.map((series)=><article key={series.name}><div className="overflow-hidden border border-border bg-background"><img src={series.image} alt={`SPC 월패널 ${series.name} 시공 예시`} className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02]"/></div><p className="mt-5 text-[10px] font-bold text-gold">SPC WALL PANEL</p><h3 className="mt-2 text-2xl font-bold">{series.name}</h3><p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground"><Ruler size={13}/>{series.size}</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{series.text}</p><p className="mt-4 border-t border-border pt-4 text-xs leading-6 text-muted-foreground"><b className="text-foreground">패턴 코드</b><br/>JF{series.size.startsWith("1200") ? "12003-YY" : "12203-UV"}-{series.codes}</p></article>)}</div>
      <div className="mt-16 grid gap-6 border-t border-border pt-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><img src={spcInstall.url} alt="SPC 월패널 금속 부속과 설치 방법" className="aspect-[16/10] w-full border border-border object-cover"/><div><p className="eyebrow text-muted-foreground">INSTALLATION</p><h3 className="mt-4 text-3xl font-bold">접착제와 금속 부속으로 간단하게</h3><ol className="mt-7 grid gap-3 text-sm text-muted-foreground">{["벽면을 평평하고 깨끗하게 정리합니다.","패널과 금속 부속을 현장 치수에 맞게 자릅니다.","패널 뒷면에 접착제를 바르고 벽면에 고정합니다.","연결부를 마감한 뒤 표면 보호필름을 제거합니다."].map((step,index)=><li key={step} className="grid grid-cols-[28px_1fr] border-t border-border pt-3"><b className="text-gold">0{index+1}</b><span>{step}</span></li>)}</ol></div></div>
      <div className="mt-14 grid gap-8 border-t border-border pt-12 lg:grid-cols-2"><div><p className="eyebrow text-muted-foreground">METAL ACCESSORIES</p><h3 className="mt-4 text-2xl font-bold">전용 금속 부속 6종</h3><div className="mt-7 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">{spcAccessories.map(([model,size])=><div key={model} className="bg-background p-4"><b className="text-sm">{model}</b><p className="mt-1 text-xs text-muted-foreground">{size}</p></div>)}</div><p className="mt-5 text-sm leading-7 text-muted-foreground">전용 중성 실리콘 실란트는 금속, 석재, 유리, 세라믹, 콘크리트와 일반 건축자재 접착에 사용하며 300ml 규격입니다.</p></div><div><p className="eyebrow text-muted-foreground">PACKING &amp; ORDER</p><h3 className="mt-4 text-2xl font-bold">현장 물량에 맞춘 포장·운송 기준</h3><dl className="mt-7 border-t border-border text-sm">{[["최소 주문","패턴별 100장"],["팔레트 포장","100장 · 약 1.9톤"],["2440mm 제품","20피트 컨테이너 14팔레트 · 1,400장"],["2800·2900mm 제품","20피트 컨테이너 12팔레트 · 1,200장"]].map(([term,value])=><div key={term} className="grid grid-cols-[120px_1fr] border-b border-border py-4"><dt className="text-muted-foreground">{term}</dt><dd className="font-bold">{value}</dd></div>)}</dl></div></div>
    </div></section>

    <section id="outdoor-range" className="scroll-mt-20 border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><SectionHeading eyebrow="OUTDOOR COLLECTION" title="외벽부터 데크·펜스까지 맞춰 공급합니다" description="2026 SS 제품군에는 외벽 패널, 데크재, 데크 타일, 기둥, 펜스와 높임 화단이 포함됩니다. 공압출 표면 제품은 비와 햇빛에 노출되는 외부 공간을 고려해 구성했습니다."/><figure className="overflow-hidden border border-border bg-surface"><img src={outdoorApplication.url} alt="WPC 데크와 외벽재를 적용한 야외 테라스" className="aspect-[16/10] w-full object-cover"/></figure></div>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{outdoorLines.map(([title,text],index)=><article key={title} className="bg-background p-7"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs font-semibold text-muted-foreground"><span>내후성</span><span>내부식성</span><span>방수</span><span>미끄럼 방지</span><span>다양한 우드·그레이 색상</span></div>
    </div></section>

    <section id="flooring" className="scroll-mt-20 bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end"><SectionHeading eyebrow="SPC FLOORING" title="물에 강하고 관리가 쉬운 SPC 바닥재" description="벽패널과 함께 바닥까지 한 제조사에서 검토할 수 있습니다. 고밀도 스톤 복합 코어와 클릭 결합 구조로 주거·상업 공간에 적용합니다."/><dl className="grid grid-cols-2 gap-px border border-border bg-border text-sm">{[["유해물질","0 VOC · 포름알데히드 무방출"],["방수","100% 방수 코어"],["내마모층","최대 0.55mm"],["두께","4mm · 5mm"],["폭","128–450mm"],["길이","450–1200mm"]].map(([term,value])=><div key={term} className="bg-background p-5"><dt className="text-xs text-muted-foreground">{term}</dt><dd className="mt-2 font-bold">{value}</dd></div>)}</dl></div>
      <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_.85fr]"><figure className="overflow-hidden border border-border bg-background"><img src={flooringApplication.url} alt="우드 패턴 SPC 바닥재를 시공한 거실" className="aspect-[16/10] w-full object-cover"/><figcaption className="border-t border-border px-5 py-4 text-xs text-muted-foreground">UV 코팅 · 내마모층 · 고해상도 무늬층 · SPC 코어 · 선택형 바닥재</figcaption></figure><div className="border-t border-border">{flooringPatterns.map(([name,codes])=><div key={name} className="border-b border-border py-5"><h3 className="text-lg font-bold">{name}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">대표 패턴 {codes}</p></div>)}</div></div>
    </div></section>

    <section className="border-b border-border"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">공간과 물량을 알려주시면 알맞은 제품과 규격을 확인해 드립니다.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">샘플, 색상, 최소 주문 수량, 납기와 시공 방법을 이음앤빌드에서 안내합니다.</p></div><a href="tel:01031138668" className={buttonVariants({ size: "lg", className: "h-auto rounded-lg px-7 py-4" })}>제품·샘플 문의 <ArrowUpRight size={16}/></a></div></section>
  </SiteShell>;
}