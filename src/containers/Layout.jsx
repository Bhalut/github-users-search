import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100vh",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 1,
        gridTemplateRows: "minmax(50px, 100px) 1fr minmax(50px, 100px)",
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
