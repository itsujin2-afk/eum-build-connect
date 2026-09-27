// ============= Full file contents =============

import { Download, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const catalogUrl = "/catalogs/lion-king-product-catalog-ko.pdf";
const pageCount = 77;

export function LionKingCatalogViewer() {
  return (
    <main className="min-h-screen bg-muted/40 px-2 pb-16 pt-3 sm:px-6">
      <div className="mx-auto max-w-[900px]">
        <header className="sticky top-0 z-20 mb-5 flex items-center justify-between gap-3 border border-border bg-background/95 px-4 py-3 backdrop-blur">
          <div className="min-w-0">
            <p className="eyebrow text-gold">LION KING CERAMICS</p>
            <h1 className="truncate text-base font-semibold sm:text-xl">라이온킹 제품 카탈로그</h1>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="outline" size="sm" className="gap-1.5 px-3">
              <Link to="/brands/lion-king-products"><Home size={16} /><span className="hidden sm:inline">제품 소개</span></Link>
            </Button>
            <Button asChild variant="outline" size="icon" title="PDF 내려받기">
              <a href={catalogUrl} download><Download /></a>
            </Button>
          </div>
        </header>

        <div className="flex flex-col items-center gap-2">
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
            <img
              key={pageNumber}
              src={`/catalogs/lion-king-pages/page-${String(pageNumber).padStart(2, "0")}.jpg`}
              alt={`라이온킹 제품 카탈로그 ${pageNumber}쪽`}
              loading="lazy"
              draggable={false}
              className="block w-full select-none bg-background shadow-sm"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
