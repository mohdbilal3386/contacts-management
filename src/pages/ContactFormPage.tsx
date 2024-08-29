import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  addContact,
  updateContact,
  viewContact,
} from "../store/reducers/contactSlice";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  address: yup.string().required("Address is required"),
});

const ContactFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contactId = id ? parseInt(id) : -1;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selectedContact } = useAppSelector((state) => state.contacts);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedContact) {
      setValue("name", selectedContact.name);
      setValue("email", selectedContact.email);
      setValue("phone", selectedContact.phone);
      setValue("address", selectedContact.address);
    }
  }, [selectedContact, setValue]);

  const onSubmit = (data: any) => {
    if (contactId === -1) {
      const newCotact = {
        id: new Date().getTime(),
        ...data,
      };
      dispatch(addContact(newCotact));
    } else {
      dispatch(updateContact({ ...data, id: contactId }));
    }

    reset();
    dispatch(viewContact(null));
    navigate(-1);
  };

  return (
    <div className="text-white bg-gray-800 p-6 h-full rounded-lg flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">
          {contactId === -1 ? "Create Contact" : "Edit Contact"}
        </h3>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              reset();
              dispatch(viewContact(null));
              navigate("/");
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Cancel
          </button>
          <button
            form="contactForm"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
      <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              <ExclamationCircleIcon className="inline h-4 w-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              <ExclamationCircleIcon className="inline h-4 w-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-200"
          >
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">
              <ExclamationCircleIcon className="inline h-4 w-4 mr-1" />
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-200"
          >
            Address
          </label>
          <input
            id="address"
            {...register("address")}
            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">
              <ExclamationCircleIcon className="inline h-4 w-4 mr-1" />
              {errors.address.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactFormPage;
