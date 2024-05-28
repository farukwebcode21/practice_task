import React from "react";

const AddProduct = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center">Add Product</h1>
      <div className="w-10/12 mx-auto">
        <div className=" ">
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                type="text"
                placeholder="Id"
                name="id"
                className=" input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className=" input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                className=" input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Price"
                className=" input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className=" input w-full input-bordered"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
