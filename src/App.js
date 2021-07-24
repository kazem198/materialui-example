import React from "react";
import RTL from "./component/rtl";
import { faIR } from "@material-ui/core/locale";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import PrimarySearchAppBar from "./component/NavBar";
import Container from "@material-ui/core/Container";
import MySlider from "./component/MySlider";
import MyCard from "./component/myCard";
import Ads from "./component/Ads";
import Footer from "./component/footer";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Samim",
    },
  },
  faIR
);

const App = () => {
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <Container>
          <PrimarySearchAppBar />
          <MySlider />
          <MyCard />
          <Ads />
          <Footer />
        </Container>
      </ThemeProvider>
    </RTL>
  );
};

export default App;
