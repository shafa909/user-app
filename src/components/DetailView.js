import Header from "./Header";
import './detailView.css'
import { Typography } from "@mui/material";
import DetailSideBar from "./DetailSideBar";
import UserInfo from "./UserInfo";

function DetailView() {
  return (
    < div className="detail-view-main">
      <Header isHome={false} />

      <Typography className="user-info-title" variant="h5" align="left">User Info</Typography> 

      <div className="details-main">
            <DetailSideBar />     
            <UserInfo /> 
      </div>
    </div>
  );
}

export default DetailView;
