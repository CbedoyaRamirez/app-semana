import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createHashRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import PostList from "./components/PostList.jsx";
import App from "./App.jsx";
import PrivateRoute from "./router/privateRouter.jsx";
import ListUSer from "./pages/UserDashboard.jsx";
import React from "react";

const router = createHashRouter([
  {
    path: "/app-semana/login",
    element: <Login />,
  },
  {
    path: "/app-semana",
    element: <PrivateRoute />,
    children: [
      {
        path: "/app-semana/posts",
        element: <PostList />,
      },
      {
        path: "/app-semana/listuser",
        element: <ListUSer />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/app-semana/login" replace />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);
