import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { auth } = useAuth();

  return auth.isAuthenticate ? <Outlet /> : <Navigate to="/login" replace={true}/>
}
