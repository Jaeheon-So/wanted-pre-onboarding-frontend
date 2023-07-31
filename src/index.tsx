import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyles from "./global/globalStyle";
import { LoginProvider } from "./contexts/LoginContext";
// import { TodoProvider } from "./contexts/TodoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <LoginProvider>
    <GlobalStyles />
    <RouterProvider router={router} />
  </LoginProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
