import { Outlet } from "react-router-dom";
import Sidebar from "../UI/Sidebar";
import { useAppSelector } from "../../hooks/reduxHook";

const AppLayout = () => {
  const { isOpen } = useAppSelector((state) => state.sidebar);

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar />
      <main
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-20"
        } p-4 transition-all duration-300`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
