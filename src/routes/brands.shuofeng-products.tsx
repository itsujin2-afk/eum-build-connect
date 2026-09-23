import { createFileRoute } from "@tanstack/react-router";
import { ShuofengProductsPage } from "@/components/shuofeng-products-page";

export const Route = createFileRoute("/brands/shuofeng-products")({
  head: () => ({ meta: [
    { title: "슈오펑 제품소개 — 목문 5001–5216" },
    { name: "description", content: "슈오펑 프렌치, 미드센추리, 모던, 중식, 원목·유리·특수 도어와 수납장 제품을 소개합니다." },
    { property: "og:title", content: "슈오펑 제품소개 — 목문 컬렉션" },
    { property: "og:description", content: "문·벽·수납장을 연결하는 슈오펑 목문 5001–5216 컬렉션" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ShuofengProductsPage,
});