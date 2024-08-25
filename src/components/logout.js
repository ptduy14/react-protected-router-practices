import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  logout();

  useEffect(() => {
    if (auth.isAuthenticate) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return <div>waiting...</div>;
}
