import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const RING = 2 * Math.PI * 22;

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 400);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="맨 위로 이동"
      tabIndex={visible ? 0 : -1}
      data-visible={visible}
      className="scroll-top fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8"
    >
      <span className="scroll-top-inner">
        <svg className="scroll-top-ring" viewBox="0 0 48 48" aria-hidden>
          <circle cx="24" cy="24" r="22" className="scroll-top-track" />
          <circle
            cx="24"
            cy="24"
            r="22"
            className="scroll-top-fill"
            strokeDasharray={RING}
            strokeDashoffset={RING * (1 - progress)}
          />
        </svg>
        <ArrowUp size={14} strokeWidth={1.8} className="scroll-top-arrow" />
        <span className="scroll-top-label">TOP</span>
      </span>
    </button>
  );
}
