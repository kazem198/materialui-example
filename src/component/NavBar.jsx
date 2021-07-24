import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { CenterFocusStrong } from "@material-ui/icons";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    [theme.breakpoints.down("sm")]: {
      padding: "3px",
    },
  },
  header: {
    backgroundColor: "white",
    borderBottomLeftRadius: "25px",
    borderBottomRightRadius: "25px",
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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}

      <MenuItem> خانه</MenuItem>
      <MenuItem> امکانات</MenuItem>
      <MenuItem>چرا ما؟</MenuItem>
      <MenuItem> نماد اعتماد</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.header} color="transparent">
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
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      امکانات
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      چرا ما؟
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={classes.navlink}
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
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
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
