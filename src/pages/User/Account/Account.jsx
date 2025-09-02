import "./Account.css";
import { Person, CameraAlt } from "@mui/icons-material";

const Account = () => {
  return (
    <div className="account-page">
      <div className="device-frame">
        <div className="account-content">
          <h1 className="account-title">Account Settings</h1>
          
          <div className="profile-section">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <div className="avatar-placeholder">
                  <Person sx={{ fontSize: 60, color: "#9ca3af" }} />
                </div>
                <button className="camera-button" aria-label="Change profile picture">
                  <CameraAlt sx={{ fontSize: 16, color: "white" }} />
                </button>
              </div>
            </div>
            
            <div className="user-info">
              <h2 className="user-name">Marry Doe</h2>
              <p className="user-email">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <div className="description-section">
            <p className="description-text">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
            <div className="separator-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
