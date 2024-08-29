import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
