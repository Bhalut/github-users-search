import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import AppContext from "../context/AppContext";

const UserDetail = () => {
  const { state } = useContext(AppContext);
  const user = state;

  return (
    <Box
      sx={{
        display: "grid",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        gridColumn: "3 / 5",
        gridRow: "2 / 4",
        backgroundColor: deepPurple[50],
        border: `2px solid ${deepPurple["A400"]}`,
        borderRadius: "25px"
      }}>
      <Box
        component="img"
        src={user.avatar_url}
        alt={`User ${user.login}`}
        sx={{
          width: "35%",
          borderRadius: "15px"
        }}
      />
      <Typography variant="h2">{user.login}</Typography>
      <hr />
      <Box>
        <Typography variant="body1" color="text.secondary">
          GitHub Profile:{" "}
          <a href={user.html_url} target="_blank">
            here
          </a>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Repositories:{" "}
          <a href={user.repos_url} target="_blank">
            here
          </a>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Organizations:{" "}
          <a href={user.organizations_url} target="_blank">
            here
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserDetail;
