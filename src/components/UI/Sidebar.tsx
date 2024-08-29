import React from "react";
import {
  Bars3Icon,
  MapIcon,
  GlobeAltIcon,
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { toggleSidebar } from "../../store/reducers/sidebarReducer";

const Sidebar: React.FC = () => {
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:bg-gray-800 lg:text-white ${
          isOpen ? "w-64" : "3.75rem"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div
            className={`flex items-center ${
              isOpen ? "justify-between" : "justify-center"
            } px-3`}
          >
            <h3
              className={`text-2xl font-bold transition-opacity ${
                isOpen ? "opacity-100" : " lg:hidden"
              }`}
            >
              Contact Managment
            </h3>
            <div
              className={` text-gray-300 p-2 hover:bg-gray-700 rounded-md cursor-pointer 
              `}
              onClick={() => dispatch(toggleSidebar())}
            >
              {isOpen ? (
                <ArrowLeftIcon className="h-6 w-6" />
              ) : (
                <ArrowRightIcon className="h-6 w-6" />
              )}
            </div>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${
                  isActive && "active"
                } flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md`
              }
            >
              <GlobeAltIcon className="h-6 w-6 mr-3" />
              {isOpen && "Contact"}
            </NavLink>
            <NavLink
              to="/maps-charts"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <MapIcon className="h-6 w-6 mr-3" />
              {isOpen && "Maps and Charts"}
            </NavLink>
          </nav>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold"> Contact Managment</h1>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="p-2 text-gray-300 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            <NavLink
              to="/"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <GlobeAltIcon className="h-6 w-6 mr-3" />
              Contact
            </NavLink>
            <NavLink
              to="/maps-charts"
              className="flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md"
            >
              <MapIcon className="h-6 w-6 mr-3" />
              Maps and Charts
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="lg:hidden p-4 flex  flex-grow justify-between items-center overflow-y-auto">
        <h1
          className={`text-2xl font-bold transition-opacity ${
            isOpen ? "opacity-100" : " lg:hidden"
          }`}
        >
          Contact Managment
        </h1>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className=" text-gray-800 hover:text-blue-500"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 sm md: hidden" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
