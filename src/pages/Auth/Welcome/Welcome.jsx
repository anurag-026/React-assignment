import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="device-frame">
        <div className="welcome-top">
          <div className="dots">
            <span className="dot" style={{ top: "28px", left: "70px" }}>1</span>
            <span className="dot" style={{ top: "72px", left: "88px" }}>2</span>
            <span className="dot" style={{ top: "108px", left: "98px" }}>3</span>
            <span className="dot" style={{ top: "140px", left: "130px" }}>4</span>
          </div>
        </div>

        <div className="welcome-bottom">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <div className="welcome-actions">
            <Link className="btn btn-primary" to="/signup">Create Account</Link>
            <Link className="btn btn-secondary" to="/login">Already Registered? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
