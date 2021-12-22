import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "grid",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center",
        gridColumn: "3 / 5",
        gridRow: "2 / 4"
      }}>
      <Typography
        variant="h2"
        sx={{
          color: deepPurple[900]
        }}>
        Not Found, error 404.
      </Typography>
      <Link component={RouterLink} to="/" underline="hover">
        Please return home
      </Link>
    </Box>
  );
};

export default NotFound;
