import { Stack } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextLabel from "./TextLabel";
import EditIcon from "@mui/icons-material/Edit";
import "./userInfo.css";
import Map from "./Map";

function UserInfo({ userData }) {
  return (
    <div className="user-info-main">
      <p className="profile-title">Profile Info</p>
      <div className="name-box">
        <Stack direction="row" alignItems="center" gap={1}>
          <AccountCircle className="user-info-icon" />
          <TextLabel label={"Username"} value={userData.username} />
        </Stack>
        {userData.status === "active" ? (
          <p className="active-user-status">Active</p>
        ) : (
          <p className="inactive-user-status">Inactive</p>
        )}
      </div>
      {/* personal info Section */}
      <div className="info-box">
        <div className="title-editbtn-box">
          <p className="info-title">Personal Information</p>
          <div className="edit-btn">
            <EditIcon className="edit-icon" />
          </div>
        </div>
        <div className="data-box">
          <TextLabel label={"Name"} value={userData.name} />
          <TextLabel label={"Email"} value={userData.email} />
          <TextLabel label={"Phone"} value={userData.phone} />
          <TextLabel label={"Website"} value={userData.website} />
        </div>
      </div>
      {/* company Section */}
      <div className="info-box">
        <div className="title-editbtn-box">
          <p className="info-title">Company Information</p>
          <div className="edit-btn">
            <EditIcon className="edit-icon" />
          </div>
        </div>
        <div className="data-box">
          <TextLabel label={"Name"} value={userData.company?.name} />
          <TextLabel
            label={"Catch Phrase"}
            value={userData.company?.catchPhrase}
          />
          <TextLabel label={"Bs"} value={userData.company?.bs} />
        </div>
      </div>
      {/* address Section */}
      <div className="info-box">
        <div className="title-editbtn-box">
          <p className="info-title">Address</p>
          <div className="edit-btn">
            <EditIcon className="edit-icon" />
          </div>
        </div>
        <div className="data-box">
          <TextLabel label={"Street"} value={userData.address?.street} />
          <TextLabel label={"Suite"} value={userData.address?.suite} />
          <TextLabel label={"City"} value={userData.address?.city} />
          <TextLabel label={"Zipcode"} value={userData.address?.zipcode} />
        </div>
      </div>
      {/* geo Section */}
      <div className="info-box">
        <div className="title-editbtn-box">
          <p className="info-title">Geo Location</p>
          <div className="edit-btn">
            <EditIcon className="edit-icon" />
          </div>
        </div>
        <Map geoLocation={userData.address?.geo} />
      </div>
    </div>
  );
}

export default UserInfo;
