import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "50px",
  },
  textHeader: {
    textAlign: "left",
    marginBottom: "40px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textHeader}
          >
            موقعیت
          </Typography>
          <Typography variant="h6" component="h6" color="textSecondary">
            معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
            نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textHeader}
          >
            شماره های تماس
          </Typography>
          <Typography variant="h6" component="h6" color="textSecondary">
            +12345678900
          </Typography>
          <Typography variant="h6" component="h6" color="textSecondary">
            +12345678900
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textHeader}
          >
            نماد
          </Typography>
          <Typography variant="h6" component="h6" color="textSecondary">
            معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
            نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h6" color="textSecondary">
            تمامی حقوق مادی و معنوی این وبسایت محفوظ است.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
