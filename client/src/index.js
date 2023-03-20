import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/reset.css";
import "./styles/main.scss";
import ContextProvider, { Context } from "./context/ContextProvider";
import Header from "./layout/Header";
import App from "./pages/App";
import Articles from "./pages/Articles";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";

function AppWrapper() {
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/myPage" element={user ? <MyPage /> : <NotFound />} />
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
