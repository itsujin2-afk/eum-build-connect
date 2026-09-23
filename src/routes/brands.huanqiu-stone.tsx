import { createFileRoute } from "@tanstack/react-router";
import { HuanqiuStonePage } from "@/components/huanqiu-stone-page";

export const Route = createFileRoute("/brands/huanqiu-stone")({
  head: () => ({ meta: [
    { title: "환구석재 — 이음앤빌드" },
    { name: "description", content: "1986년 설립, 광산부터 설계·가공·커튼월 시공까지 제공하는 글로벌 장식용 석재 시스템 기업 환구석재." },
    { property: "og:title", content: "환구석재 — 글로벌 석재 시스템" },
    { property: "og:description", content: "200여 특허 기술과 3,500여 국내외 프로젝트, 6개 생산기지를 보유한 글로벌 스톤" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HuanqiuStonePage,
});