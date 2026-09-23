import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Factory, Layers3, Leaf } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import factoryShandong from "@/assets/intco/factory-shandong.jpg.asset.json";
import factoryMalaysia from "@/assets/intco/factory-malaysia.jpg.asset.json";
import recycledPellets from "@/assets/intco/recycled-pellets.jpg.asset.json";
import productApplications from "@/assets/intco/product-applications.jpg.asset.json";
import interiorShowroom from "@/assets/intco/interior-showroom.jpg.asset.json";
import circularMaterials from "@/assets/intco/circular-materials.jpg.asset.json";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`] ?? "";

const metrics = [
  ["20+년", "자원 재생 제조 경험"], ["6개", "연구개발·생산기지"], ["5,000+명", "글로벌 임직원"],
  ["130+개국", "판매 네트워크"], ["12,000+", "글로벌 고객"], ["688087", "상장 종목 코드"],
] as const;

const bases = [
  ["산둥", "2005", "410무", "PS·MDF·PET 건축 장식 몰딩 및 완제품"],
  ["상하이", "2002", "56무", "PS 건축 장식 몰딩·액자 몰딩"],
  ["쑤저우", "2010", "30무", "GREENMAX 플라스틱 재활용 설비"],
  ["안후이", "2010", "100무", "PS·PVC·PE 건축 장식 몰딩"],
  ["말레이시아", "2018", "62무", "r-PS·r-PET 펠릿, 시트, 식품용 포장"],
  ["베트남", "2022–23", "150무", "건축 장식 몰딩·액자·거울 프레임"],
] as const;

const products = [
  { title: "건축 장식 패널", text: "대리석·원목·스톤·메탈·패브릭 표면을 구현하는 PS·MDF·SPC·WPC 패널", image: "080" },
  { title: "SPC 바닥재", text: "습기와 변형에 강하고 클릭 방식으로 빠르게 시공하는 상업·주거용 바닥재", image: "085" },
  { title: "몰딩과 부속", text: "걸레받이, 벽·천장 몰딩, 계단 디딤판과 단차·마감·T몰딩", image: "082" },
  { title: "아웃도어", text: "재생 PE 기반 외벽재, 데크, 펜스, DIY 데크 타일과 인조잔디", image: "089" },
] as const;

const strengths = [
  ["가볍고 운반이 편리", "석재와 목재의 표면을 구현하면서 실제 소재보다 가벼워 넓은 면적의 공사에 유리합니다."],
  ["공사기간 단축", "제품에 따라 접착 또는 건식·클릭 방식으로 시공해 복잡한 습식 공정을 줄입니다."],
  ["다양한 디자인", "마블, 우드, 스톤, 메탈, 패브릭 등 공간 성격에 맞는 표면을 선택할 수 있습니다."],
  ["유지관리 용이", "표면 오염을 닦아내기 쉬워 객실, 복도, 매장처럼 관리 빈도가 높은 공간에 적합합니다."],
  ["흡음 패널 구성", "Acoustic Panel 계열은 회의실, 오피스, 호텔, 레스토랑의 소음 울림 저감에 활용됩니다."],
] as const;

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">{eyebrow}</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>{body && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{body}</p>}</div>;
}

export function IntcoDecorPage() {
  return <SiteShell>
    <section className="relative min-h-[88svh] overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid min-h-[88svh] max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <div className="relative z-10">
          <p className="eyebrow text-muted-foreground">06 · INTCO DECOR · SINCE 2002</p>
          <h1 className="mt-6 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">재생 소재로 만드는<br/><span className="text-gold">실내외 마감재</span></h1>
          <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">버려진 플라스틱을 회수해 재생 원료로 만들고, 벽패널·몰딩·SPC 바닥재·아웃도어 제품까지 친환경 순환 구조 안에서 직접 생산합니다.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><Link to="/brands/intco-decor-products" className="inline-flex items-center gap-2.5 bg-foreground px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품 소개 보기 <ArrowRight size={16}/></Link><span className="text-xs text-muted-foreground">벽패널 · 몰딩 · WPC · SPC 월패널</span></div>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold"><span>연 1억 3천만m 몰딩</span><span>연 4,500만 개 완제품</span><span>130개국 이상 공급</span></div>
        </div>
        <figure className="relative min-h-[360px] self-stretch overflow-hidden bg-surface lg:min-h-[620px]"><img src={asset("079")} alt="잉코 데코 건축 장식 패널이 적용된 실내 공간" className="absolute inset-0 h-full w-full object-cover saturate-[0.88]"/><figcaption className="absolute bottom-0 left-0 bg-background/95 px-5 py-4 text-xs font-bold backdrop-blur-sm">INTCO DECOR · ARCHITECTURAL MATERIALS</figcaption></figure>
      </div>
    </section>

    <section className="border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><SectionHead eyebrow="ECO COMPANY PROFILE" title="폐플라스틱을 자원으로 되돌리는 친환경 제조기업" body="잉코는 버려진 발포 PS와 PET 음료병을 회수·선별해 재생 펠릿으로 만들고, 다시 벽·바닥·실외 마감 제품으로 생산하는 자원재생 하이테크 기업입니다. 연간 재생 플라스틱 생산능력 15만 톤 이상, 누적 탄소배출 340만 톤 절감의 실적으로 순환경제를 실천합니다."/><div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">{metrics.map(([value,label])=><div key={label} className="bg-background p-5 sm:p-7"><strong className="text-2xl font-bold text-gold sm:text-3xl">{value}</strong><p className="mt-3 text-xs leading-5 text-muted-foreground">{label}</p></div>)}</div></div>
      <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><figure className="overflow-hidden bg-surface"><img src={factoryShandong.url} alt="잉코 산둥 생산기지 전경" className="aspect-[16/9] h-full w-full object-cover"/><figcaption className="p-5"><b>산둥 생산기지 · 410무</b><p className="mt-2 text-xs text-muted-foreground">PS·MDF·PET 건축 장식 몰딩과 완제품 연구개발·생산</p></figcaption></figure><figure className="overflow-hidden bg-surface"><img src={factoryMalaysia.url} alt="잉코 말레이시아 생산기지" className="aspect-[16/9] h-full w-full object-cover"/><figcaption className="p-5"><b>말레이시아 생산기지 · 62무</b><p className="mt-2 text-xs text-muted-foreground">r-PS·r-PET 펠릿, 시트와 식품용 포장 생산</p></figcaption></figure></div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="GLOBAL PRODUCTION" title="아시아 6개 거점, 총 1,200무 규모" body="중국과 동남아 생산기지가 원료 재생, 장식 몰딩, 벽패널, 액자와 완제품을 분담합니다."/>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{bases.map(([name,year,area,role])=><article key={name} className="bg-background p-7"><p className="text-xs font-bold text-gold">{year} · {area}</p><h3 className="mt-4 text-2xl font-bold">{name} 잉코</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{role}</p></article>)}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="CIRCULAR MANUFACTURING" title="폐플라스틱을 건축 마감재로 전환합니다" body="회수한 발포 PS를 압축하고 선별·세척한 뒤 재생 펠릿으로 만들고, 다시 장식 몰딩과 패널·완제품으로 생산하는 순환 구조입니다."/>
      <div className="mt-14 grid gap-5 lg:grid-cols-2"><img src={recycledPellets.url} alt="잉코 재생 펠릿 생산 설비와 제품" className="aspect-[16/10] h-full w-full object-cover"/><div className="grid grid-cols-2 gap-px border border-border bg-border">{["플라스틱 회수","용적 압축","선별·세척","재생 펠릿","몰딩·패널 생산","글로벌 공급"].map((step,index)=><div key={step} className="bg-background p-5 sm:p-6"><span className="text-xs font-bold text-gold">0{index+1}</span><p className="mt-4 text-sm font-bold">{step}</p></div>)}</div></div>
      <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">{[[Factory,"10만 톤","연간 재생 펠릿 생산"],[Layers3,"99%","재생 펠릿 순도"],[Leaf,"84% 절감","r-PS의 신재 대비 탄소배출"]].map(([Icon,value,label])=>{const MetricIcon=Icon as typeof Factory; return <article key={String(label)} className="bg-background p-7"><MetricIcon size={22} className="text-gold"/><strong className="mt-7 block text-3xl">{String(value)}</strong><p className="mt-2 text-sm text-muted-foreground">{String(label)}</p></article>})}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="PRODUCT SYSTEM" title="벽·천장·바닥·실외를 한 제조사에서" body="호텔, 오피스, 상업시설과 주거 프로젝트에 필요한 장식 표면과 부속을 통합 공급합니다."/>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{products.map(product=><article key={product.title}><img src={asset(product.image)} alt={product.title} className="aspect-[4/3] w-full object-cover saturate-[0.86]"/><h3 className="mt-5 text-xl font-bold">{product.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{product.text}</p></article>)}</div>
      <div className="mt-16 grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><img src={productApplications.url} alt="잉코 장식 몰딩과 패널의 다양한 적용 사례" className="aspect-[16/10] h-full w-full object-cover"/><img src={interiorShowroom.url} alt="잉코 벽패널과 바닥재가 적용된 전시장" className="aspect-[16/10] h-full w-full object-cover"/></div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><SectionHead eyebrow="PROJECT ADVANTAGES" title="넓은 현장에서도 빠르게 시공하고, 오래도록 관리가 쉬운 마감재" body="마감재 선정 시 디자인뿐 아니라 무게, 공사기간, 유지관리와 공간별 성능을 함께 검토합니다."/><div className="divide-y divide-border border-y border-border">{strengths.map(([title,text],index)=><article key={title} className="grid gap-4 py-6 sm:grid-cols-[48px_180px_1fr]"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div>
      <div className="mt-20 overflow-x-auto border border-border"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-surface"><tr><th className="p-5">구분</th><th className="p-5">INTCO 패널</th><th className="p-5">INTCO SPC 바닥재</th></tr></thead><tbody>{[["주요 용도","벽·천장","바닥"],["핵심 장점","디자인·경량·시공성","내구성·방수성·시공성"],["적용 공간","호텔·오피스·상업시설","호텔·오피스·주거·상업시설"],["표면 디자인","대리석·우드·스톤·메탈·패브릭","우드·스톤"],["대형 프로젝트","매우 적합","매우 적합"]].map(row=><tr key={row[0]} className="border-t border-border">{row.map((cell,index)=><td key={`${row[0]}-${index}`} className={`p-5 ${index===0?"font-bold":"text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center"><img src={circularMaterials.url} alt="재생 소재를 활용한 잉코의 실내외 장식 자재" className="aspect-[16/10] w-full object-cover"/><div><SectionHead eyebrow="CERTIFICATION & ESG" title="검증된 재생 소재와 국제 인증" body="ISO 9001·14001, GRS, CE, FSC, SGS, VOC A+ 등 제품과 생산 체계의 기준을 관리합니다."/><ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2">{["S&P Global ESG 69점·글로벌 상위 5%","CDP 기후변화 B등급","113개 특허·38개 소프트웨어 저작권","국가·산업·단체 표준 제정 참여","연간 재생 플라스틱 생산능력 15만 톤 이상","누적 탄소배출 340만 톤 절감"].map(item=><li key={item} className="flex gap-3 border-t border-border pt-4"><Check size={17} className="mt-0.5 shrink-0 text-gold"/><span>{item}</span></li>)}</ul></div></div>
    </div></section>

    <section className="border-b border-border"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">패널과 SPC 바닥재를 함께 검토하고, 프로젝트 사양에 맞춰 공급합니다.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">이음앤빌드가 디자인, 샘플, 물량, 시공 방식과 납기 조건을 한국에서 확인합니다.</p><div className="mt-8 flex flex-wrap items-center gap-4"><Link to="/brands/intco-decor-products" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품 소개 보기 <ArrowRight size={16}/></Link><span className="text-xs text-muted-foreground">두 제품 카탈로그의 주요 품목·규격·패턴</span></div></div><a href="tel:01031138668" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm font-bold transition-colors hover:border-gold hover:text-gold">제품·사양 문의 <ArrowRight size={16}/></a></div></section>
  </SiteShell>;
}