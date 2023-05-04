import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ isHome }) {
  return (
    <div className="header-main">
      <div className={`menu ${!isHome ? "margin-11" : ""}`}>
        <p>Clients</p>
        <p>Orders</p>
        <p>Messages</p>
        <p className={isHome ? "active" : ""}>Users</p>
        <p>Settings</p>
      </div>
      <div className="account">
        <AccountCircleIcon className="account-icon" />
      </div>
    </div>
  );
}

export default Header;
