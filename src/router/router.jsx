import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import DashboardLayout from "../Layout/DashboardLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ProductList from "../Pages/dashboard/ProductList";
import AddProduct from "../Pages/dashboard/AddProduct";
import ProductsDetails from "../Pages/ProductsDetails";
import EditProduct from "../Pages/dashboard/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/watch"),
      },
      {
        path: "product",
        element: <Products />,
        loader: () => fetch("http://localhost:3000/watch"),
      },
      {
        path: "product/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/watch/${params.id}`),
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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "edit-product/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/watch/${params.id}`),
      },
    ],
  },
]);
export default router;
