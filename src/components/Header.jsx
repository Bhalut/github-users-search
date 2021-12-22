import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Header = () => {
  return (
    <Box
      sx={{
        gridArea: "header",
        backgroundColor: deepPurple[400]
      }}>
      <Box
        sx={{
          padding: "0 10px",
          display: "flex",
          height: "100%",
          alignContent: "center",
          alignItems: "center"
        }}>
        <header>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: deepPurple[50],
              textDecoration: "none",
              fontSize: "1.5em"
            }}>
            GitHub Users Search
          </Link>
        </header>
      </Box>
    </Box>
  );
};

export default Header;
