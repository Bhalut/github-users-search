import Box from "@mui/material/Box";
import { deepPurple } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        gridArea: "footer",
        bgcolor: deepPurple[500]
      }}>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <footer>
          <p>Make with love</p>
        </footer>
      </Box>
    </Box>
  );
};

export default Footer;
