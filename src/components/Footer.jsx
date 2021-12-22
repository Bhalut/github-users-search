import { Box, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        gridArea: "footer",
        backgroundColor: deepPurple[500]
      }}>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <footer>
          <Typography variant="body1" sx={{ color: deepPurple[50] }}>
            Make with love
          </Typography>
        </footer>
      </Box>
    </Box>
  );
};

export default Footer;
