import { createFileRoute } from "@tanstack/react-router";
import { LionKingProductsPage } from "@/components/lion-king-products-page";

export const Route = createFileRoute("/brands/lion-king-products")({
  head: () => ({ meta: [
    { title: "라이온킹 제품소개 — 타일 컬렉션" },
    { name: "description", content: "포틀랜드 표면부터 대형 석재 패턴과 300 × 900 mm 장식 타일까지 라이온킹의 주요 제품군을 소개합니다." },
    { property: "og:title", content: "라이온킹 제품소개 — 타일 컬렉션" },
    { property: "og:description", content: "공간과 용도에 맞춰 선택하는 라이온킹의 다양한 타일 표면과 규격" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LionKingProductsPage,
});
