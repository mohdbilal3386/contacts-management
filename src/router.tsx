import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ContactPage from "./pages/ContactPage";
import MapsAndCharts from "./pages/MapsAndCharts";
import ContactFormPage from "./pages/ContactFormPage";
import ViewContactPage from "./pages/ViewContactPage";
import store from "./store/store";
import { viewContact } from "./store/reducers/contactSlice";
import Error404Page from "./pages/Error404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <ContactPage />,
      },
      {
        path: "create-contact",
        element: <ContactFormPage />,
      },
      {
        path: "edit-contact/:id",
        element: <ContactFormPage />,
        loader: async ({ params }) => {
          const dispatch = store.dispatch;
          params.id && dispatch(viewContact(+params.id));
          return null;
        },
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
