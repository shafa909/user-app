import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ isListView }) {
  return (
    <div className="header-main">
      <div className={`menu`}>
        <p className="menu-item">Clients</p>
        <p className="menu-item">Orders</p>
        <p className="menu-item">Messages</p>
        {isListView ? (
          <p className="active menu-item">Users</p>
        ) : (
          <Link to="/" style={{ textDecoration: "none", color: "#6f7179" }}>
            <p className="menu-item">Users</p>
          </Link>
        )}
        <p className="menu-item">Settings</p>
      </div>
      <MenuIcon className="mobile-menu" />
      <AccountCircleIcon className="account-icon" />
    </div>
  );
}

export default Header;
