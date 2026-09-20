import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";

export function CinematicHome() {
  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden px-5 pb-3 pt-16 sm:px-8 sm:pt-20 lg:px-14">
      {/* ambient luxury backdrop — surrounds the whole composition */}
      <div className="lux-stage fixed inset-0" aria-hidden>
        <div className="lux-lines" />
        <div className="lux-orb lux-orb-a" />
        <div className="lux-orb lux-orb-b" />
        <div className="lux-orb lux-orb-c" />
        <svg className="lux-rings" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <circle className="lux-arc" cx="50" cy="50" r="34" />
          <circle className="lux-arc lux-arc-2" cx="50" cy="50" r="25" />
          <circle className="lux-arc lux-arc-3" cx="50" cy="50" r="43" />
        </svg>
        <div className="lux-sweep" />
      </div>

      {/* unified centerpiece: logo + copy + link floating in the ambience */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col items-center justify-center text-center">
        <div className="hero-reveal hero-reveal-logo flex flex-col items-center">
          <img
            src={logoAsset.url}
            alt="이음앤빌드"
            className="w-[170px] object-contain brightness-110 drop-shadow-[0_10px_28px_rgba(122,92,30,0.3)] sm:w-[230px] lg:w-[290px]"
          />
          <p className="eyebrow mt-3 text-muted-foreground sm:mt-4">EXCLUSIVE REGIONAL HQ · KOREA</p>
          <h1 className="hero-reveal hero-reveal-title mt-2.5 break-keep text-[15px] font-semibold leading-[1.5] tracking-tight sm:text-[17px] lg:text-lg">
            세계의 건축을 완성한 소재, <span className="text-gold">한국의 프로젝트로.</span>
          </h1>
        </div>

        <div className="hero-reveal hero-reveal-actions mt-6 sm:mt-8">
          <Link to="/company" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground sm:text-xs">
            <span className="relative">
              이음앤빌드 소개
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px bg-border transition-colors duration-500 group-hover:bg-gold" />
            </span>
            <ArrowUpRight size={15} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
