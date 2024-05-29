import React from "react";

const AddProduct = () => {
  const handleAddProduct = async (event) => {
    event.preventDefault();

    // Retrieve form data using FormData
    const formData = new FormData(event.target);
    const productData = {
      id: formData.get("id"),
      title: formData.get("title"),
      brand: formData.get("brand"),
      price: parseInt(formData.get("number"), 10),
      description: formData.get("description"),
      image_url: formData.get("image_url"),
    };
    // You can now use productData to send to your backend or perform further actions
    try {
      const response = await fetch("http://localhost:3000/watch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("Netwarok response wat not ok");
      }
      const result = await response.json();
      alert("SuccessFull Added data", result);
      // reset successful submission
      event.target.reset();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center">Add Product</h1>
      <div className="w-10/12 mx-auto">
        <div className="">
          <form onSubmit={handleAddProduct}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID</span>
              </label>
              <input
                type="text"
                placeholder="Id"
                name="id"
                className="input w-full input-bordered"
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
                className="input w-full input-bordered"
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
                className="input w-full input-bordered"
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
                className="input w-full input-bordered"
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
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                name="image_url"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
