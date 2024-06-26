import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/dashboard/product-list">Product List</Link>
            </li>
            <li>
              <Link to="/dashboard/add-product">Add Product</Link>
            </li>
          </div>
          <div className="bg-red-600  rounded-full text-center hover:bg-black">
            <button onClick={handleLogout} className=" py-3 text-base">
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
