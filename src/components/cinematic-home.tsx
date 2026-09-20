import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
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

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-10 pt-32 lg:px-10 lg:pb-14">
          <div className="max-w-5xl animate-fade-in">
            <p className="eyebrow text-primary-foreground/70">EXCLUSIVE REGIONAL HQ · KOREA</p>
            <h1 className="mt-5 text-5xl leading-[1.08] sm:text-6xl md:text-8xl lg:text-[6.5rem]">
              세계의 건축을 완성한 소재,<br />한국의 프로젝트로.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/80 md:text-base">
              중국 최정상 6개 건축자재 브랜드를 하나의 책임 있는 창구로 연결합니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#collection" className={buttonVariants({ size: "lg", className: "h-auto rounded-lg bg-background px-7 py-3 text-foreground shadow-none hover:bg-surface" })}>
                포트폴리오 보기 <ArrowDown />
              </a>
              <Link to="/company" className={buttonVariants({ size: "lg", variant: "outline", className: "h-auto rounded-lg border-primary-foreground/50 bg-transparent px-7 py-3 text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground" })}>
                이음앤빌드 소개 <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between border-t border-primary-foreground/30 pt-5">
            <div><p className="text-[10px] font-semibold tracking-[.18em] text-primary-foreground/60">0{active + 1} / 03</p><p className="mt-2 text-sm font-medium">{heroFrames[active]?.label}</p></div>
            <div className="hidden gap-2 sm:flex" aria-label="대표 이미지 선택">
              {heroFrames.map((frame, index) => <button key={frame.image} type="button" aria-label={`${index + 1}번 이미지 보기`} onClick={() => setActive(index)} className={`h-px w-12 transition-all ${index === active ? "bg-primary-foreground" : "bg-primary-foreground/40"}`} />)}
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
                <img src={asset(image)} alt={brand?.name ?? "건축 소재"} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-background/90 p-5 backdrop-blur-sm"><p className="text-[10px] font-semibold text-muted-foreground">{brand?.number} · {brand?.english}</p><div className="mt-2 flex items-center justify-between"><b>{brand?.name}</b><ArrowUpRight size={16} /></div></div>
              </Link>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}