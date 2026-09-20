import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import { SiteShell, ContactBand } from "@/components/site-shell";
import { steps } from "@/lib/site-data";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

export const Route = createFileRoute("/company")({
  head: () => ({ meta: [
    { title: "회사 소개 — 이음앤빌드" },
    { name: "description", content: "중국 본사와 직접 결정하고 한국 법인이 직접 책임지는 이음앤빌드의 구조, 리더십, 사업 영역을 소개합니다." },
    { property: "og:title", content: "회사 소개 — 이음앤빌드" },
    { property: "og:description", content: "중국 본사와 직접 결정하고 한국 법인이 직접 책임지는 구조" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Company,
});

const pillars: [string, string, string][] = [
  ["01", "Direct Authority", "본사 직통 계약"],
  ["02", "Single Margin", "단일 마진 구조"],
  ["03", "Legal Liability", "한국 법인 직접 책임"],
];

const highlights: [string, string][] = [
  ["의사결정 속도", "협의 자리에서 즉시 확정"],
  ["가격 구조", "본사 직결 단일 마진"],
  ["책임 소재", "한국 법인이 계약 당사자로 직접 부담"],
];

const factSheet: [string, string][] = [
  ["법인명", "주식회사 이음앤빌드"],
  ["영문 상호", "EUM&BUILD Co., Ltd."],
  ["공동대표이사", "YIN XIUYING · 조준우"],
  ["법인등록번호", "110111-0968258"],
  ["사업자등록번호", "810-87-04122"],
  ["본점 소재지", "서울특별시 강남구 테헤란로 329, 삼흥빌딩 1612호 (역삼동)"],
];

const areas = [
  { en: "MATERIAL SOURCING", title: "건축자재 조달 · 유통", desc: "6개 본사의 생산 라인에서 직접 물량을 배정받고, 사양 개발과 샘플 대응까지 포함합니다." },
  { en: "BUSINESS CONSULTING", title: "한중 사업 컨설팅", desc: "양국 시장 진출, 합작 구조와 계약 조건, 현지 파트너 검증을 지원합니다." },
  { en: "WORKFORCE OPERATION", title: "프로젝트 인력 운영", desc: "석재 시공 전문 인력을 프로젝트 단위로 편성해 자재와 시공을 함께 책임집니다." },
];

const targets: [string, string][] = [
  ["건설사 · 시공사", "외장재 물량과 납기"],
  ["설계 · 인테리어", "사양·샘플·특수 마감"],
  ["디벨로퍼", "원가와 공정 일정 설계"],
  ["자재 유통사", "안정적인 지속 공급선"],
];

const compareRows: [string, string, string][] = [
  ["의사결정 속도", "본사 회신 소요", "협의 자리에서 즉시 확정"],
  ["가격 구조", "단계마다 마진 가산", "본사 직결 단일 마진"],
  ["책임 소재", "본사와 중개상 사이 분산", "한국 법인이 직접 부담"],
];

const leaders = [
  {
    role: "CHINA ASSET & PARTNERSHIP",
    name: "YIN XIUYING",
    subtitle: "공동대표이사 · Co-CEO",
    quote: "“중국 거대 기업의 자산을 직접 움직이는 현지 파이프라인”",
    bullets: ["6개 핵심 기업 본사 직통 의사결정", "자산·브랜드·생산 인프라 한국 직결", "물량·생산·사양 변경 본사 협의 전권"],
  },
  {
    role: "KOREA BUSINESS & EXECUTION",
    name: "조준우",
    subtitle: "공동대표이사 · Co-CEO",
    quote: "“한국 상업 시장을 관통하는 전략과 실행”",
    bullets: ["국내 사업화·유통·현지화 총괄", "건설사·시공사·설계사 계약 설계", "통관·물류·현장 대응 실행 전반"],
  },
];

const authority: [string, string, string][] = [
  ["01", "본사 직통 계약", "단가와 사양, 납기가 한 단계에서 확정되며 중간 마진이 존재하지 않습니다."],
  ["02", "한국 내 독점 운용", "6개 기업 자산의 국내 사업 운용권을 행사해 국내 경쟁 견적이 발생하지 않습니다."],
  ["03", "공동 개발 · 투자", "자재 공급을 넘어 한중 프로젝트의 개발과 투자 의사결정에 참여합니다."],
];

const rejections = ["무역상 중개 견적", "현지 브로커 확인", "본사 승인 회신 대기", "단계별 마진 가산"];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mb-10 sm:mb-14">
    <p className="eyebrow text-muted-foreground">{eyebrow}</p>
    <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.25] tracking-tight sm:text-4xl lg:text-[42px]">{title}</h2>
  </div>;
}

function Company() {
  return <SiteShell>
    {/* Top Visual Hero */}
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <img src={asset("010")} alt="정밀한 기하학적 창호 패턴의 대형 건축 입면" className="absolute inset-0 h-full w-full object-cover saturate-[0.8] brightness-[0.98] contrast-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-44 sm:px-10 lg:px-10">
        <p className="eyebrow text-foreground/70">EUM&BUILD · EXCLUSIVE REGIONAL HQ</p>
        <h1 className="mt-6 break-keep text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-[72px]">
          중국 최정상 6개 브랜드<br />공식 한국 <span className="text-gold">독점 HQ</span>
        </h1>
        <p className="mt-7 max-w-xl break-keep text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">
          본사 직통 단일 마진 구조로 최고급 건축자재를 공급하는 익스클루시브 리저널 본부
        </p>
      </div>
    </section>

    {/* WHAT DO WE DO */}
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="eyebrow text-muted-foreground">WHAT DO WE DO?</p>
          <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.25] tracking-tight sm:text-4xl lg:text-[42px]">중간 단계를 없앤 직통 계약 솔루션</h2>
          <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            중국 본사와 직접 계약하고 한국 법인이 모든 하자와 책임을 집니다. 지체 없는 의사결정과 투명한 단일 마진으로 프로젝트를 완성합니다.
          </p>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {pillars.map(([num, en, ko]) => <article key={num} className="bg-background px-7 py-9">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">{num} · <span className="text-gold">{en}</span></p>
            <h3 className="mt-4 text-lg font-bold tracking-tight sm:text-xl">{ko}</h3>
          </article>)}
        </div>
      </div>
    </section>

    {/* WHY — distribution path */}
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="eyebrow text-muted-foreground">WHY EUM&BUILD</p>
          <h2 className="mt-4 break-keep text-3xl font-bold leading-[1.25] tracking-tight sm:text-4xl lg:text-[42px]">중간 단계를 아예 없앴습니다.</h2>
          <p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            본사 회신을 기다리는 대신 협의 자리에서 결정합니다. 가격은 투명해지고, 책임은 선명해집니다.
          </p>
        </div>
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="border border-border bg-background px-6 py-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">일반 경로</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] leading-6 text-muted-foreground">
                중국 본사 <ArrowRight size={12} className="text-muted-foreground/50" /> 무역상 <ArrowRight size={12} className="text-muted-foreground/50" /> 현지 브로커 <ArrowRight size={12} className="text-muted-foreground/50" /> 국내 유통 <ArrowRight size={12} className="text-muted-foreground/50" /> 발주처
              </p>
            </div>
            <div className="border border-gold/40 bg-background px-6 py-5">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-gold">직통 경로</p>
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-semibold leading-6">
                중국 본사 <ArrowRight size={12} className="text-gold" /> 이음앤빌드 한국 HQ <ArrowRight size={12} className="text-gold" /> 발주처
              </p>
            </div>
          </div>
          <ul className="divide-y divide-border border border-border bg-background">
            {highlights.map(([label, value]) => <li key={label} className="flex items-start gap-4 px-6 py-5">
              <Check size={16} className="mt-1 shrink-0 text-gold" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">{label}</p>
                <p className="mt-1.5 break-keep text-sm font-semibold leading-6">{value}</p>
              </div>
            </li>)}
          </ul>
        </div>
      </div>
    </section>

    {/* Company Hero */}
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-10">
        <p className="eyebrow text-muted-foreground">COMPANY · EXCLUSIVE REGIONAL HQ</p>
        <h2 className="mt-6 max-w-4xl break-keep text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-[64px]">
          한국 법인이 직접 계약하고 <span className="text-gold">직접 책임집니다.</span>
        </h2>
        <p className="mt-8 max-w-2xl break-keep text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          중국 본사와 한국 발주처를 이어주는 창구가 아닙니다. 6개 기업의 상업 권한을 위임받아 직접 집행하며 계약, 세금계산서, 하자 책임이 모두 이 법인에서 나옵니다.
        </p>
      </div>
    </section>

    {/* Fact Sheet */}
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="COMPANY FACT SHEET" title="이음앤빌드" />
        <dl className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {factSheet.map(([term, value]) => <div key={term} className="bg-background px-6 py-6">
            <dt className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">{term}</dt>
            <dd className="mt-2 break-keep text-[15px] font-semibold leading-6">{value}</dd>
          </div>)}
        </dl>
        <p className="mt-5 text-xs leading-6 text-muted-foreground">사업자등록증 및 법인인감증명서 사본은 요청 시 제공합니다.</p>
      </div>
    </section>

    {/* Business Areas */}
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="BUSINESS AREAS" title="자재만 넘기고 끝내지 않습니다." />
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {areas.map((area) => <article key={area.en} className="bg-background px-7 py-9">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-gold">{area.en}</p>
            <h3 className="mt-4 text-lg font-bold tracking-tight sm:text-xl">{area.title}</h3>
            <p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{area.desc}</p>
          </article>)}
        </div>
        <div className="mt-px grid gap-px border border-t-0 border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {targets.map(([sector, desc]) => <div key={sector} className="bg-surface px-7 py-6">
            <p className="text-sm font-bold">{sector}</p>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">{desc}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="WHY EUM&BUILD" title="직통 구조의 차이" />
        <div className="overflow-x-auto border border-border bg-background">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">구분</th>
                <th className="px-6 py-5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground">일반 무역상 · 에이전트</th>
                <th className="px-6 py-5 text-[11px] font-semibold tracking-[0.14em] text-foreground">이음앤빌드</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map(([label, general, ours]) => <tr key={label} className="border-b border-border last:border-0">
                <td className="px-6 py-5 text-sm font-bold">{label}</td>
                <td className="px-6 py-5 text-sm text-muted-foreground"><span className="mr-2 inline-flex align-middle"><X size={14} className="text-muted-foreground/60" /></span>{general}</td>
                <td className="px-6 py-5 text-sm font-semibold"><span className="mr-2 inline-flex align-middle"><Check size={14} className="text-gold" /></span>{ours}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="EXECUTIVE LEADERSHIP" title="중국과 한국, 두 대표가 함께 결정합니다." />
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {leaders.map((leader) => <article key={leader.name} className="bg-background px-8 py-10 sm:px-10 sm:py-12">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-gold">{leader.role}</p>
            <h3 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{leader.name}</h3>
            <p className="mt-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground">{leader.subtitle}</p>
            <p className="mt-6 break-keep text-[15px] font-medium leading-7">{leader.quote}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {leader.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"><Check size={15} className="mt-1 shrink-0 text-gold" />{bullet}</li>)}
            </ul>
          </article>)}
        </div>
      </div>
    </section>

    {/* Authority */}
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="OUR EXCLUSIVE AUTHORITY" title="직접 계약하고, 독점 운용하고, 함께 개발합니다." />
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {authority.map(([num, title, desc]) => <article key={num} className="bg-background px-7 py-9">
            <p className="text-2xl font-bold text-gold">{num}</p>
            <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
            <p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{desc}</p>
          </article>)}
        </div>
        <p className="mt-5 text-xs leading-6 text-muted-foreground">개별 계약의 범위와 조건은 프로젝트 협의 단계에서 서면으로 확인합니다.</p>
      </div>
    </section>

    {/* How We Work */}
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-10">
        <SectionHead eyebrow="HOW WE WORK" title="승인 대기 없는 5단계" />
        <ol className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([num, title, desc]) => <li key={num} className="bg-background px-6 py-8">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-gold">STEP {num}</p>
            <h3 className="mt-4 break-keep text-[15px] font-bold tracking-tight">{title}</h3>
            <p className="mt-3 break-keep text-[13px] leading-6 text-muted-foreground">{desc}</p>
          </li>)}
        </ol>
        <ul className="mt-6 flex flex-wrap gap-2">
          {rejections.map((item) => <li key={item} className="inline-flex items-center gap-1.5 border border-border px-3.5 py-2 text-xs text-muted-foreground"><X size={12} className="text-muted-foreground/60" />{item}</li>)}
        </ul>
      </div>
    </section>

    <ContactBand />
  </SiteShell>;
}
