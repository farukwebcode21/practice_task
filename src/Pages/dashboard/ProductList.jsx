import React from "react";

const ProductList = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.ibb.co/thYTSYN/Screenshot-from-2024-05-28-16-50-14.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>Omega Seamaster</td>
            <td>Omega</td>
            <td>$5000</td>
            <td>
              The Omega Seamaster is a luxurious diving watch with impeccable
              design and functionality
            </td>
            <th>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th>
              <button className="btn btn-ghost btn-xs">Update</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
