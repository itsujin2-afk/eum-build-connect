import { ArrowRight, Check, Factory, Gem, Layers3, Mountain, Ruler, ShieldCheck } from "lucide-react";
import { ContactBand, SiteShell } from "@/components/site-shell";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

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
  { image: "020", label: "ABU DHABI", title: "셰이크 자이드 그랜드 모스크", body: "82개 돔과 1,000개 이상의 기둥에 조각·모자이크 공예를 구현한 세계 최대급 모스크 프로젝트입니다." },
  { image: "019", label: "ALGIERS", title: "자마 그랜드 모스크", body: "건축 면적 40만㎡ 이상의 프로젝트에 백색 석재 10만㎡ 이상을 공급했습니다." },
  { image: "021", label: "UNITED ARAB EMIRATES", title: "에미리트 팰리스 호텔", body: "내부 건축 면적 24만㎡의 초대형 럭셔리 호텔. 국제 기업과의 경쟁에서 최종 선정된 중국 석재 기업입니다." },
  { image: "023", label: "DOHA · I. M. PEI", title: "카타르 이슬람 미술관", body: "4만5천㎡ 규모의 기하학적 건축을 간결한 흰색 석회석으로 완성했습니다." },
  { image: "022", label: "KOREA · KPF", title: "대한민국 천원궁", body: "모자이크, 돔, 유럽식 벽기둥과 부조를 결합한 고난도 석재 공예 프로젝트입니다." },
  { image: "024", label: "STATE PROJECTS", title: "국가급 건축 프로젝트", body: "인민대회당 주요 회의실, 다오위타이 국빈관, 중국공산당 역사전시관 등 상징적 공간에 참여했습니다." },
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
        <h1 className="mt-6 max-w-4xl break-keep text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">세상에 불멸의<br />건축을 남기다</h1>
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
          <article className="border border-border bg-background p-7 sm:p-9"><Mountain className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">OWN MINE · SHANDONG</p><h3 className="mt-3 text-2xl font-bold">삼공삼 광업</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">산둥성 라이저우 · 산동 백화강<br/>연간 원석 생산량 37만㎥</p></article>
          <article className="border border-border bg-background p-7 sm:p-9"><Gem className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">OWN MINE · HEBEI</p><h3 className="mt-3 text-2xl font-bold">한덕석업</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">허베이성 청더 · 블루 레오파드, 엔산 그린<br/>연간 원석 생산량 40만㎥</p></article>
          <article className="border border-border bg-background p-7 sm:p-9"><Layers3 className="text-gold" size={24}/><p className="mt-8 text-xs font-bold text-gold">GLOBAL SOURCING</p><h3 className="mt-3 text-2xl font-bold">200여 종의 품종</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">원석 상시 재고 3만㎥ 이상<br/>판재 상시 재고 60만㎡</p></article>
        </div>
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
        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
          {[{ icon: Ruler, title: "설계·시공 이중 1급", text: "연구개발, 공사 설계, 설치 시공과 컨설팅을 통합한 커튼월 석재 시스템" }, { icon: ShieldCheck, title: "국가급 하이테크 기업", text: "성급 기술센터, 정부 품질상, 다년 연속 부동산 500대 기업 우선 공급업체" }, { icon: Gem, title: "이형 석재의 대부", text: "국가 표준 제정과 복합 쌍곡면, 워터젯 인레이, 대형 조각 분야를 이끈 기술력" }].map(({icon: Icon, title, text}) => <article key={title} className="bg-background p-7"><Icon size={21} className="text-gold"/><h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}
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
            <div className="aspect-[4/3] overflow-hidden bg-primary-foreground/10"><img src={asset(project.image)} alt={project.title} className="h-full w-full object-cover saturate-[0.88] transition duration-700 hover:scale-[1.025]" /></div>
            <p className="mt-6 text-[10px] font-bold tracking-[0.18em] text-gold">{project.label}</p><h3 className="mt-3 text-xl font-bold">{project.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-primary-foreground/60">{project.body}</p>
          </article>)}
        </div>
        <div className="mt-20 border-t border-primary-foreground/20 pt-10">
          <p className="eyebrow text-primary-foreground/50">SELECTED REFERENCES</p>
          <p className="mt-5 max-w-5xl break-keep text-sm leading-8 text-primary-foreground/70">타지키스탄 정부청사·의회청사 · 인민대회당 · 다오위타이 국빈관 · 중국공산당 역사전시관 · 상하이 엑스포센터 · 베이징 수도공항 전용기동 · 항저우 G20 정상회의 체험관 · 화웨이 선전 연구개발기지 · 100개 이상 완다플라자 · 난징 뉴쇼우산 불정궁</p>
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-2 lg:items-center">
        <img src={asset("028")} alt="환구석재가 참여한 현대 건축 프로젝트" className="aspect-[16/10] h-full w-full object-cover saturate-[0.85]" />
        <div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">글로벌 스톤의 자원과 기술을 한국 프로젝트에 직접 연결합니다.</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">이음앤빌드가 사양 검토, 샘플, 견적, 생산 일정, 물류와 현장 대응을 하나의 창구에서 관리합니다.</p><a href="tel:01031138668" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-2 text-sm font-bold">프로젝트 상담 <ArrowRight size={15}/></a></div>
      </div>
    </section>
    <ContactBand />
  </SiteShell>;
}