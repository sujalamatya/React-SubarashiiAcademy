import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { About } from "./pages/About.jsx";
import Location from "./pages/Location.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./pages/Services.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
