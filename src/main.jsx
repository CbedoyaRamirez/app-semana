import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createHashRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import PostList from "./components/PostList.jsx";
import ListUSer from "./pages/UserDashboard.jsx";
import Post from "./components/Post.jsx";
import UserList from "./components/UserList.jsx";
import App from "./App.jsx";

/*
const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app-semana/posts",
    element: <PostList />,
  },
  {
    path: "/listUser",
    element: <ListUSer />,
  },
]);
*/

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);
