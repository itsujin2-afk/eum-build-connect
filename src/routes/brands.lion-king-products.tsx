import { createFileRoute } from "@tanstack/react-router";
import { LionKingProductsPage } from "@/components/lion-king-products-page";

export const Route = createFileRoute("/brands/lion-king-products")({
  head: () => ({ meta: [
    { title: "라이온킹 제품소개 — 포틀랜드 시리즈" },
    { name: "description", content: "2025 포틀랜드 시리즈 평면 6종, 몰드면 5종과 다섯 가지 주문 제작 규격을 소개합니다." },
    { property: "og:title", content: "라이온킹 제품소개 — 포틀랜드 시리즈" },
    { property: "og:description", content: "한 가지 돌의 여러 가지 표면, 포틀랜드 타일 컬렉션과 주문 규격" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LionKingProductsPage,
});
