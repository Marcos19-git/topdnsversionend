import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";
import AssinePage from "./Pages/AssinePage/index.tsx";
import Host from "./Pages/Hosting/index.tsx";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assine" element={<AssinePage />} />
        <Route path="/hospedagem" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
