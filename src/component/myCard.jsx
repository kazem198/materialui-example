import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import ExtensionIcon from "@material-ui/icons/Extension";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "200px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root2: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    backgroundColor: "#F06292",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    padding: "15px",
  },
  cardTitle: {
    marginBottom: "30px",
    marginTop: "30px",
  },
  cardAction: {
    justifyContent: "space-between",
    margin: "10px",
  },
}));

export default function MyCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className={classes.root2}>
            <CardContent>
              <TrackChangesIcon className={classes.icon} />
              <Typography
                variant="h4"
                component="h1"
                className={classes.cardTitle}
              >
                ثبت آگهی شرکت
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با
                ساتفاده از طراحان گرافی است. چاپگرها و متون بلکه روزن امه
              </Typography>
            </CardContent>
            <CardActions
              style={{ justifyContent: "space-between" }}
              className={classes.cardAction}
            >
              <Button size="medium" color="secondary">
                مشاهده
              </Button>
              <Button size="medium" color="secondary">
                <ArrowBackIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.root2}>
            <CardContent>
              <WbIncandescentIcon className={classes.icon} />
              <Typography
                variant="h4"
                component="h1"
                className={classes.cardTitle}
              >
                یافت شده ها
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با
                ساتفاده از طراحان گرافی است. چاپگرها و متون بلکه روزن امه
              </Typography>
            </CardContent>
            <CardActions
              style={{ justifyContent: "space-between" }}
              className={classes.cardAction}
            >
              <Button size="medium" color="secondary">
                مشاهده
              </Button>
              <Button size="medium" color="secondary">
                <ArrowBackIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.root2}>
            <CardContent>
              <ExtensionIcon className={classes.icon} />
              <Typography
                variant="h4"
                component="h1"
                className={classes.cardTitle}
              >
                ثبت آگهی مفقودی
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صعنت چاپ و با
                ساتفاده از طراحان گرافی است. چاپگرها و متون بلکه روزن امه
              </Typography>
            </CardContent>
            <CardActions
              style={{ justifyContent: "space-between" }}
              className={classes.cardAction}
            >
              <Button size="medium" color="secondary">
                مشاهده
              </Button>
              <Button size="medium" color="secondary">
                <ArrowBackIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
