// ============= Full file contents =============

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";
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
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid min-h-svh w-full max-w-[1440px] items-center gap-8 px-6 pb-12 pt-24 sm:px-10 lg:grid-cols-12 lg:gap-16 lg:px-20 lg:pt-20">
          {/* unified brand lockup — logo woven into the copy, no floating island */}
          <div className="relative z-10 flex flex-col lg:col-span-5">
            <div className="hero-reveal hero-reveal-logo flex items-center gap-5">
              <img
                src={logoAsset.url}
                alt="이음앤빌드"
                className="w-[64px] shrink-0 object-contain brightness-110 drop-shadow-[0_6px_18px_rgba(122,92,30,0.28)] sm:w-[76px]"
              />
              <div className="border-l border-border pl-5">
                <p className="eyebrow text-muted-foreground">EXCLUSIVE REGIONAL HQ</p>
                <p className="mt-2 text-[11px] font-bold tracking-[0.32em] text-foreground">KOREA</p>
              </div>
            </div>

            <h1 className="hero-reveal hero-reveal-title mt-9 break-keep text-[26px] font-extrabold leading-[1.28] tracking-tight sm:text-[2rem] lg:mt-12 lg:text-[2.35rem] lg:leading-[1.24]">
              세계의 건축을 완성한 소재,
              <br />
              <span className="text-gold">한국의 프로젝트로.</span>
            </h1>
            <p className="hero-reveal hero-reveal-copy mt-6 max-w-sm text-[13px] leading-7 text-muted-foreground">
              중국 최정상 6개 건축자재 브랜드를 하나의 책임 있는 창구로 연결합니다.
            </p>
            <div className="hero-reveal hero-reveal-actions mt-8">
              <Link to="/company" className="group inline-flex items-center gap-4 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                <span className="relative">
                  이음앤빌드 소개
                  <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px bg-border transition-colors duration-500 group-hover:bg-gold" />
                </span>
                <ArrowUpRight size={17} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="hero-reveal hero-reveal-actions mt-10 flex flex-wrap items-center gap-3">
              {heroFrames.map((frame, index) => (
                <button key={frame.image} type="button" aria-label={`${index + 1}번 이미지 보기`} onClick={() => setActive(index)} className="group py-2">
                  <span className={`block h-px w-10 transition-colors duration-300 ${index === active ? "bg-gold" : "bg-border group-hover:bg-muted-foreground"}`} />
                </button>
              ))}
              <span className="ml-1 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
                0{active + 1} / 0{heroFrames.length} · {heroFrames[active]?.label}
              </span>
              <span className="w-full text-[11px] leading-5 text-muted-foreground sm:w-auto sm:border-l sm:border-border sm:pl-3">{heroFrames[active]?.caption}</span>
            </div>
          </div>

          {/* commanding visual stage — the frames are the star */}
          <div className="hero-reveal hero-reveal-media relative lg:col-span-7">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 border border-border" />
            <div className="relative aspect-[4/3] overflow-hidden bg-surface sm:aspect-[16/10] lg:aspect-auto lg:h-[68svh] lg:max-h-[760px]">
              {heroFrames.map((frame, index) => (
                <img
                  key={frame.image}
                  src={asset(frame.image)}
                  alt={frame.caption}
                  className={`cinematic-frame ${index === active ? "is-active" : ""}`}
                />
              ))}
              <div className="absolute bottom-0 left-0 bg-background/92 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold tracking-[0.28em] text-gold">{heroFrames[active]?.label}</p>
                <p className="mt-1.5 text-xs font-semibold leading-5 text-foreground">{heroFrames[active]?.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="overflow-hidden border-t border-border bg-background py-24 lg:py-32">
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
