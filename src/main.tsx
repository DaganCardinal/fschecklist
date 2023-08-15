import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { B73XNG } from "./routes/B737NG";
import { C208B } from "./routes/C208B";
import { A320 } from "./routes/A320";
import { C172 } from "./routes/C172";
import { CRJX } from "./routes/CRJ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/737",
        element: <B73XNG />,
      },
      {
        path: "/208",
        element: <C208B />,
      },
      {
        path: "/a320",
        element: <A320 />,
      },
      {
        path: "/c172",
        element: <C172 />,
      },
      {
        path: "/crjx",
        element: <CRJX />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
