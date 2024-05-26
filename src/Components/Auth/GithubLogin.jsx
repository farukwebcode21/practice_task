import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const GithubLogin = () => {
  const { githubLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleGithubSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await githubLogin();
      alert("Login Successfully");
      navigate("/");
    } catch (error) {
      setError("Failed to sign in with Github, Please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        onClick={handleGithubSignIn}
        className="btn px-5 py-3 bg-green-600 text-white w-full rounded-full"
        disabled={loading}
        aria-busy={loading}
        aria-disabled={loading}
      >
        {loading ? "Signing in..." : "Github Login"}
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default GithubLogin;
