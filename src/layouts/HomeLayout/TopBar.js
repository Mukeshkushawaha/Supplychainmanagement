import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../../component/Logo";
import Scroll from "react-scroll";
import { toast } from "react-toastify";
const ScrollLink = Scroll.Link;
const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "rgba(255,255,255,1)",
    top: "0px",
    border: "none",
    left: "0",
  },
  toolbar: {
    display: "flex",
    padding: "2px 0px 2px 0px",
    justifyContent: "space-between",
    height: "100%",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "140px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#000",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "@media(max-width:1219px)": {
      padding: "0px 0px",
    },
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "10px",
    right: "-10px",
    fontSize: "25px",
  },

  containerHeight: {
    height: "100%",
    padding: "0px !important",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "10px 0px",
  },

  typosec: {
    fontFamily: "'Sora', sans-serif",
  },
  containerbox: {
    position: "sticky",
    top: "0",
    zIndex: "999",
    background: "rgba(0, 0, 0, 0.25)",
    width: "100%",
    backdropFilter: "blur(12.5px)",
  },
}));

export default function Header({ buttonClick }) {
  const classes = useStyles();
  const {
    appBar,
    toolbar,
    drawerContainer,
    drawericon,
    containerHeight,
    mainHeader,
  } = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(history.location);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const tokenCheck = window.sessionStorage.getItem("token");

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" className="p-0" style={{ padding: "0px" }}>
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
            className="activeClass"
          >
            <nav>
              <ul className="navigation">
                <ScrollLink
                  onClick={() => history.push("/")}
                  className="hovertext"
                  smooth={true}
                  duration={500}
                  to="home"
                  style={{ cursor: "pointer" }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={`${classes.typosec} hovertext`}
                  >
                    Home
                  </Typography>
                </ScrollLink>
                <ScrollLink
                  onClick={() => history.push("/")}
                  className="hovertext"
                  smooth={true}
                  duration={500}
                  to="icocrypto"
                  style={{ cursor: "pointer" }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={`${classes.typosec} hovertext`}
                  >
                    About
                  </Typography>
                </ScrollLink>
               
                
                <ScrollLink
                  onClick={() => history.push("/contactus")}
                  className="hovertext"
                  smooth={true}
                  duration={500}
                  // to="roadmap"
                  style={{ cursor: "pointer" }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={`${classes.typosec} hovertext`}
                  >
                    Contact
                  </Typography>
                </ScrollLink>

                {tokenCheck ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      paragraph
                      className={`${classes.typosec} hovertext`}
                      onClick={() => history.push("/dashboard")}
                    >
                      Dashboard
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      paragraph
                      className={`${classes.typosec} hovertext`}
                      onClick={() => history.push("/login")}
                    >
                      Login
                    </Button>
                  </>
                )}
              </ul>
            </nav>
          </Grid>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "#FF564D", fontSize: "35px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <>
        <nav>
          <label clasnames="logo">
            <Logo
              style={{
                width: "100%",
                maxWidth: "150px",
                marginTop: "16px",
                marginLeft: "18px",
              }}
            />
          </label>
          <ul className="navigation">
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="home"
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6" paragraph className="hovertext">
                Home
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="about"
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6" paragraph className="hovertext">
                About
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="roadmap"
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6" paragraph className="hovertext">
                Team
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/contactus")}
              className="hovertext"
              smooth={true}
              duration={500}
              // to="roadmap"
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6" paragraph className="hovertext">
                Contact
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/login")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="roadmap"
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6" paragraph className="hovertext">
                Login
              </Typography>
            </ScrollLink>
          </ul>
        </nav>
      </>
    );
  };

  const femmecubatorLogo = (
    <Box>
      <Link to="/">
        <Logo
          className="logoImg"
          style={{ width: "100%", maxWidth: "240px" }}
        />
      </Link>
    </Box>
  );

  return (
    <>
      <Box className={classes.containerbox}>
        <Container>
          <AppBar
            className={appBar}
            position={
              history.location.pathname !== "/" ? "relative" : "relative"
            }
            elevation={0}
            style={{ background: "none" }}
          >
            <Container
              maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
              className={containerHeight}
            >
              {mobileView ? displayMobile() : displayDesktop()}
            </Container>
          </AppBar>
        </Container>
      </Box>
    </>
  );
}
