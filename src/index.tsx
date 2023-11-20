import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import UsersProvider from "./context/UserContext";
import GlobalStyle from "./globalStyles";
import { router } from "./routes";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <UsersProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </UsersProvider>
  </QueryClientProvider>
);
