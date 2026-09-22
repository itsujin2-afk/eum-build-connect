import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`] ?? "";

const slides = [
  { src: asset("030"), number: "01", alt: "미니멀한 조명 아래 전시된 천연 대리석 슬랩" },
  { src: asset("023"), number: "02", alt: "정제된 기하학이 돋보이는 석회암 건축" },
  { src: asset("020"), number: "03", alt: "순백의 대리석으로 완성된 그랜드 모스크" },
  { src: asset("034"), number: "04", alt: "절제된 웜그레이 세라믹 표면" },
  { src: asset("010"), number: "05", alt: "정밀한 기하학적 창호 패턴의 대형 건축 입면" },
  { src: asset("080"), number: "06", alt: "모노톤 리드 벽 패널 인테리어" },
];

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
          <div
            className="logo-stage w-[250px] sm:w-[330px] lg:w-[400px]"
            style={{ ["--logo-mask" as string]: `url(${logoAsset.url})` }}
          >
            <span className="logo-glow" aria-hidden />
            <span className="logo-stage-inner">
              <img
                src={logoAsset.url}
                alt="이음앤빌드"
                className="logo-stage-img drop-shadow-[0_18px_44px_rgba(60,44,8,0.22)]"
              />
              <span className="logo-sheen" aria-hidden />
            </span>
          </div>

          <p className="mt-6 break-keep text-sm font-medium leading-relaxed tracking-tight text-foreground/75 sm:mt-8 sm:text-base">
            중국 최정상 6개 브랜드 <span className="text-gold">공식 한국 HQ</span>
          </p>
          <Link
            to="/company"
            className="group mt-6 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/70 sm:mt-8"
          >
            <span className="relative">
              이음앤빌드 소개
              <span aria-hidden className="absolute inset-x-0 -bottom-1 h-px bg-foreground/30 transition-colors duration-500 group-hover:bg-gold" />
            </span>
            <ArrowUpRight size={13} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* high-end architectural gallery window — imagery stays crisp */}
        <figure className="hero-reveal hero-reveal-actions relative min-h-0 w-full self-stretch overflow-hidden border border-border bg-surface lg:col-span-7">
          {slides.map((s, i) => (
            <img
              key={s.number}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover saturate-[0.82] brightness-[0.98] contrast-[1.03] transition-opacity duration-[1800ms] ease-in-out ${
                i === active ? "opacity-100 animate-[kenburns_9s_ease-out_forwards]" : "opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,rgba(25,25,25,0.55),transparent)]" aria-hidden />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
            <p key={current.number} className="animate-[fade-in_1s_ease-out] text-[11px] font-semibold tracking-[0.2em] text-gold">
              {current.number}
            </p>
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  aria-label={`${s.number}번 이미지 보기`}
                  onClick={() => setActive(i)}
                  className={`h-px transition-all duration-500 ${i === active ? "w-8 bg-gold" : "w-4 bg-surface/50 hover:bg-surface"}`}
                />
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
