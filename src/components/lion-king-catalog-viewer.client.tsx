// ============= Full file contents =============

import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download, Home, LoaderCircle, Maximize, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogUrl = "/catalogs/lion-king-product-catalog-ko.pdf";
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const clampZoom = (value: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));

export function LionKingCatalogViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const pinchRef = useRef<{ startDistance: number; startZoom: number } | null>(null);
  const lastTapRef = useRef(0);
  const pageCount = 77;
  const pageImage = `/catalogs/lion-king-pages/page-${String(pageNumber).padStart(2, "0")}.jpg`;

  const goPage = (next: number) => {
    setLoading(true);
    setZoom(1);
    setPageNumber(Math.min(pageCount, Math.max(1, next)));
  };

  const toggleZoom = () => {
    setZoom((current) => (current > 1 ? 1 : 2.5));
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const a = event.touches[0]!;
      const b = event.touches[1]!;
      pinchRef.current = {
        startDistance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
        startZoom: zoom,
      };
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2 && pinchRef.current) {
      const a = event.touches[0]!;
      const b = event.touches[1]!;
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (pinchRef.current.startDistance > 0) {
        setZoom(clampZoom(pinchRef.current.startZoom * (distance / pinchRef.current.startDistance)));
      }
    }
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (event.touches.length < 2) pinchRef.current = null;
  };

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) toggleZoom();
    lastTapRef.current = now;
  };

  return (
    <main className="min-h-screen bg-surface px-4 pb-10 pt-24 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-[1180px]">
        <header className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b border-border pb-5">
          <div className="min-w-0">
            <p className="eyebrow text-gold">LION KING CERAMICS</p>
            <h1 className="mt-2 truncate text-xl font-semibold sm:text-3xl">라이온킹 제품 카탈로그</h1>
          </div>
          <Button asChild variant="outline" size="sm" className="gap-1.5 px-3 sm:px-4">
            <Link to="/brands/lion-king-products"><Home size={16} />제품 소개</Link>
          </Button>
          <Button asChild variant="outline" size="icon" title="PDF 내려받기">
            <a href={catalogUrl} download><Download /></a>
          </Button>
        </header>

        <div className="sticky top-16 z-20 mt-4 flex items-center justify-center gap-3 border border-border bg-background/95 p-2 backdrop-blur sm:top-20">
          <Button variant="outline" size="icon" onClick={() => goPage(pageNumber - 1)} disabled={pageNumber === 1} aria-label="이전 페이지"><ChevronLeft /></Button>
          <span className="min-w-24 text-center text-sm font-semibold">{pageNumber} / {pageCount}</span>
          <Button variant="outline" size="icon" onClick={() => goPage(pageNumber + 1)} disabled={pageNumber === pageCount} aria-label="다음 페이지"><ChevronRight /></Button>
          <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          <Button variant="outline" size="icon" onClick={() => setZoom((z) => clampZoom(z - 0.5))} disabled={zoom <= MIN_ZOOM} aria-label="축소"><Minus /></Button>
          <span className="min-w-14 text-center text-sm font-semibold tabular-nums">{Math.round(zoom * 100)}%</span>
          <Button variant="outline" size="icon" onClick={() => setZoom((z) => clampZoom(z + 0.5))} disabled={zoom >= MAX_ZOOM} aria-label="확대"><Plus /></Button>
          <Button variant="outline" size="icon" onClick={() => setZoom(2.5)} disabled={zoom >= 2.5} aria-label="화면에 맞게 크게 보기"><Maximize /></Button>
        </div>

        <div
          className="relative mt-4 flex min-h-[55vh] items-start justify-center overflow-auto bg-background p-2 sm:p-5"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {loading && <div className="absolute flex items-center gap-2 py-24 text-sm text-muted-foreground"><LoaderCircle className="animate-spin" size={18} /> 카탈로그 불러오는 중</div>}
          <img
            src={pageImage}
            alt={`라이온킹 제품 카탈로그 ${pageNumber}쪽`}
            className="block h-auto max-w-none cursor-zoom-in select-none shadow-sm"
            style={{ width: `${zoom * 100}%` }}
            onClick={handleTap}
            onLoad={() => setLoading(false)}
            draggable={false}
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">사진을 두 번 탭하거나 손가락 두 개로 벌리면 확대됩니다.</p>
      </div>
    </main>
  );
}
