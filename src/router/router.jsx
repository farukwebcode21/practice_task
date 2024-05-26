import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
export default router;
