import { createFileRoute } from "@tanstack/react-router";
import { ForestHouseProductsPage } from "@/components/forest-house-products-page";

export const Route = createFileRoute("/brands/forest-house-products")({
  head: () => ({ meta: [
    { title: "이센메이쥐 제품소개 — 신3중 실목마루 FZ70 시리즈" },
    { name: "description", content: "이센메이쥐가 직접 생산하는 지열 대응 신3중 실목마루 FZ70 시리즈 10가지 색상을 실제 시공 사진으로 소개합니다." },
    { property: "og:title", content: "이센메이쥐 제품소개 — 신3중 실목마루 FZ70" },
    { property: "og:description", content: "3중 실목 기재, 지열 난방 대응, 10가지 색상의 실목마루 컬렉션" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ForestHouseProductsPage,
});
