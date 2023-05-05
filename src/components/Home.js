import { Typography, Button, Stack } from "@mui/material";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import TuneIcon from "@mui/icons-material/Tune";
import UserList from "./UserList";
import "./home.css";
import Data from "../data.json";

function Home() {

   let  namedata = Data.find(x => x.id === 1); 

   console.log('ss', namedata)

  const iconAdornment = {
    style: { color: "#6f7179" },
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon style={{ color: "#d4d7dd" }} />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <TuneIcon style={{ color: "#d4d7dd" }} />
      </InputAdornment>
    ),
  };

  return (
    <>
      <Header isHome={true}  />
      <div className="home-main">
        <div className="title-bar">
          <p className="home-user-title">Users</p>
          <Button
            sx={{ textTransform: "none" }}
            className="add-user-btn"
            variant="contained"
          >
            <AddCircleOutlineIcon /> &nbsp;Invite user
          </Button>
        </div>
        <div className="search-box">
          <TextField
            className="search-bar"
            placeholder="Search user"
            size="small"
            InputProps={iconAdornment}
          />
        </div>
        <div className="user-box">
          {Data.map((user) => {
            return <UserList userData={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
