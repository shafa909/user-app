import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header({ isHome }) {
  return (
    <div className="header-main">
      <div className={`menu`}>
        <p className="menu-item">Clients</p>
        <p className="menu-item">Orders</p>
        <p className="menu-item">Messages</p>
        <p className={isHome ? "active menu-item" : "menu-item"}>Users</p>
        <p className="menu-item">Settings</p>
      </div>
      <AccountCircleIcon className="account-icon" />
    </div>
  );
}

export default Header;
