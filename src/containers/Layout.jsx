import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100vh",
        gap: 1,
        gridTemplateRows:
          "minmax(4.5rem, 5.5rem) 1fr 2fr minmax(4.5rem, 5.5rem)",
        gridTemplateAreas: `"header header header header header header"
                            ". search search search search ."
                            ". users users users users ."
                            "footer footer footer footer footer footer"`
      }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
