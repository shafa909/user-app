import { Typography, Stack } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import './userList.css'

function UserList({userData}) {

    const colorList = ['#d3eed9', '#ceebfc', '#fce0bf', '#ffeef9', '#bbd0de']
    const userColor = Math.floor(Math.random() * colorList.length);

  return (
    <div className="user-list">
      <Stack
        className="user-info user-name"
        direction="row"
        alignItems="center"
        gap={1}
      >
        <AccountBoxIcon sx={{ color: colorList[userColor] }} className="user-icon" />
        <Typography variant="body1">{userData.name}</Typography>
      </Stack>

      <Stack
        className="user-info user-company"
        direction="row"
        alignItems="center"
        gap={1}
      >
        <Typography variant="body1">{userData.company.name}</Typography>
      </Stack>

      <Stack
        className="user-info user-email"
        direction="row"
        alignItems="center"
        gap={1}
      >
        <Typography variant="body1">{userData.email}</Typography>
      </Stack>

      <Stack
        className="user-info user-phone"
        direction="row"
        alignItems="center"
        gap={1}
      >
        <Typography variant="body1">{userData.phone}</Typography>
      </Stack>

      <Stack
        className="user-info user-status"
        direction="row"
        alignItems="center"
        gap={1}
      >
        <p className="active-user">Active</p>
      </Stack>
    </div>
  );
}

export default UserList;
