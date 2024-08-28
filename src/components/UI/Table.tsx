import React from "react";

const Table: React.FC = () => {
  const contacts = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main St, Anytown, USA",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+0987654321",
      address: "456 Oak St, Metropolis, USA",
    },
  ];
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact List</h2>
      <div className="overflow-auto">
        <table className=" table-auto min-w-full divide-y divide-gray-700">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
