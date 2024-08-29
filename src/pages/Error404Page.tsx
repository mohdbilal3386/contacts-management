import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Error404Page: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <button
        className="bg-gray-700 hover:bg-gray-600 mb-2 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <NavLink
        to="/"
        className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

export default Error404Page;
