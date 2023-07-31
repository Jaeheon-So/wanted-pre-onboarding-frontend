import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = "원티드 8월 인턴십 사전과제";
    const pages = [
      { id: 0, path: "/", title: "홈" },
      { id: 1, path: "/signup", title: "회원가입" },
      { id: 2, path: "/signin", title: "로그인" },
      { id: 3, path: "/todo", title: "TodoList" },
    ];
    const subTitle = pages.find((p) => p.path === pathname);

    document.title = title + " - " + subTitle?.title; // title 적용
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
