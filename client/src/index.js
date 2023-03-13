import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/main.scss";
import ContextProvider from "./context/ContextProvider";
import Header from "./layout/Header";
import App from "./pages/App";
import Articles from "./pages/Articles";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
