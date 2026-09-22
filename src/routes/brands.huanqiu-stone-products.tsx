import { createFileRoute } from "@tanstack/react-router";
import { HuanqiuProductsPage } from "@/components/huanqiu-products-page";

export const Route = createFileRoute("/brands/huanqiu-stone-products")({
  head: () => ({ meta: [
    { title: "환구석재 제품소개 — 이음앤빌드" },
    { name: "description", content: "UMGG 글로벌 스톤의 화이트, 트래버틴, 베이지, 그레이, 골드 계열 주요 천연석 26종을 소개합니다." },
    { property: "og:title", content: "환구석재 제품소개 — UMGG 주요 천연석" },
    { property: "og:description", content: "산지와 표면 특성, 물성, 적용 범위로 살펴보는 글로벌 스톤 주요 석종 컬렉션." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HuanqiuProductsPage,
});