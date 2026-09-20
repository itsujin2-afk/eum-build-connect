import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";
import heroAmbient from "@/assets/hero-ambient.webp.asset.json";

export function CinematicHome() {
  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
      {/* cinematic animated backdrop */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={heroAmbient.url}
          alt=""
          className="h-full w-full scale-[1.04] object-cover object-center"
        />
        {/* brand veil: keeps the white editorial tone + guarantees logo contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/35 to-white/60" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_52%_at_50%_44%,rgba(255,255,255,0.82),transparent_78%)]" />
      </div>

      {/* unified centerpiece */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-5 pb-4 pt-16 text-center sm:px-8 sm:pt-20">
        <div className="hero-reveal hero-reveal-logo relative flex flex-col items-center">
          <div aria-hidden className="absolute -inset-x-16 -inset-y-10 rounded-full bg-white/75 blur-2xl sm:-inset-x-24 sm:-inset-y-12" />
          <div className="relative flex flex-col items-center">
          <img
            src={logoAsset.url}
            alt="이음앤빌드"
            className="w-[200px] object-contain drop-shadow-[0_14px_38px_rgba(60,44,8,0.45)] drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] sm:w-[300px] lg:w-[360px]"
          />
          <p className="eyebrow mt-3 text-foreground/70 sm:mt-5">EXCLUSIVE REGIONAL HQ · KOREA</p>
          <h1 className="hero-reveal hero-reveal-title mt-3 break-keep text-lg font-bold leading-[1.45] tracking-tight text-foreground sm:text-xl lg:text-2xl">
            세계의 건축을 완성한 소재, <span className="text-gold">한국의 프로젝트로.</span>
          </h1>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-actions mt-7 sm:mt-9">
          <Link to="/company" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground sm:text-sm">
            <span className="relative">
              이음앤빌드 소개
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px bg-foreground/30 transition-colors duration-500 group-hover:bg-gold" />
            </span>
            <ArrowUpRight size={16} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
