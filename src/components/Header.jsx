import Box from "@mui/material/Box";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        gridArea: "header",
        bgcolor: deepPurple[300]
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
            to="/"
            style={{ textDecoration: "none", color: deepPurple[50] }}>
            GitHub Users Search
          </Link>
        </header>
      </Box>
    </Box>
  );
};

export default Header;
