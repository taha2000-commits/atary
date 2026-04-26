import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./services/routes/router";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TextPopupContextProvider } from "./context/TextPopupContext";
import { VideoPopupContextProvider } from "./context/VideoPopupContext";
import LoadingPage from "./pages/loading/LoadingPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <VideoPopupContextProvider>
        <TextPopupContextProvider>
          <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
          </Suspense>
        </TextPopupContextProvider>
      </VideoPopupContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
