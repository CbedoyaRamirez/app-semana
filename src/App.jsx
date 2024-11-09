import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./router/privateRouter";
import PostList from "./components/PostList";
import ListUSer from "./pages/UserDashboard";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
