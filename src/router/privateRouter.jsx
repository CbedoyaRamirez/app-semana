import { Outlet, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const useAuth = () => {
  const token = (sessionStorage.getItem("token") ?? "").trim();
  console.log('token use');
  console.log(token);
  if(token === "") {
      console.log('return');
      console.log(token);
      return false;
  }
  return !!token;
};

function PrivateRoute() {
  const isAuth = useAuth();
  if (!isAuth) {
    Swal.fire({
      title: "Error",
      text: "No es posible ingresar al aplicativo",
      icon: "error",
    });
    return <Navigate to="/login" replace />
  }
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
