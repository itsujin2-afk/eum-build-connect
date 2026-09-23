import { createFileRoute } from "@tanstack/react-router";
import { IntcoProductsPage } from "@/components/intco-products-page";

export const Route = createFileRoute("/brands/intco-decor-products")({
  head: () => ({ meta: [
    { title: "잉코 데코 제품소개 — 이음앤빌드" },
    { name: "description", content: "INTCO DECOR 벽패널, 몰딩, 바닥 부속, WPC 외장재와 SPC 월패널의 제품군, 패턴, 규격과 특징을 소개합니다." },
    { property: "og:title", content: "잉코 데코 제품소개 — INTCO DECOR" },
    { property: "og:description", content: "벽부터 바닥과 외부 공간까지 살펴보는 잉코 데코 실내외 마감재 컬렉션." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: IntcoProductsPage,
});