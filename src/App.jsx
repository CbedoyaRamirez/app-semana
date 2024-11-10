import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./router/privateRouter";
import PostList from "./components/PostList";
import ListUSer from "./pages/UserDashboard";
import Header from "./components/Header";

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
        element: (
          <WithNavbar>
            <PostList />
          </WithNavbar>
        ),
      },
      {
        path: "/app-semana/listuser",
        element: (
          <WithNavbar>
            <ListUSer />,
          </WithNavbar>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/app-semana/login" replace />,
  },
]);

function WithNavbar({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
