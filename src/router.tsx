import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ContactPage from "./pages/ContactPage";
import MapsAndCharts from "./pages/MapsAndCharts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ContactPage />,
      },
      {
        path: "maps-charts",
        element: <MapsAndCharts />,
      },
    ],
  },
]);

export default router;
