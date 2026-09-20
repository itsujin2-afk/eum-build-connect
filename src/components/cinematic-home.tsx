import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";
import { brands } from "@/lib/site-data";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

const heroFrames = [
  { image: "020", label: "HUANQIU STONE", caption: "세계적 랜드마크를 완성한 석재" },
  { image: "024", label: "CURATED INTERIORS", caption: "공간의 격을 결정하는 마감" },
  { image: "021", label: "GLOBAL REFERENCES", caption: "검증된 생산력과 국제 실적" },
];

export function CinematicHome() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroFrames.length), 5600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex h-full min-h-0 flex-col px-5 pb-3 pt-16 sm:px-8 sm:pt-20 lg:px-14">
      <div className="mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col">
        {/* logo centerpiece */}
        <div className="hero-reveal hero-reveal-logo flex shrink-0 flex-col items-center text-center">
          <img
            src={logoAsset.url}
            alt="이음앤빌드"
            className="w-[150px] object-contain brightness-110 drop-shadow-[0_10px_28px_rgba(122,92,30,0.3)] sm:w-[210px] lg:w-[260px]"
          />
          <p className="eyebrow mt-3 text-muted-foreground sm:mt-4">EXCLUSIVE REGIONAL HQ · KOREA</p>
          <h1 className="hero-reveal hero-reveal-title mt-2.5 break-keep text-[15px] font-semibold leading-[1.5] tracking-tight sm:text-[17px] lg:text-lg">
            세계의 건축을 완성한 소재, <span className="text-gold">한국의 프로젝트로.</span>
          </h1>
        </div>

        {/* cinematic visual stage */}
        <div className="hero-reveal hero-reveal-media relative mt-4 min-h-[180px] flex-1 overflow-hidden bg-surface sm:mt-6">
          {heroFrames.map((frame, index) => (
            <img key={frame.image} src={asset(frame.image)} alt={frame.caption} className={`cinematic-frame ${index === active ? "is-active" : ""}`} />
          ))}
          <div className="absolute bottom-0 left-0 bg-background/92 px-4 py-3 backdrop-blur-sm sm:px-5 sm:py-4">
            <p className="text-[10px] font-bold tracking-[0.28em] text-gold">{heroFrames[active]?.label}</p>
            <p className="mt-1 text-[11px] font-semibold leading-5 text-foreground sm:text-xs">{heroFrames[active]?.caption}</p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            {heroFrames.map((frame, index) => (
              <button key={frame.image} type="button" aria-label={`${index + 1}번 이미지 보기`} onClick={() => setActive(index)} className="group py-2">
                <span className={`block h-px w-8 transition-colors duration-300 ${index === active ? "bg-gold" : "bg-background/70 group-hover:bg-background"}`} />
              </button>
            ))}
            <span className="text-[10px] font-semibold tracking-[0.2em] text-background/90">0{active + 1} / 0{heroFrames.length}</span>
          </div>
        </div>

        {/* brand quick access */}
        <div className="hero-reveal hero-reveal-actions mt-3 flex shrink-0 flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:mt-4 sm:gap-x-6">
          {brands.map((brand) => (
            <Link key={brand.slug} to={`/brands/${brand.slug}` as never} className="group text-[11px] font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground sm:text-xs">
              <span className="mr-1.5 text-gold">{brand.number}</span>
              {brand.name}
            </Link>
          ))}
          <Link to="/company" className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground sm:text-xs">
            이음앤빌드 소개
            <ArrowUpRight size={14} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
