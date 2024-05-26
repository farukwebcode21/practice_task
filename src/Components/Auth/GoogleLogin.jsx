import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, googleProvider } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleLogin = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Login Successfull!");
    } catch (error) {
      toast.error("Login failed. Please try again");
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-orange-700 rounded-full px-5 w-full"
      >
        GoogleLogin
      </button>
    </div>
  );
};

export default GoogleLogin;
