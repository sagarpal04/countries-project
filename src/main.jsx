import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Hero.jsx";
import CountryDetails from "./CountryDetails.jsx"; // Import the CountryDetails component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: ":countryName", // Fix the path syntax and remove the comma
        element: <CountryDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
