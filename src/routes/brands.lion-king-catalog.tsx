import { lazy, Suspense } from "react";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";

const CatalogViewer = lazy(() => import("@/components/lion-king-catalog-viewer.client").then((module) => ({ default: module.LionKingCatalogViewer })));

export const Route = createFileRoute("/brands/lion-king-catalog")({
  head: () => ({ meta: [
    { title: "라이온킹 제품 카탈로그 — 이음앤빌드" },
    { name: "description", content: "라이온킹 세라믹스의 전체 제품 카탈로그를 페이지별로 확인합니다." },
    { property: "og:title", content: "라이온킹 제품 카탈로그 — 이음앤빌드" },
    { property: "og:description", content: "라이온킹 세라믹스의 전체 제품 카탈로그" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => (
    <ClientOnly fallback={<main className="min-h-screen bg-surface" />}>
      <Suspense fallback={<main className="min-h-screen bg-surface" />}><CatalogViewer /></Suspense>
    </ClientOnly>
  ),
});