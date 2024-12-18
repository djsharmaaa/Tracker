import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Replace with actual authentication logic
    if (email === "admin@ddk.com" && password === "admin123") {
      navigate("/admin");
    } else if (email === "driver@ddk.com" && password === "driver123") {
      navigate("/driver");
    } else if (email === "customer@ddk.com" && password === "customer123") {
      navigate("/customer");
    } else {
      setError("Invalid credentials");
      setPassword("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="left-side">
        <div className="logo-heading">
          <h2>Doordarshan</h2>
        </div>
        <img src="/images/DD2.png" alt="Logo" className="logo" />
      </div>

      {/* Right Side */}
      <div className="right-side">
        <div className="logo-heading-right">
          <h2>Login</h2>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="input-group ">
            <i className="bi bi-envelope input-icon"></i>
            <input
              className="ms-2"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Password Field */}
          <div className="input-group  my-5">
            <i className="bi bi-lock input-icon"></i>
            <input
              className="ms-2"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`bi password-toggle ${
                showPassword ? "bi-eye-slash" : "bi-eye"
              }`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          {/* Remember Me and Forgot Password */}
          <div className="options ">
            <label>
              <input
                className="ms-2 "
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{" "}
              Remember Me
            </label>

            <a href="/forgot-password" className="forgot-password my-3">
              Forgot Password?
            </a>
          </div>
          <button className="Login-button mx-auto my-5">Login</button>

          <button className="google-button mx-auto mt-5">
            <i className="bi bi-google "></i> Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
