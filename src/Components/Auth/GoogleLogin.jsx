import React from "react";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await googleLogin();
      alert("Login Successfully");
    } catch (error) {
      setError("Failed to sign in with google . Please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn bg-orange-700 rounded-full px-5 w-full"
        disabled={loading}
        aria-busy={loading}
        aria-disabled={loading}
      >
        {loading ? "Signing in..." : "Google Login"}
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default GoogleLogin;
