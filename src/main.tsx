import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeRegistry from "./components/providers/ThemeRegistry";
import "./app/globals.css";

import Home from "./app/page";
import ShopStockManagerLanding from "./app/shopstockmanager/page";
import DeleteAccount from "./app/shopstockmanager/delete-account/page";
import PrivacyPolicy from "./app/shopstockmanager/privacy-policy/page";
import TermsAndConditions from "./app/shopstockmanager/terms/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeRegistry>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopstockmanager" element={<ShopStockManagerLanding />} />
          <Route path="/shopstockmanager/delete-account" element={<DeleteAccount />} />
          <Route path="/shopstockmanager/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shopstockmanager/terms" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </ThemeRegistry>
  </React.StrictMode>
);
