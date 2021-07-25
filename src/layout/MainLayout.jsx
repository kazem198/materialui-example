import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CheckIcon from "@material-ui/icons/Check";

import { Link } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    display: "flex",
    // flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginRight: -drawerWidth,
    // marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },

  header: {
    backgroundColor: "white",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
    //     position: "absolute",
  },
  nav: {
    display: "flex",
    flexwrap: "wrap",
    paddingLeft: 0,
    marginBottomtom: 0,
    listStyle: "none",
  },
  navlink: {
    display: "block",
    padding: ".5rem 1rem",

    color: "black",
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  allTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
    fontSize: "18px",
    fontWeight: "bold",
    borderRight: "1px solid black",
    margin: "10px",
    padding: "5px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  icon: {
    [theme.breakpoints.down("md")]: {
      padding: "3px",
      //       display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      //       padding: "3px",
      display: "none",
    },
    //     color: "white",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        color="transparent"
        position="absolute"
        className={clsx(classes.appBar, classes.header, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.main}>
            <div className={classes.allTitle}>
              <Typography className={classes.title} variant="h3" noWrap>
                لوگو
              </Typography>
              <Typography className={classes.title2} variant="caption" noWrap>
                نسل فردا
              </Typography>
            </div>
            <div className={classes.sectionDesktop}>
              <div>
                <ul className={classes.nav}>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                    >
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                    >
                      امکانات
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                    >
                      چرا ما؟
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                    >
                      نماد اعتماد
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ alignSelf: "center" }}>
              <IconButton
                aria-label="show 4 new mails"
                color="default"
                className={classes.icon}
              >
                <WhatsAppIcon />
              </IconButton>

              <IconButton
                aria-label="show 17 new notifications"
                color="default"
                className={classes.icon}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                color="default"
                className={classes.icon}
              >
                <TelegramIcon />
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["خانه", "امکانات", "چرا ما؟", "نماد اعتماد"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <BuildIcon />}
                {index === 2 && <ContactSupportIcon />}
                {index === 3 && <CheckIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}
