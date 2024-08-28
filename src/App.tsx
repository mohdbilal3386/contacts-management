import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MapsAndCharts from "./pages/MapsAndCharts";
import AppLayout from "./components/layout/AppLayout";
import ContactPage from "./pages/ContactPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
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
          path: "/maps-charts",
          element: <MapsAndCharts />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
