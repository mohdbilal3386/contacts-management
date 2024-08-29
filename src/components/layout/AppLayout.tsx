import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "../UI/Sidebar";
import { useAppSelector } from "../../hooks/reduxHook";
import Loader from "../UI/Loader";

const AppLayout = () => {
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="lg:flex h-screen bg-gray-200">
      <Sidebar />
      <main
        className={`flex-1  ${
          isOpen ? "lg:ml-64" : "lg:ml-20"
        } p-4 transition-all duration-300 `}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
