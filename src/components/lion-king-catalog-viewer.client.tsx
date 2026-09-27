import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { ChevronLeft, ChevronRight, Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogUrl = "/catalogs/lion-king-product-catalog-ko.pdf";

export function LionKingCatalogViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [documentProxy, setDocumentProxy] = useState<PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
        const pdf = await pdfjs.getDocument({ url: catalogUrl }).promise;
        if (!active) return;
        setDocumentProxy(pdf);
        setPageCount(pdf.numPages);
      } catch {
        if (active) setError("카탈로그를 불러오지 못했습니다.");
      }
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!documentProxy || !canvasRef.current) return;
    let active = true;
    let renderTask: RenderTask | undefined;
    void documentProxy.getPage(pageNumber).then((page) => {
      if (!active || !canvasRef.current) return;
      const baseViewport = page.getViewport({ scale: 1 });
      const availableWidth = Math.min(window.innerWidth - 32, 1180);
      const scale = Math.max(0.5, Math.min(2, availableWidth / baseViewport.width));
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;
      renderTask = page.render({ canvas, canvasContext: context, viewport, transform: pixelRatio === 1 ? undefined : [pixelRatio, 0, 0, pixelRatio, 0, 0] });
      return renderTask.promise;
    }).catch((reason: unknown) => {
      if (active && (!(reason instanceof Error) || reason.name !== "RenderingCancelledException")) setError("페이지를 표시하지 못했습니다.");
    });
    return () => {
      active = false;
      renderTask?.cancel();
    };
  }, [documentProxy, pageNumber]);

  return (
    <main className="min-h-screen bg-surface px-4 pb-10 pt-24 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-[1180px]">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-5">
          <div className="min-w-0">
            <p className="eyebrow text-gold">LION KING CERAMICS</p>
            <h1 className="mt-2 truncate text-xl font-semibold sm:text-3xl">라이온킹 제품 카탈로그</h1>
          </div>
          <Button asChild variant="outline" size="icon" title="PDF 내려받기">
            <a href={catalogUrl} download><Download /></a>
          </Button>
        </header>

        <div className="sticky top-16 z-20 mt-4 flex items-center justify-center gap-3 border border-border bg-background/95 p-2 backdrop-blur sm:top-20">
          <Button variant="outline" size="icon" onClick={() => setPageNumber((page) => Math.max(1, page - 1))} disabled={pageNumber === 1} aria-label="이전 페이지"><ChevronLeft /></Button>
          <span className="min-w-24 text-center text-sm font-semibold">{pageNumber} / {pageCount || "—"}</span>
          <Button variant="outline" size="icon" onClick={() => setPageNumber((page) => Math.min(pageCount, page + 1))} disabled={!pageCount || pageNumber === pageCount} aria-label="다음 페이지"><ChevronRight /></Button>
        </div>

        <div className="mt-4 flex min-h-[55vh] items-start justify-center overflow-auto bg-background p-2 sm:p-5">
          {!documentProxy && !error && <div className="flex items-center gap-2 py-24 text-sm text-muted-foreground"><LoaderCircle className="animate-spin" size={18} /> 카탈로그 불러오는 중</div>}
          {error && <p className="py-24 text-sm text-muted-foreground">{error}</p>}
          <canvas ref={canvasRef} className={documentProxy ? "block max-w-none shadow-sm" : "hidden"} />
        </div>
      </div>
    </main>
  );
}