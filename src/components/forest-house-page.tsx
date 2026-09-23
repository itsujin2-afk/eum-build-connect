import { ArrowRight, Check, FlaskConical, Layers3, ThermometerSun } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import campusGate from "@/assets/forest-house/000.jpg.asset.json";
import headquarters from "@/assets/forest-house/001.jpg.asset.json";
import laboratory from "@/assets/forest-house/004.jpg.asset.json";
import warehouse from "@/assets/forest-house/007.jpg.asset.json";
import productionHall from "@/assets/forest-house/010.jpg.asset.json";
import flooringLine from "@/assets/forest-house/011.jpg.asset.json";
import pressLine from "@/assets/forest-house/015.jpg.asset.json";
import finishedStorage from "@/assets/forest-house/016.jpg.asset.json";
import printingLine from "@/assets/forest-house/018.jpg.asset.json";
import heatingFloor from "@/assets/forest-house/025.jpg.asset.json";

const metrics = [
  ["150무", "기업 총 부지"], ["4만㎡", "생산·창고 면적"], ["12만 장", "함침지 일 생산"],
  ["2만㎡", "마루 일 생산"], ["1.5만 톤", "인쇄지 연 생산"], ["300+명", "전문 인력"],
] as const;

const products = [
  ["강화마루", "내마모 표면과 안정적인 기재를 적용한 상업·주거용 마루"],
  ["다층 실목마루", "여러 겹의 목재를 교차 구성해 변형을 줄인 실목 복합마루"],
  ["신3중 실목마루", "열전도와 치수 안정성을 함께 고려한 지열용 핵심 제품"],
  ["마루 기재", "완제품 생산 경험을 바탕으로 품질을 관리하는 바닥재용 기재"],
  ["멜라민 함침지", "11개 전자동 라인에서 하루 12만 장을 생산하는 표면 소재"],
  ["가구판", "인쇄·함침·판재 가공을 연계해 공급하는 인테리어용 보드"],
] as const;

const floorBenefits = [
  ["빠른 열 전달", "3중 실목 기재가 난방열을 고르게 전달해 실내 온도를 빠르게 높입니다."],
  ["변형을 줄인 구조", "목재 내부 응력을 고르게 조정해 온도와 습도 변화에 따른 휨과 갈라짐을 줄입니다."],
  ["습기 차단", "이면 경화 처리와 전면 360도 밀랍 마감으로 외부 습기의 침투를 막습니다."],
  ["표면 내구성", "탄소섬유 패널로 강도를 보강해 마모와 표면 균열, 층 분리를 예방합니다."],
  ["실내환경 고려", "저방출 기재와 활성탄 성분을 적용해 포름알데히드 흡착·분해를 돕습니다."],
] as const;

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-3xl">
    <p className="eyebrow text-muted-foreground">{eyebrow}</p>
    <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>
    {body && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{body}</p>}
  </div>;
}

export function ForestHousePage() {
  return <SiteShell>
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid min-h-[88svh] max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <div>
          <p className="eyebrow text-muted-foreground">04 · FOREST HOUSE · SINCE 2016</p>
          <h1 className="mt-6 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">함침지부터 마루까지<br/><span className="text-gold">한 공장에서 생산합니다</span></h1>
          <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">산동 이센메이쥐는 인쇄지와 함침지, 마루 기재, 강화마루, 다층·3중 실목마루를 연구개발하고 생산하는 제이슨그룹의 목재 전문기업입니다.</p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold"><span>등록자본금 3,000만 위안</span><span>매출의 5% 이상 R&amp;D 투자</span><span>ISO 9001·14001</span></div>
          <Link to="/brands/forest-house-products" className="mt-9 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">신3중 실목마루 제품 보기 <ArrowRight size={16}/></Link>
        </div>
        <figure className="relative min-h-[260px] self-stretch overflow-hidden bg-surface lg:min-h-[420px]"><img src={headquarters.url} alt="산동 이센메이쥐 본사와 생산단지" className="absolute inset-0 h-full w-full object-cover"/><figcaption className="absolute bottom-0 left-0 bg-background/95 px-5 py-4 text-xs font-bold backdrop-blur-sm">SHANDONG · INTEGRATED WOOD MATERIALS CAMPUS</figcaption></figure>
      </div>
    </section>

    <section className="border-b border-border"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><SectionHead eyebrow="COMPANY PROFILE" title="원자재부터 완제품까지 이어지는 목재 생산 체계" body="2016년 설립 이후 제품 연구개발, 생산, 가공과 판매를 하나의 조직으로 운영해 왔습니다. 생산시설뿐 아니라 연구실, 신제품 전시장과 직원 지원시설까지 갖춘 장기 운영 기반을 구축했습니다."/><div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">{metrics.map(([value,label])=><div key={label} className="bg-background p-5 sm:p-7"><strong className="text-2xl font-bold text-gold sm:text-3xl">{value}</strong><p className="mt-3 text-xs leading-5 text-muted-foreground">{label}</p></div>)}</div></div>
      <div className="mt-16 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><img src={campusGate.url} alt="이센메이쥐 생산단지 정문" className="aspect-[16/10] h-full w-full object-cover saturate-[0.85]"/><div className="grid gap-px bg-border sm:grid-cols-2"><div className="bg-surface p-7"><b>3,000㎡</b><p className="mt-2 text-sm text-muted-foreground">사무동·제품 연구개발센터</p></div><div className="bg-surface p-7"><b>1,000㎡</b><p className="mt-2 text-sm text-muted-foreground">신제품 전시장</p></div><div className="bg-surface p-7"><b>600㎡+</b><p className="mt-2 text-sm text-muted-foreground">제품 시험·분석 실험실</p></div><div className="bg-surface p-7"><b>7,000㎡</b><p className="mt-2 text-sm text-muted-foreground">생산단지 내 녹지 면적</p></div></div></div>
    </div></section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="FACTORY CAPABILITY" title="인쇄·함침·압착·마루 가공을 직접 운영합니다" body="7개 4색 고속 인쇄라인과 11개 전자동 함침지 라인, 강화마루·다층마루 생산설비를 연계해 소재의 표면부터 완제품까지 품질과 납기를 관리합니다."/>
      <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3">{[
        [productionHall.url,"자동화 생산라인"],
        [flooringLine.url,"마루 성형·이송"],
        [pressLine.url,"대형 압착 라인"],
        [printingLine.url,"4색 고속 인쇄"],
        [warehouse.url,"원자재·생산 창고"],
        [finishedStorage.url,"완제품 보관"],
      ].map(([image,title])=><figure key={title} className="group relative aspect-[16/10] overflow-hidden bg-background"><img src={image} alt={`이센메이쥐 ${title}`} className="h-full w-full object-cover saturate-[0.8] transition duration-500 group-hover:saturate-100"/><figcaption className="absolute bottom-0 left-0 bg-background/90 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm">{title}</figcaption></figure>)}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <SectionHead eyebrow="PRODUCT SYSTEM" title="바닥재와 표면 소재를 함께 공급합니다" body="마루 한 품목만 만드는 회사가 아니라 표면 인쇄와 함침, 기재, 완제품을 함께 생산해 프로젝트별 색상과 구조, 물량을 통합 검토합니다."/>
      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{products.map(([title,text])=><article key={title} className="bg-background p-7"><Layers3 size={20} className="text-gold"/><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-24"><img src={heatingFloor.url} alt="이센메이쥐 탄소섬유 지열마루 소개" className="mx-auto max-h-[680px] w-full max-w-xl object-contain bg-background"/><div><SectionHead eyebrow="HEATING FLOOR TECHNOLOGY" title="지열 난방을 고려한 신3중 실목마루" body="3중 실목 기재와 탄소섬유 패널을 결합해 열 전달, 변형 안정성, 방습과 표면 내구성을 함께 높인 기능형 바닥재입니다."/><div className="mt-9 divide-y divide-border border-y border-border">{floorBenefits.map(([title,text],index)=><article key={title} className="grid gap-3 py-5 sm:grid-cols-[42px_150px_1fr]"><span className="text-xs font-bold text-gold">0{index+1}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div></div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><SectionHead eyebrow="R&D AND QUALITY" title="매출의 5% 이상을 신제품 연구에 투자합니다" body="기업기술센터와 중점실험실을 기반으로 대학과 산학연 협력을 이어가며 소재 성능과 생산 공정을 개선합니다."/><img src={laboratory.url} alt="이센메이쥐 제품 연구실" className="mt-10 aspect-[16/9] w-full max-w-md object-cover saturate-[0.85]"/></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{[
        [FlaskConical,"기술혁신 플랫폼","린이시 기업기술센터와 중점실험실 운영"],
        [ThermometerSun,"연구 프로젝트","성급 1건·시급 중점 1건·시구급 3건·자체 17건"],
        [Check,"지식재산","발명특허 2건·실용신안특허 14건"],
        [Check,"인증 체계","ISO 9001 품질·ISO 14001 환경경영 인증"],
      ].map(([Icon,title,text])=>{const ItemIcon=Icon as typeof Check; return <article key={String(title)} className="bg-background p-7"><ItemIcon size={21} className="text-gold"/><h3 className="mt-7 text-lg font-bold">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{String(text)}</p></article>})}</div></div>
      <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">{[["2020","산동성 우수혁신성과상 2등"],["3년 연속","지역 경제발전 공헌상"],["80+명","마케팅·고급 기술 인력"]].map(([value,label])=><div key={label} className="bg-background p-7"><strong className="text-3xl text-gold">{value}</strong><p className="mt-3 text-sm text-muted-foreground">{label}</p></div>)}</div>
    </div></section>

    <section className="border-b border-border bg-surface"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">마루 구조와 색상, 난방 조건, 물량을 한국에서 함께 검토합니다.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">이음앤빌드가 프로젝트 조건을 확인하고 이센메이쥐 생산라인과 직접 사양·납기·공급 조건을 조율합니다.</p></div><div className="flex flex-wrap gap-3"><Link to="/brands/forest-house-products" className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-primary-foreground">신3중 실목마루 제품 보기</Link><a href="tel:01031138668" className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품·사양 문의 <ArrowRight size={16}/></a></div></div></section>
  </SiteShell>;
}