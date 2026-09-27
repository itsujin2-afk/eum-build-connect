import { useEffect, useState } from "react";

export function CategoryNav({ items }: { items: [string, string][] }) {
  const [active, setActive] = useState(items[0]?.[0]);

  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.innerWidth >= 640 ? 129 : 113;
      let current = items[0]?.[0];

      for (const [id] of items) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) current = id;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = items.at(-1)?.[0];
      }
      if (current) setActive(current);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav className="sticky top-12 z-40 border-b border-border bg-background sm:top-14" aria-label="제품 카테고리">
      <div className="locale-category-nav mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-3 py-3 sm:gap-2 sm:px-10">
        {items.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            aria-current={active === id ? "true" : undefined}
            className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[10px] font-bold transition-colors sm:px-4 sm:text-xs ${
              active === id
                ? "bg-foreground text-background"
                : "bg-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </a>
        ))}
        <span aria-hidden="true" className="w-1 shrink-0 sm:w-2" />
      </div>
    </nav>
  );
}
