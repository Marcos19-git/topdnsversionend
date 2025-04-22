import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";
import Header from "./Pages/Header/index.tsx";

const Features = lazy(() => import("./Pages/Features/index.tsx"));
const HostingFeatures = lazy(() => import("./Pages/HostingFeatures/index.tsx"));
const Projects = lazy(() => import("./Pages/Projects/index.tsx"));
const SearchDomain = lazy(() => import("./Pages/SearchDomain/index.tsx"));
const Plans = lazy(() => import("./Pages/Plans/index.tsx"));
const Footer = lazy(() => import("./Pages/Footer/index.tsx"));

import "./Pages/Header/style.css";
import "./Pages/Features/style.css";
import "./Pages/HostingFeatures/style.css";
import "./Pages/Footer";
import "./Pages/SearchDomain/style.css";
import "./Pages/Projects/style.css";
import "./Pages/Plans/style.css";
import "./Pages/Header/style.css";

function App() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const showContent = () => {
      setShowRest(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      showContent();
    };

    window.addEventListener("scroll", handleScroll);

    const fallbackTimer = setTimeout(() => {
      showContent();
    }, 1000); // 1 segundos

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="main">
      <Header />
      <Features />
      <Suspense fallback={<div></div>}>
        {showRest && (
          <>
            <HostingFeatures />
            <Projects />
            <SearchDomain />
            <Plans />
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  );
}
export default App;
