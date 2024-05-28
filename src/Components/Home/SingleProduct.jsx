import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleProduct = ({ watch }) => {
  const { id, title, brand, price, image_url, description } = watch;
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
              <div className="badge badge-secondary">{brand.slice(0, 8)}</div>
            </h2>
            <p>{description.slice(0, 30)}</p>
            <div className="card-actions justify-between">
              <Link
                to={`/product/${id}`}
                className="badge badge-primary cursor-pointer px-5 py-3 hover:badge-success"
              >
                See Details
              </Link>
              <div className="badge badge-outline px-3 py-3">
                {brand.slice(0, 8)}
              </div>
              <div className="badge badge-outline px-5 py-3">$ {price}</div>
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
