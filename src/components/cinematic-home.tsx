import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";

export function CinematicHome() {
  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
      {/* quiet editorial backdrop — static */}
      <div className="absolute inset-0 bg-white" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_38%,rgba(244,243,243,0.7),transparent_75%)]"
        aria-hidden
      />

      {/* unified centerpiece */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col items-center justify-center px-5 pb-4 pt-16 text-center sm:px-8 sm:pt-20">
        <div className="hero-reveal hero-reveal-logo flex flex-col items-center">
          <img
            src={logoAsset.url}
            alt="이음앤빌드"
            className="w-[220px] object-contain drop-shadow-[0_16px_40px_rgba(60,44,8,0.28)] sm:w-[320px] lg:w-[380px]"
          />
          <p className="eyebrow mt-4 text-foreground/60 sm:mt-6">EXCLUSIVE REGIONAL HQ · KOREA</p>
          <h1 className="hero-reveal hero-reveal-title mt-3 break-keep text-lg font-bold leading-[1.45] tracking-tight text-foreground sm:text-xl lg:text-2xl">
            세계의 건축을 완성한 소재, <span className="text-gold">한국의 프로젝트로.</span>
          </h1>
        </div>

        <div className="hero-reveal hero-reveal-actions mt-8 sm:mt-10">
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
