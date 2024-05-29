import React from "react";
import Banner from "../Components/Home/Banner";
import ProductCard from "../Components/Home/ProductCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const watchs = useLoaderData();

  return (
    <div>
      <Banner />

      <ProductCard watchs={watchs} />
    </div>
  );
};

export default Home;
