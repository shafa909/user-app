import { Button } from "@mui/material";
import Header from "./Header";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import TuneIcon from "@mui/icons-material/Tune";
import UserList from "./UserList";
import "./listView.css";
import uData from "../data.json";
import { useState, useEffect } from "react";

function ListView() {
  const [userData, setUserData] = useState(uData);
  const [searchWord, setSearchWord] = useState("");

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

  useEffect(() => {
    if (!searchWord) setUserData(uData);
    else {
      const FilterdData = filterItems(uData, searchWord);
      setUserData(FilterdData);
    }
  }, [searchWord]);

  function filterItems(arr, query) {
    return arr.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return (
    <>
      <Header isHome={true} />
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
            value={searchWord}
            className="search-bar"
            placeholder="Search user"
            size="small"
            InputProps={iconAdornment}
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>
        <div className="user-box">
          {userData.map((user) => {
            return <UserList userData={user} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ListView;
