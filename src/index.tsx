import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { router } from "./routes";
import { QueryClientProvider, QueryClient } from "react-query";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
