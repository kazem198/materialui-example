import React from "react";
import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  wrap: {
    marginTop: "50px",
    fontFamily: "Samim",
  },
  image: {
    borderRight: "10px solid #F06292",
  },
  main: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    height: "500px",
  },
  largp: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    fontSize: "40px",
    fontWeight: "bold",
    width: "50%",
  },
  allp: {
    marginLeft: "30px",
  },
  smallp: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    fontSize: "20px",
    width: "50%",
    marginTop: "-10px",
  },
  more: {
    color: "#F06292",
    textDecoration: "none",
    fontSize: "20px",
    position: "relative",
  },
  arrowicon: {
    width: "30px",
    height: "50px",
    fontSize: "30px",
    position: "absolute",
    top: "-2px",
    right: "-55px",
  },
}));
const MySlider = () => {
  const SampleNextArrow = ({ style, className, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F06292",
          color: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = ({ style, className, onClick }) => {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F06292",
          color: "white",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    rtl: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <Slider {...settings}>
        <div dir="rtl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className={classes.image}>
                <img src="./img/hand.png" className={classes.img} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.largp}>پیگیری مفقودی های شما در اینجا</p>
              <p className={classes.smallp}>
                لوزم ایپسون ساختگی با تولید سادگی نامفهموم از صنعت چاپ و با
                ساتفاده از{" "}
              </p>
              <a href="#" className={classes.more}>
                {" "}
                بیشتر
                <ArrowDownwardIcon className={classes.arrowicon} />
              </a>
            </Grid>
          </Grid>
        </div>

        <div dir="rtl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className={classes.image}>
                <img src="./img/hand.png" className={classes.img} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.largp}>پیگیری مفقودی های شما در اینجا</p>
              <p className={classes.smallp}>
                لوزم ایپسون ساختگی با تولید سادگی نامفهموم از صنعت چاپ و با
                ساتفاده از{" "}
              </p>
              <a href="#" className={classes.more}>
                {" "}
                بیشتر
                <ArrowDownwardIcon className={classes.arrowicon} />
              </a>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
