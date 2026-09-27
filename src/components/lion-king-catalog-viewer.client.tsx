import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Download, Home, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogUrl = "/catalogs/lion-king-product-catalog-ko.pdf";

export function LionKingCatalogViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageCount = 77;
  const pageImage = `/catalogs/lion-king-pages/page-${String(pageNumber).padStart(2, "0")}.jpg`;

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
          <Button variant="outline" size="icon" onClick={() => { setLoading(true); setPageNumber((page) => Math.max(1, page - 1)); }} disabled={pageNumber === 1} aria-label="이전 페이지"><ChevronLeft /></Button>
          <span className="min-w-24 text-center text-sm font-semibold">{pageNumber} / {pageCount}</span>
          <Button variant="outline" size="icon" onClick={() => { setLoading(true); setPageNumber((page) => Math.min(pageCount, page + 1)); }} disabled={pageNumber === pageCount} aria-label="다음 페이지"><ChevronRight /></Button>
        </div>

        <div className="relative mt-4 flex min-h-[55vh] items-start justify-center overflow-auto bg-background p-2 sm:p-5">
          {loading && <div className="absolute flex items-center gap-2 py-24 text-sm text-muted-foreground"><LoaderCircle className="animate-spin" size={18} /> 카탈로그 불러오는 중</div>}
          <img src={pageImage} alt={`라이온킹 제품 카탈로그 ${pageNumber}쪽`} className="block h-auto w-full shadow-sm" onLoad={() => setLoading(false)} />
        </div>
      </div>
    </main>
  );
}