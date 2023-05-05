import "./detailSideBar.css";

function DetailSideBar({ userStatus }) {
  return (
    <>
      <div className="detail-side-bar-main">
        <p className="side-bar-menu-active">Profile</p>
        <p className="side-bar-menu-inactive">Notification</p>
        <p className="side-bar-menu-inactive">Billing</p>
        <p className="side-bar-menu-inactive">Data Export</p>
        <p className="side-bar-menu-inactive">Settings</p>
        {userStatus === "active" ? (
          <p className="sidebar-deactive-btn">Deactivate Account</p>
        ) : (
          <p className="sidebar-active-btn">Activate Account</p>
        )}
      </div>
    </>
  );
}

export default DetailSideBar;
