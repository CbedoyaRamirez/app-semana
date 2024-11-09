import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import PostList from "./components/PostList.jsx";
import ListUSer from "./pages/UserDashboard.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <PostList />,
  },
  {
    path: "/listUser",
    element: <ListUSer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
