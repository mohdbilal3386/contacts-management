import React from "react";
import { useAppSelector } from "../hooks/reduxHook";
import { useNavigate } from "react-router-dom";

const ViewContactPage: React.FC = () => {
  const { selectedContact } = useAppSelector((state) => state.contacts);
  const navigate = useNavigate();
  if (!selectedContact) {
    return (
      <div className="text-white bg-gray-800 p-6 h-full rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">No Contact Selected</h3>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
        <p>Please select a contact to view details.</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-800 p-6 h-full rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Name
          </label>
          <p className="text-lg text-white">{selectedContact.name}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Email
          </label>
          <p className="text-lg text-white">{selectedContact.email}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Phone
          </label>
          <p className="text-lg text-white">{selectedContact.phone}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
          <label className="block text-sm font-semibold text-gray-300 mb-1">
            Address
          </label>
          <p className="text-lg text-white">{selectedContact.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewContactPage;
