import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import archedDoor from "@/assets/shuofeng-products/arched-door.jpg.asset.json";
import classicWall from "@/assets/shuofeng-products/classic-wall.jpg.asset.json";
import doubleDoor from "@/assets/shuofeng-products/double-door.jpg.asset.json";
import greenDoor from "@/assets/shuofeng-products/green-door.jpg.asset.json";
import mediaWall from "@/assets/shuofeng-products/media-wall.jpg.asset.json";
import minimalDoor from "@/assets/shuofeng-products/minimal-door.jpg.asset.json";
import oliveDoor from "@/assets/shuofeng-products/olive-door.jpg.asset.json";
import panelLiving from "@/assets/shuofeng-products/panel-living.jpg.asset.json";
import roundedDoor from "@/assets/shuofeng-products/rounded-door.jpg.asset.json";
import wardrobe from "@/assets/shuofeng-products/wardrobe.jpg.asset.json";
import whiteDoor from "@/assets/shuofeng-products/white-door.jpg.asset.json";
import retroBlack from "@/assets/shuofeng-products/retro-black.jpg.asset.json";
import retroWood from "@/assets/shuofeng-products/retro-wood.jpg.asset.json";
import modernWhite from "@/assets/shuofeng-products/modern-white.jpg.asset.json";
import modernRoom from "@/assets/shuofeng-products/modern-room.jpg.asset.json";
import designerWalnut from "@/assets/shuofeng-products/designer-walnut.jpg.asset.json";
import italianDoor from "@/assets/shuofeng-products/italian-door.jpg.asset.json";
import chineseWalnut from "@/assets/shuofeng-products/chinese-walnut.jpg.asset.json";
import simpleEuropean from "@/assets/shuofeng-products/simple-european.jpg.asset.json";
import newChinese from "@/assets/shuofeng-products/new-chinese.jpg.asset.json";
import sunshineGlass from "@/assets/shuofeng-products/sunshine-glass.jpg.asset.json";
import specialDoors from "@/assets/shuofeng-products/special-doors.jpg.asset.json";
import frenchCabinet from "@/assets/shuofeng-products/french-cabinet.jpg.asset.json";
import modernCabinet from "@/assets/shuofeng-products/modern-cabinet.jpg.asset.json";

const scenes = [
  { image: classicWall.url, title: "문·벽·수납장 일체형", detail: "5001 · 침실 수납 벽면" },
  { image: wardrobe.url, title: "프렌치 수납 시스템", detail: "5002 · 붙박이장과 오픈 선반" },
  { image: whiteDoor.url, title: "클래식 싱글 도어", detail: "5003 · 침실 적용" },
] as const;

const collections = [
  { range: "5004—5006", title: "절제된 라운드 몰딩", copy: "얇은 선과 부드러운 모서리로 거실·침실·서재에 차분한 프렌치 인상을 더합니다.", image: roundedDoor.url },
  { range: "5007—5009", title: "양개문과 글라스 도어", copy: "넓은 출입구를 위한 양개문, 빛을 나누는 유리문, 올리브 톤 포인트 도어로 구성됩니다.", image: oliveDoor.url },
  { range: "5010—5014", title: "아치 패널 컬렉션", copy: "긴 아치와 타원형 패널을 중심으로 화이트·크림·월넛 색상을 선택할 수 있습니다.", image: archedDoor.url },
  { range: "5015—5020", title: "세이지와 뉴트럴 톤", copy: "세이지 그린, 아이보리, 그레이 브라운을 벽 패널과 연결해 한 공간처럼 맞춥니다.", image: greenDoor.url },
  { range: "5021—5028", title: "8가지 도어 베리에이션", copy: "플랫 패널부터 아치, 유리, 세로 루버 형태까지 공간의 개방감과 프라이버시에 맞춰 고릅니다.", image: minimalDoor.url },
] as const;

const modelGroups = [
  ["5001—5003", "수납 벽면 · 싱글 도어", "문과 붙박이장을 같은 몰딩과 컬러로 연결"],
  ["5004—5006", "라운드 패널", "부드러운 사각 라인과 긴 타원형 디테일"],
  ["5007—5009", "양개 · 유리 · 포인트 도어", "넓은 출입구와 채광 조건에 맞춘 구성"],
  ["5010—5014", "아치 패널", "아치 비례와 컬러를 달리한 클래식 구성"],
  ["5015—5020", "뉴트럴 컬러", "세이지·아이보리·그레이 브라운 선택"],
  ["5021—5028", "혼합 디자인", "플랫·아치·유리·루버형 8가지 선택"],
] as const;

const extendedCollections = [
  { range: "5029—5048", label: "RETRO FRENCH", title: "레트로 프렌치", copy: "깊은 아치와 세로 몰딩, 블랙·올리브·월넛 색상을 중심으로 공간에 클래식한 무게감을 더합니다.", image: retroBlack.url },
  { range: "5049—5060", label: "MEDIEVAL WOOD", title: "미드센추리 우드", copy: "나뭇결과 따뜻한 브라운 톤을 살린 문으로, 복고적인 분위기를 현대적인 공간에 자연스럽게 연결합니다.", image: retroWood.url },
  { range: "5061—5087", label: "MODERN SIMPLE", title: "모던 심플", copy: "장식을 줄인 플랫 도어와 얇은 선형 디테일로 거실·침실·서재를 깔끔하게 정돈합니다.", image: modernWhite.url },
  { range: "5089—5104", label: "MODERN CHINESE", title: "현대 중식", copy: "동양적인 비례를 간결한 면과 중성적인 색으로 풀어 전통과 현대 공간을 차분하게 잇습니다.", image: modernRoom.url },
  { range: "5105—5117", label: "DESIGNER SERIES", title: "디자이너 시리즈", copy: "천연 나뭇결과 절제된 패널 구성을 강조한 디자인 도어로, 거실과 서재의 중심 면을 만듭니다.", image: designerWalnut.url },
  { range: "5118—5123", label: "ITALIAN STYLE", title: "이탈리안 스타일", copy: "짙은 우드 베니어와 슬림한 프레임을 조합해 단정하고 깊이 있는 공간을 연출합니다.", image: italianDoor.url },
  { range: "5124—5145", label: "WOOD GRAIN", title: "현대 중식 우드", copy: "다양한 우드 톤과 사각 패널을 중심으로 문, 벽면, 수납장을 하나의 흐름으로 맞춥니다.", image: chineseWalnut.url },
] as const;

const finalCollections = [
  { range: "5146—5165", label: "SIMPLE EUROPEAN", title: "심플 유러피안", copy: "베이지·아이보리·그레이 등 차분한 색과 절제된 몰딩을 조합해 거실, 침실, 서재에 편안한 클래식 분위기를 만듭니다.", image: simpleEuropean.url },
  { range: "5166—5184", label: "NEW CHINESE", title: "뉴 차이니즈", copy: "월넛과 마호가니 계열의 깊은 나뭇결에 간결한 선을 더해 동양적인 공간을 현대적으로 정돈합니다.", image: newChinese.url },
  { range: "S185—SF7009", label: "LOG & SUNSHINE GLASS", title: "원목·선샤인 글라스", copy: "원목 도어와 빛을 통과시키는 유리 도어를 함께 구성해 다이닝룸, 서재, 주방의 개방감과 채광을 조절합니다.", image: sunshineGlass.url },
  { range: "5201—5216", label: "SPECIAL DOOR SYSTEM", title: "특수 도어 시스템", copy: "바깥면을 평평하게 맞춘 도어부터 슬라이딩, 히든, 폴딩 도어까지 공간 조건과 동선에 맞춰 선택합니다.", image: specialDoors.url },
] as const;

const coordinatedOptions = [
  { label: "FRENCH CABINET", title: "프렌치 수납장", copy: "아치 비례와 장식 몰딩을 문·벽면과 맞춘 수납장 도어", image: frenchCabinet.url },
  { label: "MODERN · MID-CENTURY", title: "모던·미드센추리 수납장", copy: "플랫 패널과 우드 톤을 조합한 수납장 도어", image: modernCabinet.url },
] as const;

export function ShuofengProductsPage() {
  return <SiteShell>
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-10 lg:pb-24 lg:pt-36">
        <Link to="/brands/shuofeng" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/> 슈오펑 소개</Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-muted-foreground">06 · 슈오펑 목문 · 제품 컬렉션</p>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-6xl">슈오펑 목문<br/>제품 컬렉션</h1>
            <p className="mt-6 max-w-xl break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">프렌치 몰딩부터 원목, 유리, 히든·폴딩 도어와 수납장까지 5001부터 5216까지 공간에 맞는 제품을 한곳에서 비교해 보세요.</p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold text-muted-foreground"><span>모델 216종</span><span>도장 · 우드 베니어 · 유리</span><span>도어 · 벽면 · 수납장</span></div>
          </div>
          <figure className="overflow-hidden bg-surface"><img src={classicWall.url} alt="슈오펑 프렌치 스타일 문과 수납장 일체형 공간" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><figcaption className="flex items-center justify-between px-5 py-3 text-[11px] text-muted-foreground"><span className="font-bold text-gold">LIGHT LUXURY FRENCH</span><span>DOOR · WALL · CABINET</span></figcaption></figure>
        </div>
      </div>
    </section>

    <section className="bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">INTEGRATED SPACE</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">문만 고르지 않고,<br/>공간 전체를 함께 맞춥니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">도어의 몰딩, 벽 패널의 선, 수납장의 비례와 색상을 한 번에 조율해 공간마다 다른 마감이 섞이지 않도록 합니다.</p></div>
      <div className="mt-14 grid gap-5 lg:grid-cols-3">{scenes.map((item)=><figure key={item.detail} className="bg-background"><div className="overflow-hidden"><img src={item.image} alt={`슈오펑 ${item.title}`} className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition duration-500 hover:scale-[1.03]"/></div><figcaption className="px-5 py-4"><p className="text-xs font-bold text-gold">{item.detail}</p><h3 className="mt-2 text-lg font-bold">{item.title}</h3></figcaption></figure>)}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">MODEL COLLECTION</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">5001부터 5028까지,<br/>형태와 색상을 비교합니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">첨부 카탈로그에서 검색창과 페이지 번호, QR 코드를 제외하고 실제 문과 적용 공간만 선별했습니다.</p></div>
      <div className="mt-14 divide-y divide-border border-y border-border">{collections.map((item,index)=><article key={item.range} className="grid gap-7 py-8 md:grid-cols-[70px_1fr_1.15fr] md:items-center lg:gap-12"><span className="text-xs font-bold text-gold">0{index+1}</span><div><p className="text-[11px] font-bold text-muted-foreground">MODEL {item.range}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-4 max-w-md break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div><img src={item.image} alt={`슈오펑 모델 ${item.range} ${item.title}`} className="aspect-[16/10] w-full bg-surface object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></article>)}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">EXTENDED COLLECTION</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">5029부터 5145까지,<br/>일곱 가지 스타일로 확장합니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">추가 카탈로그 28개 자료에서 모델과 제품군을 이어 정리하고, 카탈로그 화면과 글자는 제외한 실제 제품·공간 사진만 사용했습니다.</p></div>
      <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{extendedCollections.map((item)=><article key={item.range}><div className="overflow-hidden bg-background"><img src={item.image} alt={`슈오펑 ${item.title} ${item.range}`} className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition duration-500 hover:scale-[1.03]"/></div><div className="border-t border-border pt-5"><div className="flex items-center justify-between gap-4 text-[11px] font-bold"><span className="text-gold">{item.label}</span><span className="text-muted-foreground">{item.range}</span></div><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">COMPLETE DOOR SYSTEM</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">5146부터 5216까지,<br/>도어 선택을 더 넓힙니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">심플 유러피안과 뉴 차이니즈, 원목·유리 도어에 슬라이딩·히든·폴딩 방식까지 후속 카탈로그의 제품군을 이어 정리했습니다.</p></div>
      <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2">{finalCollections.map((item)=><article key={item.range}><div className="overflow-hidden bg-surface"><img src={item.image} alt={`슈오펑 ${item.title} ${item.range}`} className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition duration-500 hover:scale-[1.03]"/></div><div className="border-t border-border pt-5"><div className="flex items-center justify-between gap-4 text-[11px] font-bold"><span className="text-gold">{item.label}</span><span className="text-muted-foreground">{item.range}</span></div><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="eyebrow text-muted-foreground">COORDINATED OPTIONS</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl">문틀부터 수납장까지<br/>같은 흐름으로 맞춥니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground">아치형·직선형 문틀, 벽 패널과 창틀, 프렌치·모던·미드센추리·중식 수납장 도어를 공간에 맞춰 함께 선택할 수 있습니다.</p></div><div className="grid gap-5 sm:grid-cols-2">{coordinatedOptions.map((item)=><article key={item.label} className="bg-background"><img src={item.image} alt={`슈오펑 ${item.title} 적용 공간`} className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><div className="p-5"><p className="text-[11px] font-bold text-gold">{item.label}</p><h3 className="mt-2 text-lg font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div></div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow text-muted-foreground">MODEL INDEX</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl">프로젝트에 맞는<br/>도어 형태를 고릅니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground">모델을 선택한 뒤 현장 도면에 맞춰 크기, 열림 방향, 컬러와 벽·수납장 연결 범위를 확정합니다.</p></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{modelGroups.map(([range,title,copy])=><article key={range} className="bg-background p-6"><p className="text-xs font-bold text-gold">{range}</p><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></div>
      <div className="mt-14 grid gap-5 md:grid-cols-3"><img src={doubleDoor.url} alt="슈오펑 양개 도어 적용 거실" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={panelLiving.url} alt="슈오펑 벽 패널 적용 거실" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={mediaWall.url} alt="슈오펑 수납장과 미디어 벽면" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></div>
    </div></section>

    <section><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">마음에 드는 모델과 현장 도면을 보내주시면 제작 조건을 확인합니다.</h2><p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">이음앤빌드가 슈오펑 생산팀과 크기·마감·수량·납기를 직접 조율합니다.</p></div><div className="flex flex-wrap gap-3"><a href="tel:01031138668" className="inline-flex items-center gap-2 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품·사양 문의 <ArrowRight size={16}/></a><Link to="/brands/shuofeng" className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-primary-foreground">슈오펑 소개로</Link></div></div></section>
  </SiteShell>;
}