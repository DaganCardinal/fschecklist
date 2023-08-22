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
import { Home } from "./routes/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { About } from "./routes/About";
import { Editor } from "./routes/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/b737-checklist",
        element: <B73XNG />,
      },
      {
        path: "/c208-checklist",
        element: <C208B />,
      },
      {
        path: "/a320-checklist",
        element: <A320 />,
      },
      {
        path: "/c172-checklist",
        element: <C172 />,
      },
      {
        path: "/crjx-checklist",
        element: <CRJX />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/editor",
        element: <Editor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
