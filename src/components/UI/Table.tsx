import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { deleteContact } from "../../store/reducers/contactSlice";

const Table: React.FC = () => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector((state) => state.contacts);

  return (
    <div className="overflow-auto h-full">
      {contacts.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <h3 className="text-xl font-semibold mb-4">
            No Contact Found. Please add a contact using the Create Contact
            Button.
          </h3>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {contact.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {contact.address}
                  </td>
                  <td className="px-6 py-4 flex items-center whitespace-nowrap text-sm">
                    <NavLink
                      to={`/view-contact/${contact.id}`}
                      className="text-green-500 hover:text-green-700"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </NavLink>
                    <NavLink
                      to={`/edit-contact/${contact.id}`}
                      className="text-blue-500 hover:text-blue-700 ml-2"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </NavLink>
                    <button
                      onClick={() =>
                        contact.id && dispatch(deleteContact(+contact.id))
                      }
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
