import './detailSideBar.css'

function DetailSideBar() {
  return (<>
     <div className="detail-side-bar-main">
      <p className='side-bar-menu-active'>Profile</p>
      <p className='side-bar-menu-inactive'>Notification</p>
      <p className='side-bar-menu-inactive' >Billing</p>
      <p className='side-bar-menu-inactive'>Data Export</p>
      <p className='side-bar-menu-inactive'>Settings</p>
      <p className='side-bar-menu-deactice'>Deactivate Account</p>
    </div>
  </>
   
  );
}

export default DetailSideBar;
