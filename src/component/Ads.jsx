import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    backgroundImage: "url(/img/ads.png);",
    color: "white",
    padding: "50px",
    textAlign: "center",
    borderRadius: "30px",
  },
  textOne: {
    alignSelf: "center",
  },
  textOneh: {
    fontWeight: "bold",
  },
}));

export default function Ads() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className={classes.textOne}>
          <Typography variant="h4" component="h4" className={classes.textOneh}>
            با ما بهتر دیده شوید
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" component="h6">
            از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
            معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
            نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه
            خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است. نکته
            بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت
            و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ای
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
