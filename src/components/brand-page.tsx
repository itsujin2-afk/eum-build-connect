import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { brands, type Brand } from "@/lib/site-data";
import { SiteShell } from "@/components/site-shell";

const imageModules = import.meta.glob("../assets/eum/*.jpg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (id: string) => imageModules[`../assets/eum/${id}.jpg`];

export function BrandPage({ brand }: { brand: Brand | undefined }) {
  const [shot, setShot] = useState(0);
  if (!brand) return null;
  const index = brands.findIndex((item) => item.slug === brand.slug);
  const prev = brands.at((index - 1 + brands.length) % brands.length) ?? brand;
  const next = brands.at((index + 1) % brands.length) ?? brand;
  const frames = [brand.heroImage, ...brand.gallery];
  const current = frames[Math.min(shot, frames.length - 1)] ?? brand.heroImage;

  return <SiteShell fullscreen>
    <div className="flex h-full min-h-0 flex-col px-5 pb-2 pt-16 sm:px-8 sm:pt-20 lg:px-14">
      <div className="mx-auto grid min-h-0 w-full max-w-[1280px] flex-1 grid-rows-[auto_minmax(0,1fr)] gap-4 lg:grid-cols-12 lg:grid-rows-1 lg:gap-8">
        {/* brand identity */}
        <div className="flex min-h-0 w-full min-w-0 shrink-0 flex-col lg:col-span-4">
          <p className="eyebrow text-muted-foreground">{brand.english}{brand.since ? ` · SINCE ${brand.since}` : ""}</p>
          <h1 className="mt-2 break-keep text-[22px] font-extrabold leading-[1.25] tracking-tight sm:text-[28px] lg:text-[34px]">
            <span className="mr-2 text-gold">{brand.number}</span>{brand.name}
          </h1>
          <p className="mt-2 break-keep text-[12px] font-semibold leading-6 text-muted-foreground sm:text-[13px]">{brand.headline}</p>
          <div className="mt-3 grid grid-cols-2 gap-px bg-border">
            {brand.metrics.slice(0, 4).map((metric) => <div key={metric.label} className="bg-background px-3 py-2">
              <p className="text-[15px] font-extrabold tracking-tight sm:text-lg">{metric.value}</p>
              <p className="mt-0.5 truncate text-[9px] text-muted-foreground sm:text-[10px]">{metric.label}</p>
            </div>)}
          </div>
          <nav className="mt-3 hidden items-center justify-between gap-2 text-[10px] font-semibold text-muted-foreground lg:flex">
            <Link to={`/brands/${prev.slug}` as "/brands/huanqiu-stone"} className="inline-flex items-center gap-1.5 hover:text-foreground"><ArrowLeft size={13} />{prev.name}</Link>
            <Link to={`/brands/${next.slug}` as "/brands/huanqiu-stone"} className="inline-flex items-center gap-1.5 hover:text-foreground">{next.name}<ArrowRight size={13} /></Link>
          </nav>
        </div>

        {/* showcase */}
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col lg:col-span-8">
          <div className="relative min-h-[160px] flex-1 overflow-hidden bg-surface">
            <img src={asset(current)} alt={`${brand.name} 대표 이미지`} className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-background/92 px-4 py-2.5 backdrop-blur-sm">
              <p className="text-[9px] font-bold tracking-[0.26em] text-gold">{brand.category}</p>
              <p className="mt-1 text-[11px] font-semibold text-foreground">{brand.english} · {String(Math.min(shot, frames.length - 1) + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}</p>
            </div>
          </div>
          <div className="mt-2 flex shrink-0 gap-1.5 overflow-x-auto pb-1">
            {frames.map((id, i) => <button key={`${id}-${i}`} type="button" onClick={() => setShot(i)} aria-label={`${i + 1}번 이미지 보기`}
              className={`h-12 w-16 shrink-0 overflow-hidden border transition sm:h-14 sm:w-20 ${i === shot ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <img src={asset(id)} alt="" className="h-full w-full object-cover" />
            </button>)}
          </div>
        </div>
      </div>
    </div>
  </SiteShell>;
}
