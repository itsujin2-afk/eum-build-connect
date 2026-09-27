import { useEffect, useState } from "react";

export function CategoryNav({ items }: { items: [string, string][] }) {
  const [active, setActive] = useState(items[0]?.[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    for (const [id] of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-12 z-40 border-b border-border bg-background sm:top-14" aria-label="제품 카테고리">
      <div className="locale-category-nav mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-3 py-3 sm:gap-2 sm:px-10">
        {items.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
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
