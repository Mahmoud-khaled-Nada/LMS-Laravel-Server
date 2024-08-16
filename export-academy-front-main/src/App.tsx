import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router";
import { store } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const AppProvider = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes} /> {/*This is your render components  */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </>
  );
};

export default AppProvider;
