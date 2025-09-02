import { useMemo, useState } from "react";
import "./Signup.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const errors = useMemo(() => {
    const result = {};
    if (!form.fullName.trim()) result.fullName = "Full name is required";

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!phoneDigits) result.phone = "Phone number is required";
    else if (phoneDigits.length < 10)
      result.phone = "Phone number must be at least 10 digits";

    if (!form.email.trim()) result.email = "Email is required";
    else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email))
      result.email = "Enter a valid email address";

    if (!form.password) result.password = "Password is required";
    else if (form.password.length < 8)
      result.password = "Password must be at least 8 characters";

    if (!form.isAgency) result.isAgency = "Please choose an option";
    return result;
  }, [form]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const handleSignup = () => {
    console.log("Signup");
    navigate("/account");
  };

  return (
    <div className="signup-page">
      <div className="device-frame">
        <div className="signup-content">
          <h1 className="signup-title">
            Create your
            <br />
            PopX account
          </h1>

          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label className="floating-label" htmlFor="fullName">
                Full Name<span className="req">*</span>
              </label>
              <input
                id="fullName"
                className={`text-input ${
                  touched.fullName && errors.fullName ? "invalid" : ""
                }`}
                type="text"
                placeholder="Anurag Mishra"
                value={form.fullName}
                onChange={(e) => {
                  const onlyLetters = e.target.value.replace(
                    /[^a-zA-Z\s]/g,
                    ""
                  );
                  update("fullName", onlyLetters);
                }}
                onKeyDown={(e) => {
                  if (/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                  }
                }}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                aria-invalid={touched.fullName && !!errors.fullName}
              />
              {touched.fullName && errors.fullName && (
                <div className="error-text">{errors.fullName}</div>
              )}
            </div>

            <div className="field">
              <label className="floating-label" htmlFor="phone">
                Phone number<span className="req">*</span>
              </label>
              <input
                id="phone"
                className={`text-input ${
                  touched.phone && errors.phone ? "invalid" : ""
                }`}
                type="tel"
                placeholder="9876543201"
                value={form.phone}
                onChange={(e) => {
                  let v = e.target.value.replace(/[^0-9+]/g, "");
                  if (v.includes("+")) {
                    v = "+" + v.replace(/\+/g, "").replace(/[^0-9]/g, "");
                  }
                  update("phone", v);
                }}
                onKeyDown={(e) => {
                  const allowed = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    "Home",
                    "End",
                  ];
                  if (allowed.includes(e.key)) return;
                  if (e.key === "+") {
                    if (
                      form.phone.includes("+") ||
                      e.currentTarget.selectionStart !== 0
                    ) {
                      e.preventDefault();
                    }
                    return;
                  }
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                inputMode="tel"
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                aria-invalid={touched.phone && !!errors.phone}
              />
              {touched.phone && errors.phone && (
                <div className="error-text">{errors.phone}</div>
              )}
            </div>

            <div className="field">
              <label className="floating-label" htmlFor="email">
                Email address<span className="req">*</span>
              </label>
              <input
                id="email"
                className={`text-input ${
                  touched.email && errors.email ? "invalid" : ""
                }`}
                type="email"
                placeholder="test@gmail.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                aria-invalid={touched.email && !!errors.email}
              />
              {touched.email && errors.email && (
                <div className="error-text">{errors.email}</div>
              )}
            </div>

            <div className="field">
              <label className="floating-label" htmlFor="password">
                Password<span className="req">*</span>
              </label>
              <div className="password-field">
                <input
                  id="password"
                  className={`text-input ${
                    touched.password && errors.password ? "invalid" : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Test@123"
                  value={form.password}
                  onChange={(e) => update("password", e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  aria-invalid={touched.password && !!errors.password}
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
              {touched.password && errors.password && (
                <div className="error-text">{errors.password}</div>
              )}
            </div>

            <div className="field">
              <label className="floating-label" htmlFor="company">
                Company name
              </label>
              <input
                id="company"
                className="text-input"
                type="text"
                placeholder="Marry Doe"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>

            <div className="radio-group">
              <div className="radio-title">
                Are you an Agency?<span className="req">*</span>
              </div>
              <label className="radio">
                <input
                  type="radio"
                  name="agency"
                  checked={form.isAgency === "yes"}
                  onChange={() => update("isAgency", "yes")}
                />
                <span className="custom-radio" />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="agency"
                  checked={form.isAgency === "no"}
                  onChange={() => update("isAgency", "no")}
                />
                <span className="custom-radio" />
                <span className="radio-label">No</span>
              </label>
              {errors.isAgency && (
                <div className="error-text" style={{ marginTop: 6 }}>
                  {errors.isAgency}
                </div>
              )}
            </div>

            <div className="form-actions">
              <button
                className={`btn ${isValid ? "btn-primary" : "btn-disabled"}`}
                type="submit"
                disabled={!isValid}
                onClick={handleSignup}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
