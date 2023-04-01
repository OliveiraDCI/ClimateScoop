import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/main.scss";
import ContextProvider, { Context } from "./context/ContextProvider";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function AppWrapper() {
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/myPage" element={user ? <MyPage /> : <NotFound />} />
        <Route path="/article/:id" element={<ArticlePage />} />;
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

ReactDOM.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppWrapper />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>,
  document.getElementById("root")
);
