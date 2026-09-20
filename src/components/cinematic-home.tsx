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
    <div className="relative h-full min-h-0 overflow-hidden bg-background">
      <div className="mx-auto grid h-full min-h-0 w-full max-w-[1400px] grid-cols-1 grid-rows-[minmax(0,auto)_minmax(0,1fr)] items-center gap-6 px-5 pb-5 pt-14 sm:px-8 lg:grid-cols-12 lg:grid-rows-1 lg:gap-12 lg:pb-8 lg:pt-16">
        {/* pristine logo stage — no imagery behind it */}
        <div className="hero-reveal hero-reveal-logo flex min-w-0 flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
          <img
            src={logoAsset.url}
            alt="이음앤빌드"
            className="w-[230px] object-contain drop-shadow-[0_18px_44px_rgba(60,44,8,0.22)] sm:w-[300px] lg:w-[360px]"
          />
          <p className="eyebrow mt-5 text-foreground/55 sm:mt-7">EXCLUSIVE REGIONAL HQ · KOREA</p>
          <h1 className="mt-3 break-keep text-lg font-bold leading-[1.45] tracking-tight text-foreground sm:text-xl lg:text-[1.6rem]">
            세계의 건축을 완성한 소재,
            <br className="hidden lg:block" />{" "}
            <span className="text-gold">한국의 프로젝트로.</span>
          </h1>
          <Link
            to="/company"
            className="group mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground sm:mt-9 sm:text-sm"
          >
            <span className="relative">
              이음앤빌드 소개
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px bg-foreground/30 transition-colors duration-500 group-hover:bg-gold" />
            </span>
            <ArrowUpRight size={16} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* high-end architectural gallery window — imagery stays crisp */}
        <figure className="hero-reveal hero-reveal-actions relative min-h-0 w-full self-stretch overflow-hidden border border-border bg-surface lg:col-span-7">
          {slides.map((s, i) => (
            <img
              key={s.number}
              src={s.src}
              alt={`${s.english} ${s.category}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                i === active ? "opacity-100 animate-[kenburns_9s_ease-out_forwards]" : "opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(25,25,25,0.55),transparent)]" aria-hidden />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
            <p key={current.number} className="animate-[fade-in_1s_ease-out] text-[10px] font-semibold uppercase tracking-[0.2em] text-white sm:text-[11px]">
              <span className="text-gold">{current.number}</span> {current.english} · {current.category}
            </p>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  aria-label={`${s.english} 보기`}
                  onClick={() => setActive(i)}
                  className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-gold" : "w-4 bg-white/45 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
