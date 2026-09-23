import { createFileRoute } from "@tanstack/react-router";
import { ShuofengProductsPage } from "@/components/shuofeng-products-page";

export const Route = createFileRoute("/brands/shuofeng-products")({
  head: () => ({ meta: [
    { title: "슈오펑 제품소개 — 프렌치 목문 5001–5028" },
    { name: "description", content: "슈오펑 라이트 럭셔리 프렌치 목문 5001부터 5028까지, 문·벽·수납장 일체형 제품을 소개합니다." },
    { property: "og:title", content: "슈오펑 제품소개 — 프렌치 목문 컬렉션" },
    { property: "og:description", content: "도장 목문과 벽 패널, 맞춤 수납장을 같은 디자인으로 구성하는 28개 모델" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ShuofengProductsPage,
});