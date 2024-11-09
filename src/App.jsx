import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import ListUSer from "./pages/UserDashboard";
import PrivateRoute from "./router/privateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/posts" element={<PostList />}></Route>
          <Route path="/listuser" element={<ListUSer />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
