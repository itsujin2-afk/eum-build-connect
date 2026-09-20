import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/eum-build-logo-transparent.png.asset.json";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

const heroFrames = [
  { image: "020", caption: "웅장한 석재 건축 외관" },
  { image: "024", caption: "정교한 럭셔리 인테리어" },
  { image: "021", caption: "현대 건축과 소재" },
];

export function CinematicHome() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % heroFrames.length), 5600);
    return () => window.clearInterval(timer);
  }, []);

  return (
      <section className="relative flex min-h-[640px] h-[100svh] items-center justify-center overflow-hidden bg-foreground text-primary-foreground">
        <div className="absolute inset-0">
          {heroFrames.map((frame, index) => (
            <img
              key={frame.image}
              src={asset(frame.image)}
              alt={frame.caption}
              className={`cinematic-frame ${index === active ? "is-active" : ""}`}
            />
          ))}
          <div className="cinematic-logo-shade" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-6 pt-16 text-center">
          <div className="logo-focus animate-fade-in">
            <img src={logoAsset.url} alt="이음앤빌드 — Curated Material Portfolio" className="w-[min(76vw,550px)] object-contain drop-shadow-2xl" />
          </div>
          <p className="mt-7 text-xs font-medium text-primary-foreground/75 sm:text-sm">주식회사 이음앤빌드</p>
          <Link to="/company" className="group mt-10 inline-flex items-center gap-3 border-b border-primary-foreground/55 pb-2 text-xs font-semibold text-primary-foreground transition hover:border-primary-foreground">
            이음앤빌드 둘러보기 <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="absolute inset-x-0 bottom-7 z-10 flex items-center justify-center gap-2" aria-hidden="true">
          {heroFrames.map((frame, index) => <span key={frame.image} className={`h-px transition-all duration-500 ${index === active ? "w-9 bg-primary-foreground" : "w-4 bg-primary-foreground/35"}`} />)}
        </div>
      </section>
  );
}