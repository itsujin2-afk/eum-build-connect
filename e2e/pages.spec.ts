import { expect, test, type Page } from "@playwright/test";

// 사이트의 모든 공개 페이지. 라우트를 추가하면 여기에도 추가한다.
const ROUTES = [
  "/",
  "/company",
  "/contact",
  "/brands/huanqiu-stone",
  "/brands/huanqiu-stone-products",
  "/brands/intco-decor",
  "/brands/intco-decor-products",
  "/brands/jincheng-glass",
  "/brands/lion-king",
  "/brands/lion-king-products",
  "/brands/lion-king-catalog",
  "/brands/forest-house",
  "/brands/forest-house-products",
  "/brands/shuofeng",
  "/brands/shuofeng-products",
];

async function scrollThrough(page: Page) {
  // lazy 이미지를 모두 로드시키기 위해 끝까지 스크롤
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
}

for (const route of ROUTES) {
  test.describe(route, () => {
    test("정상 응답, 콘솔 에러·깨진 리소스 없음", async ({ page }) => {
      const consoleErrors: string[] = [];
      const failed: string[] = [];
      page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
      page.on("pageerror", (e) => consoleErrors.push(e.message));
      page.on("response", (r) => {
        if (r.status() >= 400) failed.push(`${r.status()} ${new URL(r.url()).pathname}`);
      });

      const res = await page.goto(route);
      expect(res?.status(), "HTTP 상태").toBeLessThan(400);
      await expect(page.locator("main, body").first()).toBeVisible();
      await scrollThrough(page);

      expect(failed, "4xx/5xx 응답 리소스").toEqual([]);
      expect(consoleErrors, "콘솔 에러").toEqual([]);
    });

    test("모든 이미지가 실제로 렌더링됨", async ({ page }) => {
      await page.goto(route);
      await scrollThrough(page);
      const broken = await page.$$eval("img", (imgs) =>
        imgs
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.getAttribute("src") ?? "(no src)"),
      );
      expect(broken, "깨진 이미지").toEqual([]);

      const missingAlt = await page.$$eval("img", (imgs) =>
        imgs.filter((img) => !img.hasAttribute("alt")).map((img) => img.getAttribute("src")),
      );
      expect(missingAlt, "alt 속성 없는 이미지").toEqual([]);
    });

    test("가로 스크롤 없음 + 페이지 제목 존재", async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState("networkidle");
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, "가로 넘침(px)").toBeLessThanOrEqual(1);
      expect((await page.title()).trim()).not.toBe("");
    });
  });
}

test("내부 링크가 모두 살아 있음", async ({ page, request }) => {
  const hrefs = new Set<string>();
  for (const route of ROUTES) {
    await page.goto(route);
    for (const href of await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")!))) {
      if (href.startsWith("/") && !href.startsWith("//")) hrefs.add(href.split("#")[0] || "/");
    }
  }
  const dead: string[] = [];
  for (const href of hrefs) {
    const r = await request.get(href);
    if (r.status() >= 400) dead.push(`${r.status()} ${href}`);
  }
  expect(dead, "죽은 내부 링크").toEqual([]);
});
