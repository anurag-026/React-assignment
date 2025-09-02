import "./Login.css";
import { useState, useMemo } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdFocused, setIsPwdFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isValid = useMemo(() => {
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    const passwordOk = password.length >= 8;
    return emailOk && passwordOk;
  }, [email, password]);

  const handleLogin = () => {
    console.log("Login");
    navigate("/account");
  };

  return (
    <div className="login-page">
      <div className="device-frame">
        <div className="login-content">
          <h1 className="login-title">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label className="input-label">
              Email Address
              <input
                className="text-input"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="input-label">
              Password
              <div className="password-field">
                <input
                  className="text-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPwdFocused(true)}
                  onBlur={() => setIsPwdFocused(false)}
                />
                <button
                  type="button"
                  className="eye-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ fontSize: 18, color: "#6b7280" }} />
                  ) : (
                    <Visibility sx={{ fontSize: 18, color: "#6b7280" }} />
                  )}
                </button>
              </div>
              {(isPwdFocused || password.length > 0) && (
                <div
                  className={`helper-text ${
                    password.length >= 8 ? "valid" : "invalid"
                  }`}
                >
                  Password must be at least 8 characters
                </div>
              )}
            </label>

            <button
              className={`btn ${isValid ? "btn-primary" : "btn-disabled"}`}
              disabled={!isValid}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
