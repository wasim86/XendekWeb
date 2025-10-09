import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 text-sm mb-4 hover:underline"
        >
          ← Go Back
        </button>
        <h1 className="text-3xl font-bold mb-2">Detail Page</h1>
        <p className="text-gray-700 mb-4">
          You opened detail for item ID: <span className="font-semibold">{id}</span>
        </p>
        <p className="text-gray-500">
          Replace this with your actual item or project details.
        </p>
      </div>
    </div>
  );
};

export default DetailPage;