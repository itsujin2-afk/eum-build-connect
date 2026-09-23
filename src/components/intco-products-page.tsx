import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Grid2X2, Layers3, Package } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`] ?? "";

type Product = { 
  slug: string; 
  name: string; 
  category: string; 
  feature: string; 
  tags: string[]; 
  image: string;
};

const products: Product[] = [
  { slug: "ps-wall-panel", name: "PS 벽패널", category: "인테리어 벽패널", feature: "가볍고 시공이 간편한 친환경 재생 PS 소재 패널. 대리석, 우드, 스톤 등 다양한 질감을 정밀하게 구현합니다.", tags: ["친환경 재생 PS", "방수 및 방습", "경량 시공"], image: "080" },
  { slug: "wpc-louver", name: "WPC 루버 패널", category: "인테리어 벽패널", feature: "입체적인 라인과 질감으로 리듬감 있는 벽면을 연출합니다. 상업 공간과 주거 거실 포인트 벽면에 적합합니다.", tags: ["입체 디자인", "내구성", "포인트 월"], image: "083" },
  { slug: "acoustic-panel", name: "흡음 패널", category: "인테리어 벽패널", feature: "심미성과 기능성을 결합한 흡음 솔루션입니다. 오피스, 회의실, 호텔 로비의 소음 울림을 효과적으로 제어합니다.", tags: ["소음 저감", "오피스/상업용", "이지 인스톨"], image: "084" },
  { slug: "spc-flooring-wood", name: "SPC 클릭 바닥재 (우드)", category: "SPC 바닥재", feature: "천연 원목의 질감을 살리면서도 습기와 찍힘에 강합니다. 클릭 결합 방식으로 본드 없이 시공 가능합니다.", tags: ["리얼 우드 텍스처", "100% 방수", "친환경 소재"], image: "085" },
  { slug: "spc-flooring-stone", name: "SPC 클릭 바닥재 (스톤)", category: "SPC 바닥재", feature: "세련된 석재 패턴의 SPC 바닥재입니다. 대형 규격으로 공간을 더욱 넓고 고급스럽게 연출합니다.", tags: ["모던 스톤 룩", "고경도 표면", "상업 공간 추천"], image: "086" },
  { slug: "crown-molding", name: "천장 몰딩", category: "장식 몰딩", feature: "벽과 천장의 경계를 깔끔하게 마감합니다. 뒤틀림이 없는 PS 소재로 오랜 시간 변함없는 형태를 유지합니다.", tags: ["정밀 프로파일", "내충격성", "다양한 규격"], image: "082" },
  { slug: "skirting-board", name: "걸레받이", category: "장식 몰딩", feature: "바닥과 벽면의 접합부를 보호하고 장식합니다. 방수 소재로 물걸레 청소 시에도 손상이 없습니다.", tags: ["방수 마감", "간편 시공", "심플 디자인"], image: "087" },
  { slug: "outdoor-decking", name: "아웃도어 데크", category: "아웃도어 마감재", feature: "자외선과 수분에 강한 재생 PE 기반 WPC 데크입니다. 야외 테라스, 공원, 산책로 등에 최적화되어 있습니다.", tags: ["강력한 내후성", "미끄럼 방지", "저유지관리"], image: "089" },
  { slug: "outdoor-siding", name: "실외용 외벽재", category: "아웃도어 마감재", feature: "건물 외관의 가치를 높여주는 친환경 사이딩입니다. 변색이 적고 시공 효율이 뛰어납니다.", tags: ["외장 포인트", "단열 보조", "친환경 인증"], image: "088" },
];

const groups = ["인테리어 벽패널", "SPC 바닥재", "장식 몰딩", "아웃도어 마감재"];

export function IntcoProductsPage() {
  return <SiteShell>
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-40">
        <Link to="/brands/intco-decor" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/> 잉코 데코 소개</Link>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div><p className="eyebrow text-gold">INTCO DECOR COLLECTION</p><h1 className="mt-5 break-keep text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">공간을 완성하는<br/>친환경 마감재 시스템</h1></div>
          <div><p className="break-keep text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">잉코 데코는 폐플라스틱을 고부가가치 건축 자재로 재탄생시킵니다. 벽패널부터 바닥재, 실외 마감재까지 검증된 성능과 디자인의 통합 솔루션을 제공합니다.</p><div className="mt-7 flex gap-8 text-xs"><span><b className="mr-2 text-xl text-gold">4</b>주요 카테고리</span><span><b className="mr-2 text-xl text-gold">130+</b>수출 국가</span></div></div>
        </div>
      </div>
    </section>

    <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur" aria-label="제품 카테고리">
      <div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto px-5 py-4 sm:px-10">{groups.map((group)=><a key={group} href={`#${group}`} className="shrink-0 text-xs font-bold text-muted-foreground hover:text-gold">{group}</a>)}</div>
    </nav>

    {groups.map((group, groupIndex) => {
      const items = products.filter((product) => product.category === group);
      return <section key={group} id={group} className={groupIndex % 2 ? "bg-surface" : "bg-background"}>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-7"><div><p className="eyebrow text-muted-foreground">CATEGORY {String(groupIndex + 1).padStart(2,"0")}</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">{group}</h2></div><span className="text-xs text-muted-foreground">{String(items.length).padStart(2,"0")} PRODUCTS</span></div>
          <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, index)=><article key={product.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border border-border bg-background"><img src={asset(product.image)} alt={`${product.name} 상세 이미지`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"/><span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] backdrop-blur">{product.category.toUpperCase()}</span></div>
              <div className="mt-6 flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold text-gold">{String(index + 1).padStart(2,"0")} · INTCO</p><h3 className="mt-2 text-2xl font-bold">{product.name}</h3></div><Package size={17} className="mt-1 shrink-0 text-muted-foreground"/></div>
              <p className="mt-4 break-keep text-sm leading-7 text-muted-foreground">{product.feature}</p>
              <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border">
                {product.tags.map(tag => <span key={tag} className="bg-surface px-2 py-1 text-[10px] text-muted-foreground border border-border">#{tag}</span>)}
              </div>
            </article>)}
          </div>
        </div>
      </section>;
    })}

    <section className="bg-foreground text-primary-foreground"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-primary-foreground/50">PROJECT INQUIRY</p><h2 className="mt-5 max-w-3xl break-keep text-3xl font-bold leading-tight sm:text-5xl">대규모 상업 프로젝트부터<br/>프라이빗 주거 공간까지.</h2><div className="mt-8 flex flex-wrap gap-6 text-xs text-primary-foreground/60"><span className="inline-flex items-center gap-2"><Grid2X2 size={14}/> 샘플 스와치 신청</span><span className="inline-flex items-center gap-2"><Layers3 size={14}/> 시공 상담 및 견적 문의</span></div></div><a href="tel:01031138668" className={buttonVariants({size:"lg",className:"h-auto rounded-lg bg-background px-7 py-4 text-foreground hover:bg-surface"})}>상담 신청하기 <ArrowUpRight size={16}/></a></div></section>
  </SiteShell>;
}
