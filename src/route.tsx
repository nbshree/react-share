import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import UseTransition from "./page/UseTransition";
import UseTransition2 from "./page/UseTransition2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/useTransition1",
        element: <UseTransition />,
      },
      {
        path: "/useTransition2",
        element: <UseTransition2 />,
      },
    ],
  },
]);

export default router;
