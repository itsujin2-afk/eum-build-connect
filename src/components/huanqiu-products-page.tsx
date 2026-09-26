import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Grid2X2, Layers3, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";

const imageModules = import.meta.glob("../assets/umgg-products/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const productImage = (id: string) => imageModules[`../assets/umgg-products/${id}.jpg`] ?? "";

type Product = { slug: string; name: string; origin: string; family: string; tone: string; feature: string; properties?: string; use: string };

const products: Product[] = [
  { slug:"snow-white", name:"스노우 화이트", origin:"이탈리아", family:"화이트", tone:"COOL WHITE", feature:"아이스 화이트 바탕과 회청색 무늬, 크리스털과 눈꽃 같은 투명감", properties:"밀도 2.72g/cm³ · 흡수율 0.13% · 압축 140.1MPa", use:"실내 벽면 · 기둥 · 바닥" },
  { slug:"fishbelly-white", name:"피시벨리 화이트", origin:"이탈리아", family:"화이트", tone:"WARM WHITE", feature:"투명한 흰 바탕에 섬세한 청록색 산수 무늬가 흐르는 따뜻하고 우아한 대리석", properties:"밀도 2.72g/cm³ · 흡수율 0.13% · 압축 140.1MPa", use:"벽면 · 기둥 · 바닥 · 서비스 카운터" },
  { slug:"jazz-white", name:"재즈 화이트", origin:"그리스", family:"화이트", tone:"MILKY WHITE", feature:"유백색의 차분한 바탕과 독특한 산수 무늬가 만드는 깨끗한 표정", properties:"압축 140MPa · 굽힘 18.1MPa · 흡수율 0.14%", use:"고급 실내 장식 · 상판 · 세면대 · 조각" },
  { slug:"ariston-white", name:"야스 화이트", origin:"그리스", family:"화이트", tone:"PURE WHITE", feature:"순수한 백색 바탕에 자연스러운 회색 결이 박힌 최상급 화이트 스톤", properties:"밀도 2.63g/cm³ · 압축 130MPa · 흡수율 0.18%", use:"바닥 · 벽면 · 상판 · 기둥 · 세면대" },
  { slug:"oriental-white", name:"오리엔탈 화이트", origin:"중국 쓰촨", family:"화이트", tone:"ORIENTAL WHITE", feature:"97~99% 방해석의 치밀한 조직, 유려한 직선 무늬와 옥 같은 질감", use:"고급 벽면 · 바닥 · 조형 가공" },
  { slug:"roman-travertine", name:"로마 트래버틴", origin:"이탈리아", family:"트래버틴·우드", tone:"IVORY TRAVERTINE", feature:"촘촘하고 곧은 결, 섬세한 공극이 만드는 고전적 아이보리 표면", properties:"밀도 2.48g/cm³ · 흡수율 0.9% · 압축 53MPa", use:"내·외벽 · 빌라 · 호텔 로비 · 기둥" },
  { slug:"serpeggiante", name:"세르페지안테", origin:"이탈리아", family:"트래버틴·우드", tone:"WOOD GRAIN", feature:"천연 목재처럼 흐르는 결에 석재의 경도와 광택, 내구성을 결합", properties:"밀도 2.69g/cm³ · 흡수율 0.21% · 압축 105.4MPa", use:"실내 벽면 · 기둥 · 바닥" },
  { slug:"nero-portoro", name:"네로 포르토로", origin:"이탈리아", family:"트래버틴·우드", tone:"BLACK & GOLD", feature:"깊은 검정 바탕을 가르는 미세한 금빛 결의 희소한 최고급 대리석", properties:"압축 212MPa · 굽힘 22.4MPa · 흡수율 0.054%", use:"벽면 · 바닥 · 욕실 · 아크 패널 · 기둥" },
  { slug:"moca-cream", name:"모카 크림", origin:"포르투갈", family:"베이지", tone:"SAND BEIGE", feature:"매끄러운 색감과 선명하고 차분한 결, 안정적인 시공성이 특징", properties:"밀도 2.63g/cm³ · 압축 130MPa · 흡수율 0.22%", use:"바닥 · 벽면 · 상판 · 기둥" },
  { slug:"yellow-travertine", name:"옐로우 트래버틴", origin:"터키", family:"베이지", tone:"GOLDEN TRAVERTINE", feature:"짙은 황색 바탕에 띠 모양의 결이 흐르는 치밀하고 가공성 좋은 석재", properties:"월 1,000~1,500톤 · 압축 130MPa", use:"벽면 · 바닥 · 몰딩 · 조각 · 원기둥" },
  { slug:"crema-nacar", name:"크레마 나카르", origin:"터키", family:"베이지", tone:"CREAM", feature:"균일한 조직, 높은 강성과 내마모성, 산·알칼리 저항성을 갖춘 안정적인 소재", properties:"압축 100MPa · 굽힘 8MPa", use:"바닥 · 벽면 · 상판 · 기둥" },
  { slug:"royal-beige", name:"로얄 베이지", origin:"터키", family:"베이지", tone:"PEARL BEIGE", feature:"미백색 바탕 위 진주 꽃무늬와 은은한 그림자 반점, 유약 같은 표면", use:"호텔 로비 · 객실 벽면 · 바닥" },
  { slug:"crema-marfil", name:"크레마 마필", origin:"스페인", family:"베이지", tone:"SPANISH BEIGE", feature:"연한 크림색 바탕과 다양한 색선이 조화를 이루는 스페인 대표 베이지", properties:"밀도 2.68g/cm³ · 압축 177MPa · 흡수율 0.16%", use:"실내 벽면 · 기둥 · 바닥" },
  { slug:"earl-beige", name:"얼 베이지", origin:"터키", family:"베이지", tone:"SHELL BEIGE", feature:"백색에 가까운 베이지 바탕에 미세한 조개껍질 무늬가 균일하게 분포", use:"실내 벽면 · 바닥 · 곡면 · 계단" },
  { slug:"ali-beige", name:"알리 베이지", origin:"터키", family:"베이지", tone:"LIGHT BEIGE", feature:"균일한 크림 베이지 바탕과 반투명 꽃무늬가 만드는 부드러운 인상", use:"실내 벽면 · 기둥 · 바닥" },
  { slug:"imperial-beige", name:"임페리얼 베이지", origin:"터키", family:"베이지", tone:"IMPERIAL BEIGE", feature:"밝기 변화가 풍부한 베이지 바탕과 미세한 유리질 반점의 깊이감", use:"실내 벽면 · 바닥 · 곡면 · 원기둥" },
  { slug:"lightning-beige", name:"라이트닝 베이지", origin:"터키", family:"베이지", tone:"LIGHTNING VEIN", feature:"중간 베이지 바탕 위로 번개처럼 흐르는 흰색 무늬와 높은 광택", use:"벽면 · 바닥" },
  { slug:"portugal-beige", name:"포르투갈 베이지", origin:"포르투갈", family:"베이지", tone:"LINEAR BEIGE", feature:"안정적인 황색 바탕과 단정한 직선 무늬가 특징인 부드러운 석회석", use:"실내 바닥 · 벽면" },
  { slug:"new-ottoman-beige", name:"뉴 오토만 베이지", origin:"터키", family:"베이지", tone:"OTTOMAN BEIGE", feature:"색과 무늬가 균일하고 큰 원석 확보가 가능한 안정적인 베이지 스톤", use:"대형 벽면 · 바닥 · 프로젝트 규격판" },
  { slug:"venus-beige", name:"비너스 베이지", origin:"터키", family:"베이지", tone:"VENUS BEIGE", feature:"연한 베이지 바탕과 흰 반점, 번개 모양 결이 자연스럽게 이어지는 소재", use:"실내 벽면 · 바닥 · 기둥" },
  { slug:"venus-grey", name:"비너스 그레이", origin:"터키", family:"그레이", tone:"SILVER GREY", feature:"깊은 은회색 바탕과 흰색 선형 무늬가 대비되는 현대적인 석재", use:"벽면 · 바닥 · 곡면판 · 원기둥" },
  { slug:"petit-granit", name:"생탄 정", origin:"벨기에", family:"그레이", tone:"BELGIAN GREY", feature:"화강암에 견줄 만큼 견고한 탄산칼슘 퇴적암으로 절제된 화석 질감이 특징", use:"고급 실내외 마감 · 상업 공간" },
  { slug:"golden-spider", name:"골든 스파이더", origin:"그리스", family:"골드·기타", tone:"GOLDEN VEIN", feature:"흰 바탕에 거미줄처럼 변화하는 황금빛 망상 무늬의 화려한 대리석", properties:"밀도 2.82g/cm³ · 압축 164MPa", use:"실내 벽면 · 바닥 · 포인트 마감" },
  { slug:"sofita-gold", name:"소피타 골드", origin:"터키", family:"골드·기타", tone:"SOFITA GOLD", feature:"매우 밝은 바탕과 촘촘한 금황색 선, 유약 같은 광택이 돋보이는 소재", use:"고급 벽면 · 바닥 · 장식 패널" },
  { slug:"royal-gold", name:"로얄 골드", origin:"이스라엘", family:"골드·기타", tone:"ROYAL GOLD", feature:"직선형 또는 불규칙형 결을 지닌 따뜻한 골드톤의 고급 석재", use:"실내 장식 · 벽면 · 바닥" },
  { slug:"ivory-gold", name:"아이보리 골드", origin:"터키", family:"골드·기타", tone:"IVORY GOLD", feature:"깨끗한 아이보리 바탕과 섬세한 황금빛 결, 우수한 유약면 효과", use:"벽면 · 바닥 · 곡면 · 원기둥" },
];

const groups = ["화이트", "트래버틴·우드", "베이지", "그레이", "골드·기타"];

export function HuanqiuProductsPage() {
  return <SiteShell>
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40">
        <Link to="/brands/huanqiu-stone" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/> 환구 석재 소개</Link>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div><p className="eyebrow text-gold">환구 석재 제품 컬렉션</p><h1 className="mt-5 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">주요 천연석 품종 26종<br/>한곳에서 보고 고릅니다</h1></div>
          <div><p className="break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">화이트 대리석부터 트래버틴, 베이지, 그레이, 골드 계열까지. 환구 석재가 엄선하고 공급하는 주요 천연석 26종을 산지와 물성, 적용 범위에 따라 정리했습니다.</p><div className="mt-7 flex gap-8 text-xs"><span><b className="mr-2 text-xl text-gold">26</b>주요 품종</span><span><b className="mr-2 text-xl text-gold">8</b>산지 국가·지역</span></div></div>
        </div>
      </div>
    </section>

    <nav className="sticky top-14 z-40 border-b border-border bg-background/95 backdrop-blur" aria-label="제품 카테고리">
      <div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-5 py-4 sm:px-10">{groups.map((group)=><a key={group} href={`#${group}`} className="shrink-0 text-xs font-bold text-muted-foreground hover:text-gold">{group}</a>)}</div>
    </nav>

    {groups.map((group, groupIndex) => {
      const items = products.filter((product) => product.family === group);
      return <section key={group} id={group} className={groupIndex % 2 ? "bg-surface" : "bg-background"}>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-7"><div><p className="eyebrow text-muted-foreground">COLLECTION {String(groupIndex + 1).padStart(2,"0")}</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">{group} 시리즈</h2></div><span className="text-xs text-muted-foreground">{String(items.length).padStart(2,"0")} MATERIALS</span></div>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, index)=><article key={product.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-background"><img src={productImage(product.slug)} alt={`${product.name} 천연석 표면`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"/><span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] backdrop-blur">{product.tone}</span></div>
              <div className="mt-6 flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold text-gold">{String(index + 1).padStart(2,"0")} · {product.origin}</p><h3 className="mt-2 text-2xl font-bold">{product.name}</h3></div><MapPin size={17} className="mt-1 shrink-0 text-muted-foreground"/></div>
              <p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{product.feature}</p>
              <dl className="mt-5 space-y-2 border-t border-border pt-4 text-xs leading-6"><div className="flex gap-3"><dt className="w-12 shrink-0 font-bold">용도</dt><dd className="text-muted-foreground">{product.use}</dd></div>{product.properties && <div className="flex gap-3"><dt className="w-12 shrink-0 font-bold">물성</dt><dd className="text-muted-foreground">{product.properties}</dd></div>}</dl>
            </article>)}
          </div>
        </div>
      </section>;
    })}

    <section className="bg-foreground text-primary-foreground"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-primary-foreground/50">MATERIAL SELECTION</p><h2 className="mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight sm:text-5xl">도면과 공간에 맞는 천연석 소재부터<br/>가공 방식까지 함께 선정합니다.</h2><div className="mt-8 flex flex-wrap gap-6 text-xs text-primary-foreground/60"><span className="inline-flex items-center gap-2"><Grid2X2 size={14}/> 북매치·연속 무늬</span><span className="inline-flex items-center gap-2"><Layers3 size={14}/> 두께·표면 마감·이형 가공</span></div></div><a href="tel:01031138668" className={buttonVariants({size:"lg",className:"h-auto rounded-lg bg-background px-7 py-4 text-foreground hover:bg-surface"})}>샘플·사양 문의 <ArrowUpRight size={16}/></a></div></section>
  </SiteShell>;
}