import React from "react";
import PropTypes from "prop-types";

const SingleProduct = ({ watch }) => {
  const { title, brand, price, image_url, description } = watch;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              <div className="badge badge-secondary">{brand}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{brand}</div>
              <div className="badge badge-outline">$ {price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  watch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProduct;
