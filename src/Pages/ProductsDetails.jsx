import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {
  const watch = useLoaderData();
  const { title, image_url, price, brand, description } = watch;
  console.log(watch);
  return (
    <div className="flex justify-center py-10">
      <div className="card card-side bg-base-100 shadow-xl items-center">
        <figure>
          <img src={image_url} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2>{title}</h2>
          <h2>{brand}</h2>
          <h2>{description}</h2>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
