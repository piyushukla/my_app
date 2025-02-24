import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "../src/pages/Login.tsx";
import Signup from "../src/pages/Signup.tsx";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Login /> }, // Home Page
  { path: "/signup", element: <Signup /> }, // Signup Page
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
