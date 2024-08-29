import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ContactPage from "./pages/ContactPage";
import MapsAndCharts from "./pages/MapsAndCharts";
import CreateContactPage from "./pages/CreateContactPage";
import ViewContactPage from "./pages/ViewContactPage";
import store from "./store/store";
import { viewContact } from "./store/reducers/contactSlice";

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
        path: "create-contact",
        element: <CreateContactPage />,
      },
      {
        path: "view-contact/:id",
        element: <ViewContactPage />,
        loader: async ({ params }) => {
          const dispatch = store.dispatch;
          params.id && dispatch(viewContact(+params.id));
          return null;
        },
      },
      {
        path: "maps-charts",
        element: <MapsAndCharts />,
      },
    ],
  },
]);

export default router;
