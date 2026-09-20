import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";
import { brands } from "@/lib/site-data";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`] ?? "";

const slides = brands.map((b) => ({
  src: asset(b.heroImage),
  number: b.number,
  english: b.english,
  category: b.category.split(" · ")[0] ?? b.category,
}));

export function CinematicHome() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  const current = slides[active]!;

  return (
    <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
      {/* cinematic brand visuals — slow cross-fade + ken burns */}
      <div className="absolute inset-0 overflow-hidden bg-white" aria-hidden>
        {slides.map((s, i) => (
          <img
            key={s.number}
            src={s.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms] ease-in-out ${
              i === active ? "opacity-100 animate-[kenburns_9s_ease-out_forwards]" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* luxury white veil + soft vignette keeps logo dominant */}
      <div className="absolute inset-0 bg-white/72" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_58%_at_50%_42%,rgba(255,255,255,0.94),rgba(255,255,255,0.58)_58%,rgba(244,243,243,0.5)_100%)]"
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

      {/* brand meta caption + indicators */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] items-end justify-between gap-4 px-5 pb-3 sm:px-8 sm:pb-4">
        <p key={current.number} className="animate-[fade-in_1.2s_ease-out] text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/55 sm:text-[11px]">
          {current.number} {current.english} <span className="text-gold">·</span> {current.category}
        </p>
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.number}
              type="button"
              aria-label={`${s.english} 보기`}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-gold" : "w-4 bg-foreground/25 hover:bg-foreground/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
