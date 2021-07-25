import React from "react";
import RTL from "./component/rtl";
import { faIR } from "@material-ui/core/locale";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

import MyCard from "./component/myCard";
import Ads from "./component/Ads";
import Footer from "./component/footer";

import MainLayout from "./layout/MainLayout";
import MySlider from "./component/MySlider";

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
          <MainLayout>
            <MySlider />
            <MyCard />
            <Ads />
            <Footer />
          </MainLayout>
        </Container>
      </ThemeProvider>
    </RTL>
  );
};

export default App;
