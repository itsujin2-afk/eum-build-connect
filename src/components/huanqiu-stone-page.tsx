import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, Factory, Gem, Layers3, Mountain, Ruler, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];
const umggModules = import.meta.glob("../assets/umgg/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const umgg = (id: string) => umggModules[`../assets/umgg/${id}.jpg`];

const overviewMetrics = [
  ["40+", "국가 표준 제정 참여"],
  ["60+", "루반상 수상 프로젝트"],
  ["200+", "특허 기술"],
  ["3,500+", "국내외 대표 건축 프로젝트"],
] as const;

const history = [
  ["1986", "홍콩에서 창립"], ["1991", "중국 내륙 투자·공장 설립"], ["2003", "해외 시장 진출"],
  ["2007", "한덕석업 설립"], ["2008", "푸젠 생산기지 완공"], ["2010", "천하 석창 구축"],
  ["2012", "글로벌 커튼월 설립"], ["2013", "글로벌 클래식 설립"], ["2019", "화련 건자재 기술 지분 참여"],
  ["2020", "삼공삼 광업 인수"], ["2023", "석재 인테리어·제품 생태계 확장"], ["2024", "품종 중심 비즈니스 모델 구축"],
] as const;

const solutions = ["고객 요구 사항 이해", "전문가 팀 토론", "시스템 솔루션 제안", "석재 심화 설계", "글로벌 엄선 자재", "정교한 생산 가공", "설치 품질 보장", "사후 서비스 추적"];

const bases = [
  { name: "푸젠 기지", area: "300묘", slab: "70만㎡", panel: "40만㎡", special: "1,200㎥" },
  { name: "텐진 기지", area: "630묘", slab: "60만㎡", panel: "40만㎡", special: "2,000㎥" },
  { name: "산둥 기지", area: "180묘", slab: "40만㎡", panel: "15만㎡", special: "1만㎥" },
  { name: "둥관 기지", area: "280묘", slab: "9만㎡", panel: "15만㎡", special: "700㎥" },
] as const;

const projectScale = [
  ["100+", "세계적 대표 프로젝트"], ["200+", "정부 주요 프로젝트"], ["1,300+", "상업 부동산 프로젝트"],
  ["800+", "특급 호텔 프로젝트"], ["600+", "고급 빌라·클럽하우스"], ["300+", "문화·관광 프로젝트"],
] as const;

const projects = [
  { image: "sheikh-zayed", label: "ABU DHABI", title: "셰이크 자이드 그랜드 모스크", body: "82개 돔, 1,000개 이상의 기둥과 41,000명 수용 규모. 세계 최초의 조개·자개 모자이크 공법을 구현했습니다." },
  { image: "algiers-aerial", label: "ALGIERS", title: "자마 그랜드 모스크", body: "건축 면적 40만㎡ 이상, 미나렛 높이 265m. 중국산 백색 석재를 최초로 10만㎡ 이상 대규모 수출했습니다." },
  { image: "emirates-palace", label: "UNITED ARAB EMIRATES", title: "에미리트 팰리스 호텔", body: "내부 건축 면적 24만㎡의 초대형 럭셔리 호텔. 국제 기업과의 경쟁에서 유일하게 선정된 중국 석재 기업입니다." },
  { image: "pei-museum", label: "DOHA · I. M. PEI", title: "카타르 이슬람 미술관", body: "베이위밍의 마지막 대형 문화 건축물. 4만5천㎡ 규모의 기하학적 공간을 흰색 석회석으로 완성했습니다." },
  { image: "022", label: "KOREA · KPF", title: "대한민국 천원궁", body: "KPF 설계 아래 이탈리아 전통 기업과 협력해 모자이크, 돔, 유럽식 벽기둥과 부조를 구현했습니다." },
  { image: "history-museum", label: "BEIJING", title: "중국공산당 역사전시관", body: "건당 100주년 헌정 프로젝트이자 전국 애국주의 교육 시범기지인 국가급 문화 건축입니다." },
] as const;

const masters = [
  { image: "pei-museum", name: "베이위밍", role: "카타르 이슬람 미술관", text: "거장이 설계한 4만5천㎡의 기하학적 매스를 소박하면서 웅장한 흰색 석회석 외피로 구현했습니다." },
  { image: "grand-theatre", name: "폴 앤드류", role: "중국 국가대극원", text: "설계 개념에 따라 석재 패턴을 분해하고 전국의 재료를 색상별로 배정해 설계 의도를 현실화했습니다." },
  { image: "hunan-hall", name: "칭상 · 마이이시", role: "인민대회당 후난홀", text: "워터젯 패턴을 원주 표면에 삽입하는 기술을 개발해 입체 꽃무늬 원주 공예의 선구를 열었습니다." },
  { image: "029", name: "설계·시공 가이드", role: "싱가포르 센토사 호텔", text: "평면도와 조합도를 분해해 가공 정확도를 확보하고, 현장 설치를 위한 체계적인 가이드를 제공했습니다." },
] as const;

const crafts = [
  { image: "craft-inlay", title: "패턴 인레이", text: "천연석 색상과 결을 설계 패턴에 맞춰 절단·조합하는 정밀 인레이 공예" },
  { image: "craft-spiral", title: "나선계단 공예", text: "곡률과 접합선을 연속적으로 맞춰 하나의 조형물처럼 완성하는 고난도 가공" },
  { image: "craft-double-curve", title: "3D 쌍곡면 아크", text: "항저우 왕차오 센터의 복합 3차원 곡면을 디지털 모델과 정밀 가공으로 구현" },
  { image: "craft-shell-column", title: "조개·자개 인레이", text: "셰이크 자이드 모스크 기둥에 세계 최초로 적용한 석재와 조개의 복합 공법" },
  { image: "craft-dome", title: "돔 레이저 커팅", text: "알제리 자마 모스크의 거대 돔 부재를 디지털 전개하고 레이저로 정밀 재단" },
  { image: "stone-art", title: "석재 예술 작품", text: "광저우미술학원·칭다오과기대 교수진과 함께 석재의 자연성을 현대 예술로 확장" },
  { image: "027", title: "폐쇄형 타원 쌍곡면", text: "난징 뉴쇼우산 천불전의 연속 타원형 돔을 오차 없이 맞춘 특수 이형 공예" },
] as const;

const projectGroups = [
  { count: "100+", title: "세계적 대표 프로젝트", items: "자마 그랜드 모스크 · 셰이크 자이드 모스크 · 에미리트 팰리스 호텔 · 카타르 이슬람 미술관 · 대한민국 천원궁 · 타지키스탄 정부·의회청사" },
  { count: "200+", title: "정부 주요 프로젝트", items: "인민대회당 · 수도공항 전용기 청사 · 홍콩·마카오 반환 국례품 · 중국공산당 역사전시관 · 다오위타이 국빈관 · 상하이 엑스포센터 · 항저우 G20 체험관" },
  { count: "1,300+", title: "상업 부동산", items: "화웨이 선전 R&D기지 · 선전 징지100 · 청두 OCG 국제센터 · 완다플라자 100곳 이상 · 항저우 왕차오센터" },
  { count: "800+", title: "특급 호텔", items: "마카오 윈 팰리스 · 시안 크라운플라자 · 톈진 포시즌스 · 닝보 쉐라톤 · 베이징 누오 호텔" },
  { count: "600+", title: "고급 빌라·클럽하우스", items: "상하이 원재단 빌라 · 베이징 즈위화푸 · 허베이 롱신 빌라 클럽하우스 · 칭다오 텐이하이완 국제성" },
  { count: "300+", title: "문화·관광", items: "우시 링산 범궁 · 한중 한문화 박람원 · 지우화산 대원문화원 · 난징 뉴쇼우산 불정궁 · 저우산 관음성단" },
] as const;

function SectionHead({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-3xl">
    <p className="eyebrow text-muted-foreground">{eyebrow}</p>
    <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">{title}</h2>
    {body && <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{body}</p>}
  </div>;
}

export function HuanqiuStonePage() {
  return <SiteShell>
    <section className="relative min-h-[92svh] overflow-hidden bg-foreground text-primary-foreground">
      <img src={asset("010")} alt="환구석재가 참여한 정밀한 석재 건축 입면" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/10" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-10 sm:pb-24">
        <p className="eyebrow text-primary-foreground/70">01 · UMGG GLOBAL STONE · SINCE 1986</p>
        <h1 className="mt-6 max-w-4xl break-keep text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">천연석 광산부터<br />시공까지, 한 번에</h1>
        <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-primary-foreground/75 sm:text-base sm:leading-8">광산 운영과 글로벌 조달부터 설계, 정밀 가공, 커튼월 시공까지 연결하는 장식용 석재 시스템 솔루션 기업입니다.</p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/25 pt-6 text-xs text-primary-foreground/70">
          <span>천연석 · 인조석</span><span>정밀 이형 가공</span><span>석재 커튼월</span><span>통합 프로젝트 관리</span>
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <SectionHead eyebrow="ABOUT UMGG" title="1986년부터 이어온 글로벌 석재 시스템" body="글로벌 스톤은 홍콩에서 설립된 석재 업계 선도 기업입니다. 중앙기업 화련 건자재 기술(1313.HK)이 지분을 보유하고 있으며, 광산·무역·연구개발·가공·인테리어·커튼월까지 폭넓은 사업 역량을 갖추고 있습니다." />
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {overviewMetrics.map(([value, label]) => <div key={label} className="bg-background p-6 sm:p-8"><strong className="text-3xl font-bold text-gold sm:text-4xl">{value}</strong><p className="mt-3 text-xs leading-6 text-muted-foreground sm:text-sm">{label}</p></div>)}
          </div>
        </div>
        <div className="mt-20 grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {history.map(([year, event]) => <div key={year} className="bg-background px-5 py-5"><p className="text-xs font-bold text-gold">{year}</p><p className="mt-2 break-keep text-sm leading-6">{event}</p></div>)}
        </div>
      </div>
    </section>

    <section className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionHead eyebrow="RESOURCE ADVANTAGE" title="광산에서 현장까지, 자원과 납기를 직접 관리합니다." body="자체 광산과 장기 협력 광산, 200여 종의 석재 품종을 기반으로 프로젝트별 색상과 물성을 안정적으로 맞춥니다." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="border border-border bg-background p-7 sm:p-9"><Mountain className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">OWN MINE · SHANDONG</p><h3 className="mt-3 text-2xl font-bold">삼공삼 광업</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">산둥성 라이저우 · 산동 백화강<br/>연간 원석 생산량 37만㎥</p><p className="mt-5 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">타지키스탄 정부·의회청사 · 항저우 G20 · 한국 삼성 본사 · 동계올림픽 경기장 공급</p></article>
          <article className="border border-border bg-background p-7 sm:p-9"><Gem className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">OWN MINE · HEBEI</p><h3 className="mt-3 text-2xl font-bold">한덕석업</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">허베이성 청더 · 블루 레오파드, 엔산 그린<br/>연간 원석 생산량 40만㎥</p><p className="mt-5 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">중국 국가대극원 · 선전공항 · 중국수출입은행 베이징 본점 공급</p></article>
          <article className="border border-border bg-background p-7 sm:p-9"><Layers3 className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">GLOBAL SOURCING</p><h3 className="mt-3 text-2xl font-bold">200여 종의 품종</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">원석 상시 재고 3만㎥ 이상<br/>판재 상시 재고 60만㎡</p></article>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <figure className="relative overflow-hidden border border-border bg-background">
            <img src={umgg("mine-sankongsan")} alt="산둥성 라이저우 삼공삼 광업 채석 현장" className="aspect-[16/9] w-full object-cover saturate-[0.82]" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent px-6 pb-5 pt-20 text-primary-foreground">
              <p className="text-[11px] font-bold tracking-[0.18em] text-gold">OWN MINE · 산둥 라이저우</p>
              <p className="mt-2 text-lg font-bold">삼공삼 광업 · 산동 백화강 채석장</p>
              <p className="mt-1 text-xs text-primary-foreground/75">연간 원석 37만㎥ 규모의 자체 채광으로 색상과 납기를 직접 통제합니다.</p>
            </figcaption>
          </figure>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <figure className="relative overflow-hidden border border-border bg-background">
              <img src={umgg("mine-hande")} alt="허베이성 청더 한덕석업 광산" className="aspect-[16/9] w-full object-cover saturate-[0.82]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent px-5 pb-4 pt-14 text-xs font-bold text-primary-foreground">한덕석업 · 허베이 청더 (블루 레오파드)</figcaption>
            </figure>
            <figure className="relative overflow-hidden border border-border bg-background">
              <img src={umgg("mine-cooperative")} alt="글로벌 협력 광산 원석 블록 야드" className="aspect-[16/9] w-full object-cover saturate-[0.82]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent px-5 pb-4 pt-14 text-xs font-bold text-primary-foreground">글로벌 협력 광산 · 우선 채광권 확보</figcaption>
            </figure>
          </div>
        </div>
        <figure className="mt-5 relative overflow-hidden border border-border bg-background">
          <img src={umgg("stone-inventory")} alt="원석 및 판재 상시 재고 야드" className="aspect-[21/7] w-full object-cover saturate-[0.82]" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-6 pb-4 pt-14 text-xs font-bold text-primary-foreground">원석 상시 재고 3만㎥ · 판재 60만㎡ · 약 200여 종 품종</figcaption>
        </figure>
        <p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-7 text-muted-foreground">로마 동석, 설화백, 어두백, 이탈리아 미황, 세잔 그레이, 모네 그레이 등 세계 각지의 협력 광산에서 우선 채광권과 안정적 납기를 확보합니다.</p>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionHead eyebrow="SYSTEM SOLUTION" title="요구 사항을 읽고, 석재 시스템 전체를 설계합니다." />
        <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => <li key={item} className="bg-background p-6 sm:p-7"><span className="text-xs font-bold text-gold">{String(index + 1).padStart(2, "0")}</span><p className="mt-5 text-base font-bold">{item}</p></li>)}
        </ol>
        <div className="mt-20 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><Factory className="text-gold" size={28}/><h3 className="mt-7 text-3xl font-bold">4대 천연석 생산기지</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">대판, 공사 규격판, 이형 제품을 자체 생산합니다. 둥관 창핑과 광시 라이빈에는 이탈리아 Breton 자동화 라인을 갖춘 2대 인조석 생산기지도 운영합니다.</p></div>
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-surface text-xs text-muted-foreground"><tr><th className="px-5 py-4">기지</th><th className="px-5 py-4">부지</th><th className="px-5 py-4">대판 / 연</th><th className="px-5 py-4">규격판 / 연</th><th className="px-5 py-4">이형 / 연</th></tr></thead>
              <tbody>{bases.map((base) => <tr key={base.name} className="border-t border-border"><td className="px-5 py-5 font-bold">{base.name}</td><td className="px-5 py-5 text-muted-foreground">{base.area}</td><td className="px-5 py-5">{base.slab}</td><td className="px-5 py-5">{base.panel}</td><td className="px-5 py-5">{base.special}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { id: "base-slab", label: "FUJIAN · 300묘", title: "대판 생산 단지", text: "연간 대판 70만㎡ · 규격판 40만㎡" },
            { id: "base-panel", label: "TIANJIN · 630묘", title: "북방 최대 규격판 기지", text: "연간 대판 60만㎡ · 이형 2,000㎥" },
            { id: "base-special", label: "SHANDONG · DONGGUAN", title: "이형·화강암 가공 공장", text: "산둥 이형 1만㎥ · 둥관 규격판 15만㎡" },
          ].map((item) => (
            <figure key={item.id} className="relative overflow-hidden border border-border bg-surface">
              <img src={umgg(item.id)} alt={item.title} className="aspect-[4/3] w-full object-cover saturate-[0.82]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent px-5 pb-5 pt-16 text-primary-foreground">
                <p className="text-[11px] font-bold tracking-[0.18em] text-gold">{item.label}</p>
                <p className="mt-2 text-base font-bold">{item.title}</p>
                <p className="mt-1 text-xs text-primary-foreground/75">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
          {[{ icon: Ruler, title: "설계·시공 이중 1급", text: "연구개발, 공사 설계, 설치 시공과 컨설팅을 통합한 커튼월 석재 시스템" }, { icon: ShieldCheck, title: "국가급 하이테크 기업", text: "성급 기술센터, 정부 품질상, 다년 연속 부동산 500대 기업 우선 공급업체" }, { icon: Gem, title: "이형 석재의 대부", text: "국가 표준 제정과 복합 쌍곡면, 워터젯 인레이, 대형 조각 분야를 이끈 기술력" }].map(({icon: Icon, title, text}) => <article key={title} className="bg-background p-7"><Icon size={21} className="text-gold"/><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <figure className="relative overflow-hidden bg-surface"><img src={umgg("breton-line")} alt="이탈리아 Breton 인조석 자동화 생산라인" className="aspect-[16/8] h-full w-full object-cover saturate-[0.82]"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-6 pb-5 pt-16 text-sm font-bold text-primary-foreground">둥관 창핑 · 광시 라이빈 Breton 자동화 생산라인</figcaption></figure>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"><figure className="relative overflow-hidden bg-surface"><img src={umgg("breton-automation")} alt="친환경 인조석 자동화 설비" className="aspect-[16/7] h-full w-full object-cover saturate-[0.82]"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent px-5 pb-4 pt-12 text-xs font-bold text-primary-foreground">에너지 절감 · 친환경 · 안전 · 고효율 생산</figcaption></figure><div className="border border-border p-6"><p className="text-xs font-bold text-gold">SHANDONG GLOBAL CURTAIN WALL</p><h3 className="mt-3 text-xl font-bold">설계·시공 이중 1급</h3><p className="mt-4 text-xs leading-6 text-muted-foreground">베이징 인타이센터·광차이센터·자밍센터·안푸빌딩, 상하이 젠단빌딩, 하야오 제6공장, 이연걸 별장, 룽후 이허 원저 등 커튼월 프로젝트 수행</p></div></div>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionHead eyebrow="WITH THE MASTERS" title="거장과 함께, 클래식을 빚다" body="베이위밍, 폴 앤드류, 마이이시를 비롯한 세계적 건축가와 설계 기관의 아이디어를 석재 공학으로 구현해 왔습니다." />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {masters.map((master, index) => <article key={master.role} className="grid gap-6 border-t border-border pt-6 sm:grid-cols-[1.05fr_.95fr]">
            <img src={master.image.match(/^\d/) ? asset(master.image) : umgg(master.image)} alt={master.role} className="aspect-[4/3] h-full w-full object-cover saturate-[0.88]" />
            <div className="self-center"><p className="text-xs font-bold text-gold">0{index + 1} · {master.name}</p><h3 className="mt-3 text-xl font-bold">{master.role}</h3><p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{master.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p className="eyebrow text-muted-foreground">CRAFTSMANSHIP SPIRIT</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">돌의 한계를 넘는<br/>특수 이형 가공</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground">창립자 주융쥐는 ‘이형 석재의 대부’로 불립니다. 근속 10년 이상 직원 80%, 기술 인력 30% 이상, 숙련 기술자 50%, 품질 검사 인력 8%의 팀이 정밀한 공예를 계승합니다.</p><div className="mt-8 border-l-2 border-gold pl-5"><p className="text-sm font-bold">1:1 로마 유적 복원</p><p className="mt-2 text-sm leading-7 text-muted-foreground">고전 부재의 비례, 조각과 표면 질감을 원형 그대로 복원하는 문화재급 제작 역량</p></div></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {crafts.map((craft, index) => <article key={craft.title} className={index === 0 ? "sm:col-span-2" : ""}><div className={index === 0 ? "aspect-[2/1] overflow-hidden" : "aspect-[4/3] overflow-hidden"}><img src={craft.image.match(/^\d/) ? asset(craft.image) : umgg(craft.image)} alt={craft.title} className="h-full w-full object-cover saturate-[0.9]" /></div><h3 className="mt-4 text-base font-bold">{craft.title}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{craft.text}</p></article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionHead eyebrow="NATIONAL HONORS" title="국가가 맡긴 석재, 시대를 증명한 기술" body="국가급 하이테크 기업과 성급 기술센터로 인정받았으며, 중국 유명 상표·광둥성 명품·정부 품질상·건축 장식 추천 브랜드를 획득했습니다." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="border border-border bg-background"><img src={umgg("hongkong-gift")} alt="홍콩 반환 국례품 영원히 피는 금자형" className="aspect-[4/3] w-full object-cover"/><div className="p-7"><p className="text-xs font-bold text-gold">1997 · 1999</p><h3 className="mt-3 text-xl font-bold">홍콩·마카오 반환 국례품</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">‘영원히 피는 금자형’과 ‘번영의 연꽃’ 석재 받침대를 제작했습니다. 홍콩 작품은 48개 부재를 0.1mm 단위로 조정해 완성했고 인민일보 1면에 보도됐습니다.</p></div></article>
          <article className="border border-border bg-background"><img src={asset("018")} alt="타지키스탄 정부청사" className="aspect-[4/3] w-full object-cover"/><div className="p-7"><p className="text-xs font-bold text-gold">2024 · DUSHANBE</p><h3 className="mt-3 text-xl font-bold">타지키스탄 정부·의회청사</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">외벽에 자체 광산의 산동 백화강, 내부에 미황 계열 대리석을 적용했습니다. 2024년 시진핑 주석과 라흐몬 대통령이 공동 제막했습니다.</p></div></article>
          <article className="border border-border bg-background p-7 sm:p-9"><Award size={25} className="text-gold"/><p className="mt-10 text-xs font-bold text-gold">INDUSTRY LEADERSHIP</p><div className="mt-7 space-y-6">{overviewMetrics.slice(0,3).map(([value,label])=><div key={label} className="border-t border-border pt-5"><strong className="text-3xl font-bold">{value}</strong><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>)}</div></article>
        </div>
      </div>
    </section>

    <section className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionHead eyebrow="GLOBAL REFERENCES" title="세계의 상징적 건축이 선택한 석재" body="국가급 랜드마크부터 초고급 호텔과 문화시설까지, 자원·기술·공정 관리가 동시에 필요한 프로젝트를 완성해 왔습니다." />
        <div className="mt-14 grid grid-cols-2 gap-px border border-primary-foreground/15 bg-primary-foreground/15 lg:grid-cols-6">
          {projectScale.map(([value, label]) => <div key={label} className="bg-foreground p-5 sm:p-6"><strong className="text-2xl text-gold sm:text-3xl">{value}</strong><p className="mt-3 text-xs leading-5 text-primary-foreground/60">{label}</p></div>)}
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <article key={project.title}>
            <div className="aspect-[4/3] overflow-hidden bg-primary-foreground/10"><img src={project.image.match(/^\d/) ? asset(project.image) : umgg(project.image)} alt={project.title} className="h-full w-full object-cover saturate-[0.88] transition duration-700 hover:scale-[1.025]" /></div>
            <p className="mt-6 text-[10px] font-bold tracking-[0.18em] text-gold">{project.label}</p><h3 className="mt-3 text-xl font-bold">{project.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-primary-foreground/60">{project.body}</p>
          </article>)}
        </div>
        <div className="mt-20 border-t border-primary-foreground/20 pt-10">
          <p className="eyebrow text-primary-foreground/50">SELECTED REFERENCES</p>
          <p className="mt-5 max-w-5xl break-keep text-sm leading-8 text-primary-foreground/70">타지키스탄 정부청사·의회청사 · 인민대회당 · 다오위타이 국빈관 · 중국공산당 역사전시관 · 상하이 엑스포센터 · 베이징 수도공항 전용기동 · 항저우 G20 정상회의 체험관 · 화웨이 선전 연구개발기지 · 100개 이상 완다플라자 · 난징 뉴쇼우산 불정궁</p>
        </div>
        <div className="mt-20 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-2 lg:grid-cols-3">
          {projectGroups.map((group) => <article key={group.title} className="bg-foreground p-7 sm:p-8"><strong className="text-3xl text-gold">{group.count}</strong><h3 className="mt-3 text-lg font-bold">{group.title}</h3><p className="mt-5 break-keep text-xs leading-6 text-primary-foreground/60">{group.items}</p></article>)}
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{image:"diaoyutai",title:"다오위타이 국빈관"},{image:"expo-center",title:"상하이 엑스포센터"},{image:"024",title:"인민대회당"},{image:"028",title:"국가급 문화시설"}].map((item)=><figure key={item.title}><img src={item.image.match(/^\d/) ? asset(item.image) : umgg(item.image)} alt={item.title} className="aspect-[4/3] w-full object-cover saturate-[0.85]"/><figcaption className="mt-3 text-xs text-primary-foreground/60">{item.title}</figcaption></figure>)}
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-2 lg:items-center">
        <img src={asset("028")} alt="환구석재가 참여한 현대 건축 프로젝트" className="aspect-[16/10] h-full w-full object-cover saturate-[0.85]" />
        <div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">글로벌 스톤의 자원과 기술을 한국 프로젝트에 직접 연결합니다.</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">이음앤빌드가 사양 검토, 샘플, 견적, 생산 일정, 물류와 현장 대응을 하나의 창구에서 관리합니다.</p><Link to="/brands/huanqiu-stone-products" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-sm font-bold">주요 제품 보기 <ArrowRight size={15}/></Link></div>
      </div>
    </section>
  </SiteShell>;
}