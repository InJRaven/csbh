import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./views/App.tsx";

import { MathJaxContext } from "better-react-mathjax";

const config = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["$$", "$$"]],
  },
  options: {
    enableMenu: false,
    renderActions: {
      addMenu: [],
    },
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MathJaxContext config={config}>
      <App />
    </MathJaxContext>
  </StrictMode>,
);
