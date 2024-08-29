import React from "react";
import Table from "../components/UI/Table";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white bg-gray-800 p-6 h-full rounded-lg flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Contact List</h3>
        <button
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate("/create-contact")}
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Contact
        </button>
      </div>
      <Table />
    </div>
  );
};

export default ContactPage;
