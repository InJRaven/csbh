import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { PanelTopClose } from "lucide-react";
import clsx from "clsx";
import SectionContent from "./SectionContent";

function App() {
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const s = document.documentElement;
      const pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;

      setProgress(pct);
      setShowBackTop(s.scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 h-0.75 z-200 bg-linear-to-r from-(--blue) to-(--purple) rounded-r-xs transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
      <main className="min-h-screen max-w-228 mx-auto sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-5">
        <SectionContent />
      </main>
      <button
        className={clsx(
          "fixed bottom-7 right-7 w-11 h-11 z-100 bg-[rgba(91,156,246,0.2)] border border-[rgba(91,156,246,0.4)] text-(--blue) rounded-full flex items-center justify-center text-[1.1rem] cursor-pointer backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 hover:-translate-y-0.75 hover:bg-[rgba(91,156,246,0.3)]",
          showBackTop && "opacity-100 pointer-events-auto",
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <PanelTopClose />
      </button>
    </Fragment>
  );
}

export default App;
