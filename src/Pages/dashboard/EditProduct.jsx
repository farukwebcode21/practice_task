import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    price: "",
    description: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/watch/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title,
          brand: data.brand,
          price: data.price,
          description: data.description,
          image_url: data.image_url,
        });
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/watch/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/dashboard/product-list");
      })
      .catch((error) => console.log("Error update data:", error));
  };
  if (loading) return <div>Loading....</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center">Add Product</h1>
      <div className="w-10/12 mx-auto">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
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
                value={formData.brand}
                onChange={handleChange}
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
                name="price"
                value={formData.price}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
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
                value={formData.image_url}
                onChange={handleChange}
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

export default EditProduct;
