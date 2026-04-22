import { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import { CircleArrowUp } from "lucide-react";
import clsx from "clsx";
import SectionContent from "./SectionContent";

function App() {
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const scrollRef = useRef<HTMLElement | null>(null);

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 500;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(pct, 100));
      setShowBackTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 h-0.75 z-200 bg-linear-to-r from-(--blue) to-(--purple) rounded-r-xs transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>

      <main
        ref={scrollRef}
        className="min-h-screen max-w-228 mx-auto sm:px-6 lg:px-8 sm:py-6 lg:py-8 flex flex-col items-center justify-center gap-5 "
      >
        <SectionContent />
      </main>

      <button
        className={clsx(
          "fixed bottom-7 right-7 w-11 h-11 z-9999 bg-[rgba(91,156,246,0.2)] border border-[rgba(91,156,246,0.4)] text-(--blue) rounded-full flex items-center justify-center text-[1.1rem] cursor-pointer backdrop-blur-sm opacity-0 pointer-events-none transition-all hover:-translate-y-0.75 hover:bg-[rgba(91,156,246,0.3)] duration-300",
          showBackTop && "opacity-100 pointer-events-auto!",
        )}
        onClick={scrollToTop}
        type="button"
      >
        <CircleArrowUp />
      </button>

      <footer className="border-t border-t-zinc-800 py-8 px-8 flex flex-col items-center justify-center gap-2">
        <span className="font-bold text-2xl text-(--blue)">
          ✦ Việt Hà Premium Shop
        </span>
        <p className="text-sm text-zinc-500">
          Chính sách bảo hành & hoàn tiền — Phiên bản 2026
        </p>
        <p className="text-sm text-zinc-500">
          Mọi quyền được bảo lưu. Cam kết phục vụ tận tâm, minh bạch.
        </p>
      </footer>
    </Fragment>
  );
}

export default App;
