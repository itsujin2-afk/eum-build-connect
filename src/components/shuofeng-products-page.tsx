import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import archedDoor from "@/assets/shuofeng-products/arched-door.jpg.asset.json";
import classicWall from "@/assets/shuofeng-products/classic-wall.jpg.asset.json";
import greenDoor from "@/assets/shuofeng-products/green-door.jpg.asset.json";
import minimalDoor from "@/assets/shuofeng-products/minimal-door.jpg.asset.json";
import oliveDoor from "@/assets/shuofeng-products/olive-door.jpg.asset.json";
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
  { image: classicWall.url, title: "클래식 도어·수납장 일체형", detail: "아이보리 패널 월 · 싱글 도어" },
  { image: wardrobe.url, title: "프렌치 붙박이 수납장", detail: "아치 오픈장 · 유리 선반 · 서랍장" },
  { image: whiteDoor.url, title: "화이트 클래식 싱글 도어", detail: "투 패널 몰딩 · 화이트 도장" },
] as const;

const collections = [
  { range: "5004—5006", title: "라운드 프레임 싱글 도어", copy: "대표 모델 5006의 길게 이어진 라운드 프레임과 아이보리 톤이 클래식한 벽 몰딩과 자연스럽게 연결됩니다.", image: roundedDoor.url },
  { range: "5007—5009", title: "올리브 아치 패널 도어", copy: "대표 모델 5009의 올리브 컬러와 부드러운 아치형 패널이 공간에 차분한 포인트를 더합니다.", image: oliveDoor.url },
  { range: "5010—5012", title: "화이트 도어·우드 슬랫 월", copy: "대표 모델 5012의 슬림한 화이트 싱글 도어를 월넛 슬랫 벽면과 조합한 모던 프렌치 구성입니다.", image: archedDoor.url },
  { range: "5013—5017", title: "딥 그린 아치 패널", copy: "대표 모델 5015의 딥 그린 싱글 도어와 아이보리 벽 패널, 같은 색상의 수납장을 함께 맞춘 구성입니다.", image: greenDoor.url },
  { range: "5018—5028", title: "뉴트럴 플랫 패널", copy: "대표 모델 5018의 그레이지 싱글 도어와 플랫 수납 패널처럼 장식을 줄인 디자인을 중심으로 구성됩니다.", image: minimalDoor.url },
] as const;

const modelGroups = [
  ["5001—5003", "수납 벽면 · 싱글 도어", "문과 붙박이장을 같은 몰딩과 컬러로 연결"],
  ["5004—5006", "라운드 패널", "부드러운 사각 라인과 긴 타원형 디테일"],
  ["5007—5009", "양개 · 유리 · 올리브 도어", "양개형과 유리형에 올리브 아치 패널까지 이어지는 구성"],
  ["5010—5012", "화이트 모던 패널", "가는 프레임의 싱글 도어와 우드 슬랫 월 조합"],
  ["5013—5017", "아치 · 글라스 패널", "곡선 프레임과 유리 인서트를 달리한 도어 구성"],
  ["5018—5028", "뉴트럴 플랫 도어", "그레이지·아이보리 계열의 절제된 패널 디자인"],
] as const;

const extendedCollections = [
  { range: "5029—5048", label: "RETRO FRENCH", title: "블랙 클래식 패널", copy: "대표 이미지의 블랙 싱글 도어처럼 깊은 색과 세로 몰딩을 사용해 레트로 프렌치 특유의 무게감을 더합니다.", image: retroBlack.url },
  { range: "5049—5060", label: "MEDIEVAL WOOD", title: "아치형 우드 도어", copy: "세로 홈을 낸 브라운 원목 도어와 둥근 아치 프레임을 조합해 따뜻하고 고전적인 공간을 만듭니다.", image: retroWood.url },
  { range: "5061—5087", label: "MODERN SIMPLE", title: "화이트 슬림 프레임", copy: "화이트 싱글 도어에 가는 세로 홈과 슬림한 프레임을 적용해 벽면과 자연스럽게 이어지도록 정돈합니다.", image: modernWhite.url },
  { range: "5089—5104", label: "MODERN CHINESE", title: "화이트 도어·월넛 월", copy: "장식을 줄인 화이트 도어와 짙은 월넛 벽면·수납장을 대비시켜 차분하고 단정하게 구성합니다.", image: modernRoom.url },
  { range: "5105—5117", label: "DESIGNER SERIES", title: "다크 우드 디자이너 도어", copy: "짙은 우드 톤의 플랫 도어와 떠 있는 수납장을 헤링본 바닥과 조합해 간결한 중심 면을 만듭니다.", image: designerWalnut.url },
  { range: "5118—5123", label: "ITALIAN STYLE", title: "월넛 슬림 패널 도어", copy: "짙은 월넛 톤과 가는 세로 프레임, 브라스 손잡이를 조합해 절제되고 깊이 있는 인상을 냅니다.", image: italianDoor.url },
  { range: "5124—5145", label: "WOOD GRAIN", title: "월넛 투 패널 도어", copy: "중간 톤 월넛의 사각 투 패널 도어를 같은 나뭇결의 수납장과 연결해 공간 전체를 통일합니다.", image: chineseWalnut.url },
] as const;

const finalCollections = [
  { range: "5146—5165", label: "SIMPLE EUROPEAN", title: "마호가니 인레이 도어", copy: "깊은 적갈색 우드 톤과 가는 세로 인레이 라인을 조합해 장식을 절제한 유러피안 분위기를 만듭니다.", image: simpleEuropean.url },
  { range: "5166—5184", label: "NEW CHINESE", title: "산수화 파티션 월", copy: "동양화 모티프의 대형 패널과 짙은 우드 수납장을 조합해 전통적인 이미지를 현대적인 다이닝 공간에 담았습니다.", image: newChinese.url },
  { range: "S185—SF7009", label: "LOG & SUNSHINE GLASS", title: "아치 글라스 원목 양개문", copy: "마호가니 톤 원목 프레임과 아치형 유리창을 결합한 양개문으로 채광과 공간의 개방감을 함께 조절합니다.", image: sunshineGlass.url },
  { range: "5201—5216", label: "SPECIAL DOOR SYSTEM", title: "루버형 폴딩 도어", copy: "대표 모델 5216의 화이트 루버 폴딩 도어처럼 문짝을 접어 열 수 있어 좁은 동선을 효율적으로 활용합니다.", image: specialDoors.url },
] as const;

const coordinatedOptions = [
  { label: "FRENCH CABINET", title: "아치형 프렌치 미디어월", copy: "머스터드 톤 아치 수납장과 오픈 선반을 벽면 중앙의 미디어월과 맞춘 구성", image: frenchCabinet.url },
  { label: "MODERN · MID-CENTURY", title: "월넛·라탄 다이닝 수납장", copy: "월넛 프레임과 라탄 패널 도어, 오픈 선반을 조합한 다이닝 수납 시스템", image: modernCabinet.url },
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
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold text-muted-foreground"><span>모델 216종</span><span>도장 · 우드 베니어 · 유리</span><span>도어 · 벽면 · 수납장</span></div>
            </div>
            <div className="mt-8"><a href="https://book.yunzhan365.com/umhx/zpdy/mobile/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">제품 카탈로그 보기 <ExternalLink size={16}/></a></div>
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
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">MODEL COLLECTION</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">라이트 럭셔리 프렌치,<br/>형태와 색상을 비교합니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">첨부 카탈로그에서 검색창과 페이지 번호, QR 코드를 제외하고 실제 문과 적용 공간만 선별했습니다.</p></div>
      <div className="mt-14 divide-y divide-border border-y border-border">{collections.map((item,index)=><article key={item.range} className="grid gap-7 py-8 md:grid-cols-[70px_1fr_1.15fr] md:items-center lg:gap-12"><span className="text-xs font-bold text-gold">0{index+1}</span><div><h3 className="text-2xl font-bold">{item.title}</h3><p className="mt-4 max-w-md break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div><img src={item.image} alt={`슈오펑 ${item.title}`} className="aspect-[4/5] w-full bg-surface object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></article>)}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">EXTENDED COLLECTION</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">일곱 가지 스타일로<br/>공간의 폭을 넓힙니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">추가 카탈로그 28개 자료에서 모델과 제품군을 이어 정리하고, 카탈로그 화면과 글자는 제외한 실제 제품·공간 사진만 사용했습니다.</p></div>
      <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{extendedCollections.map((item)=><article key={item.range}><div className="overflow-hidden bg-background"><img src={item.image} alt={`슈오펑 ${item.title}`} className="aspect-[4/5] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition duration-500 hover:scale-[1.03]"/></div><div className="border-t border-border pt-5"><p className="text-[11px] font-bold text-gold">{item.label}</p><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div>
    </div></section>

    <section><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="max-w-3xl"><p className="eyebrow text-muted-foreground">COMPLETE DOOR SYSTEM</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl lg:text-5xl">원목과 유리, 폴딩까지<br/>도어 선택을 더 넓힙니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">심플 유러피안과 뉴 차이니즈, 원목·유리 도어에 슬라이딩·히든·폴딩 방식까지 후속 카탈로그의 제품군을 이어 정리했습니다.</p></div>
      <div className="mt-14 grid gap-x-5 gap-y-12 md:grid-cols-2">{finalCollections.map((item)=><article key={item.range}><div className="overflow-hidden bg-surface"><img src={item.image} alt={`슈오펑 ${item.title}`} className="aspect-[4/5] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition duration-500 hover:scale-[1.03]"/></div><div className="border-t border-border pt-5"><p className="text-[11px] font-bold text-gold">{item.label}</p><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><div><p className="eyebrow text-muted-foreground">COORDINATED OPTIONS</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl">문틀부터 수납장까지<br/>같은 흐름으로 맞춥니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground">아치형·직선형 문틀, 벽 패널과 창틀, 프렌치·모던·미드센추리·중식 수납장 도어를 공간에 맞춰 함께 선택할 수 있습니다.</p></div><div className="grid gap-5 sm:grid-cols-2">{coordinatedOptions.map((item)=><article key={item.label} className="bg-background"><img src={item.image} alt={`슈오펑 ${item.title} 적용 공간`} className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><div className="p-5"><p className="text-[11px] font-bold text-gold">{item.label}</p><h3 className="mt-2 text-lg font-bold">{item.title}</h3><p className="mt-3 break-keep text-sm leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div></div>
    </div></section>

    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow text-muted-foreground">MODEL INDEX</p><h2 className="mt-4 break-keep text-3xl font-bold leading-[1.2] sm:text-4xl">프로젝트에 맞는<br/>도어 형태를 고릅니다</h2><p className="mt-6 break-keep text-sm leading-7 text-muted-foreground">모델을 선택한 뒤 현장 도면에 맞춰 크기, 열림 방향, 컬러와 벽·수납장 연결 범위를 확정합니다.</p></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{modelGroups.map(([range,title,copy])=><article key={range} className="bg-background p-6"><p className="text-xs font-bold text-gold">{range}</p><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></div>
      <div className="mt-14 grid gap-5 md:grid-cols-3"><img src={frenchCabinet.url} alt="슈오펑 머스터드 톤 아치 수납장과 미디어월을 적용한 거실" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={modernCabinet.url} alt="슈오펑 월넛과 라탄 수납장, 다이닝 테이블을 적용한 실내" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/><img src={modernRoom.url} alt="슈오펑 다크 월넛 벽면과 화이트 도어를 적용한 복도" className="aspect-[4/3] w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03]"/></div>
    </div></section>

    <section><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-muted-foreground">KOREA PROJECT DESK</p><h2 className="mt-5 max-w-4xl break-keep text-3xl font-bold leading-[1.25] sm:text-4xl">마음에 드는 모델과 현장 도면을 보내주시면 제작 조건을 확인합니다.</h2><p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-muted-foreground">이음앤빌드가 슈오펑 생산팀과 크기·마감·수량·납기를 직접 조율합니다.</p></div><div className="flex flex-wrap gap-3"><Link to="/brands/shuofeng" className="inline-flex items-center gap-2.5 bg-foreground px-8 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-gold hover:text-foreground">슈오펑 소개 보기 <ArrowRight size={16}/></Link><Link to="/company" className="inline-flex items-center gap-2.5 border border-foreground px-8 py-4 text-sm font-bold transition-colors hover:bg-foreground hover:text-primary-foreground">이음앤빌드 소개</Link></div></div></section>
  </SiteShell>;
}