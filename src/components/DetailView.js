import Header from "./Header";
import { Typography } from "@mui/material";
import DetailSideBar from "./DetailSideBar";
import UserInfo from "./UserInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";
import "./detailView.css";

function DetailView() {
  const params = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data.find((user) => user.id == params.userId));
  }, []);

  return (
    <div className="detail-view-main">
      <Header isHome={false} />
      <Typography className="user-info-title" variant="h5" align="left">
        User Info
      </Typography>
      <div className="details-main">
        <DetailSideBar userStatus={userData.status} />
        <UserInfo userData={userData} />
      </div>
    </div>
  );
}

export default DetailView;
