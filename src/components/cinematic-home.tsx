import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";
import { Button, buttonVariants } from "@/components/ui/button";
import { brands } from "@/lib/site-data";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

const heroFrames = [
  { image: "020", label: "HUANQIU STONE", caption: "세계적 랜드마크를 완성한 석재 기술" },
  { image: "024", label: "CURATED INTERIORS", caption: "공간의 격을 결정하는 정교한 마감" },
  { image: "021", label: "GLOBAL REFERENCES", caption: "검증된 생산력과 국제 프로젝트 경험" },
];

const materialFrames = ["018", "038", "000", "054", "069", "089"];

export function CinematicHome() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroFrames.length), 5600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative flex min-h-[760px] h-[100svh] flex-col overflow-hidden bg-foreground text-primary-foreground">
        <div className="absolute inset-0">
          {heroFrames.map((frame, index) => (
            <img
              key={frame.image}
              src={asset(frame.image)}
              alt={frame.caption}
              className={`cinematic-frame ${index === active ? "is-active" : ""}`}
            />
          ))}
          <div className="cinematic-shade" />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-1 flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-16 lg:pb-12">
          <div className="hero-reveal hero-reveal-logo">
            <img src={logoAsset.url} alt="이음앤빌드" className="w-16 object-contain drop-shadow-lg sm:w-20" />
          </div>

          <div key={active} className="max-w-4xl">
            <p className="hero-reveal hero-reveal-eyebrow eyebrow text-primary-foreground/70">EXCLUSIVE REGIONAL HQ · KOREA</p>
            <h1 className="hero-reveal hero-reveal-title mt-5 text-3xl font-extrabold leading-[1.18] tracking-[-0.035em] sm:text-5xl sm:leading-[1.14] md:text-6xl lg:text-[4.25rem]">
              세계의 건축을 완성한 소재,<br className="hidden sm:block" />한국의 프로젝트로.
            </h1>
            <p className="hero-reveal hero-reveal-copy mt-7 max-w-lg text-sm leading-7 text-primary-foreground/80">
              중국 최정상 6개 건축자재 브랜드를 하나의 책임 있는 창구로 연결합니다.
            </p>
            <div className="hero-reveal hero-reveal-actions mt-8 flex flex-wrap gap-2.5">
              <Link to="/company" className={buttonVariants({ variant: "outline", className: "h-auto rounded-md border-primary-foreground/50 bg-transparent px-6 py-3 text-xs font-semibold text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground" })}>
                이음앤빌드 소개 <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="mt-9 flex items-end justify-between border-t border-primary-foreground/30 pt-4">
            <div><p className="text-[10px] font-semibold text-primary-foreground/60">0{active + 1} / 03</p><p className="mt-2 text-sm font-medium">{heroFrames[active]?.label}</p></div>
            <div className="hidden gap-2 sm:flex" aria-label="대표 이미지 선택">
              {heroFrames.map((frame, index) => <Button key={frame.image} type="button" variant="ghost" size="icon" aria-label={`${index + 1}번 이미지 보기`} onClick={() => setActive(index)} className="h-6 w-12 rounded-none p-0 hover:bg-transparent"><span className={`block h-px w-12 transition-all ${index === active ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} /></Button>)}
            </div>
            <p className="max-w-xs text-right text-xs text-primary-foreground/70">{heroFrames[active]?.caption}</p>
          </div>
        </div>
      </section>

      <section id="collection" className="overflow-hidden bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><p className="eyebrow text-muted-foreground">SIX MATERIAL LANGUAGES</p><h2 className="mt-5 text-4xl md:text-6xl">재료에서 공간까지</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">석재, 타일, 유리, 마루, 목문, 벽패널. 여섯 생산 전문성이 하나의 건축 언어를 만듭니다.</p>
          </div>
        </div>
        <div className="material-marquee mt-14">
          <div className="material-track">
            {[...materialFrames, ...materialFrames].map((image, index) => {
              const brand = brands[index % brands.length];
              return <Link key={`${image}-${index}`} to={`/brands/${brand?.slug}` as never} className="group relative block w-[280px] shrink-0 overflow-hidden sm:w-[380px]">
                <img src={asset(image)} alt={brand?.name ?? "건축 소재"} className="aspect-[4/5] w-full object-cover brightness-90 transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-105" />
                <div className="absolute inset-x-0 bottom-0 bg-background/90 p-5 backdrop-blur-sm"><p className="text-[10px] font-semibold text-muted-foreground">{brand?.number} · {brand?.english}</p><div className="mt-2 flex items-center justify-between"><b>{brand?.name}</b><ArrowUpRight size={16} /></div></div>
              </Link>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}