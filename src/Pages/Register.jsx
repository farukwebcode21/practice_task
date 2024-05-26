import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = () => {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full mx-auto">
        <div className="text-center w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className=" card shadow-2xl bg-base-100 w-1/3">
          <form onSubmit={handleSubmit} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
              <p className="text-center">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-orange-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="w-full ">
            <div className="flex flex-col gap-2 mx-7 mb-7">
              {/* <GoogleLogin /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
