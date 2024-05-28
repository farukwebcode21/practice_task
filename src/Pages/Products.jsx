import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProducts from "../Components/Products/AllProducts";

const Products = () => {
  const watchs = useLoaderData();

  return (
    <div>
      <AllProducts watchs={watchs} />
    </div>
  );
};

export default Products;
