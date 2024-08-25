import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    username: "emilys",
    password: "emilyspass",
  });
  const [error, setError] = useState(false);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: input.username,
        password: input.password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    if (!res.ok) {
      setError(true);
      return;
    }

    const user = await res.json();
    setAuth({ user, isAuthenticate: true });
  };

  useEffect(() => {
    if (auth.isAuthenticate) {
      console.log(auth);
      navigate("/");
    }
    console.log(auth);
  }, [auth, navigate]);

  const handleOnChangeInput = (value, type) => {
    setInput((prev) => ({ ...prev, [type]: value }));
    setError(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input
            style={{ marginBottom: "6px" }}
            placeholder="Enter username"
            value={input.username}
            onChange={(e) => handleOnChangeInput(e.target.value, "username")}
          />
        </div>

        <div>
          <input
            style={{ marginBottom: "6px" }}
            placeholder="Enter password"
            value={input.password}
            onChange={(e) => handleOnChangeInput(e.target.value, "password")}
          />
        </div>
        {error ? (
          <span style={{ display: "block", marginBottom: "6px", color: "red" }}>
            wrong username or password
          </span>
        ) : (
          ""
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
