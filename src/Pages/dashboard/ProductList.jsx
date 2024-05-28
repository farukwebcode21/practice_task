import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProductList = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/watch")
      .then((res) => res.json())
      .then((data) => setWatches(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  console.log(watches);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {watches.map((watch) => (
            <tr key={watch.id}>
              <th>{watch.id}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={watch.image_url} alt={watch.title} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{watch.title}</td>
              <td>{watch.brand}</td>
              <td>${watch.price}</td>
              <td>
                {watch.description.length > 50
                  ? `${watch.description.substring(0, 50)}...`
                  : watch.description}
              </td>
              <th>
                <button className="btn btn-xs btn-outline btn-error">
                  Delete
                </button>
              </th>
              <th>
                <button className="btn btn-xs btn-outline btn-success">
                  Update
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
