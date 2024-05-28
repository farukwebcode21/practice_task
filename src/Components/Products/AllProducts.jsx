import React from "react";
import SingleProduct from "../Home/SingleProduct";
import PropTypes from "prop-types";

const AllProducts = ({ watchs }) => {
  return (
    <div className="justify-center py-3">
      <h1 className="text-center uppercase text-3xl mt-10 mb-7 font-bold underline">
        Popular Product
      </h1>
      <div className="grid grid-cols-3 justify-center my-4 space-x-4">
        {watchs.map((watch) => (
          <SingleProduct key={watch.id} watch={watch} />
        ))}
      </div>
    </div>
  );
};
AllProducts.propTypes = {
  watchs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AllProducts;
