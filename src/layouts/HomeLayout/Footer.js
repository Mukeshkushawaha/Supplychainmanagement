import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Divider,
  IconButton,
  Link,
} from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";
import { RiInstagramLine } from "react-icons/ri";
import { RiDiscordFill } from "react-icons/ri";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  baseSection: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: theme.palette.text.textfooter,
      fontSize: "16px",
      // fontWeight: "400",
    },
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.dull,
    },
    "@media(max-width:565px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  privacy: {
    display: "flex",
    "@media(max-width:565px)": {
      marginTop: "1.5rem",
    },
  },
  subpart: {
    "& .footerimgBox": {
      position: "absolute",
      maxWidth: "330px",
      width: "auto",
      right: "50px",
      bottom: "10%",
      zIndex: "-1",
    },
    background: "rgba(255, 255, 255, 0.02)",
    position: "relative",
    zIndex: 1,
    padding: "60px 0px 40px",
    overflow: "hidden",
    "& h5": {
      color: "rgba(255, 255, 255, 0.6)",
      width: "100%",
      maxWidth: "252px",
      marginBottom: "12px",
      fontWeight: "300",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "100%",
        maxWidth: "100%",
        marginBottom: "10px",
      },
    },
    "@media(max-width:599px)": {
      padding: "20px 10px 24px 10px",
    },
    "& h2": {
      fontSize: "35px",
      fontWeight: "500",
      lineHeight: "46px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
        lineHeight: "31px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        marginBottom: "0px",
      },
    },
    "& h4": {
      fontSize: "20px",
      fontWeight: "400",
    },
  },

  listbox: {
    background: "none",
    border: "none",
    margin: "0px",
    "& a": {
      color: "rgba(255, 255, 255, 0.6)",
      display: "block",
      fontSize: "14px",
      fontWeight: "300",
      paddingTop: "4px",
      fontFamily: "'Sora', sans-serif",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
      "&:hover": {
        color: "none",
      },
    },
  },
  contactbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "-10px",
    marginLeft: "-10px",
    marginTop: "4px",
    "& a": {
      color: "rgba(255, 255, 255, 0.6)",
      fontFamily: "'Sora', sans-serif",
      fontSize: "14px",
      fontWeight: "300",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    "& svg": {
      color: "#3F3E41",
      fontSize: "18px",
    },
  },

  buttonbox: {
    marginTop: "10px",
    "& button": {
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
    },
  },
  subfooter: {
    paddingTop: "40px",
    paddingBottom: "32px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "16px",
    },
  },
  leftbox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "130px",
    marginTop: "30px",
    "& .dot": {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.04)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
  icon: {
    margin: "0px 4px",
    color: "rgba(255, 255, 255, 0.15)",
    cursor: "pointer",
    width: "20px",
    "&:hover": {
      color: "#FF2676",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  const history = useHistory();
  const tokenCheck = window.sessionStorage.getItem("token");

  return (
    <>
      <Box className={classes.subpart}>
        <div className="footerleft"></div>
        <img className="footerimgBox" src="images/footerimg.png" alt="" />
        <Box>
          <Container>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box>
                   
                    <Typography variant ="h4">Logo</Typography>
                  </Box>{" "}
                  <Box mt={1} mb={1}>
                    <Typography variant="body2" style={{ maxWidth: "300px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit adipiscing nibh sed dolor. Vulputate neque facilisi
                      tortor ipsum sit.
                    </Typography>{" "}
                  </Box>
                 
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                      <Typography variant="h4">Dashboard</Typography>
                      <List className={classes.listbox}>
                        <RouterLink
                          className="hovertext"
                          style={{ textDecoration: "none" }}
                          onClick={() =>
                              history.push("/edit-profile")
                          }
                        >
                          <ListItem>Profile</ListItem>
                        </RouterLink>
                      </List>{" "}
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                      <Typography variant="h4">Faqs</Typography>
                      <List className={classes.listbox}>
                        <RouterLink
                          className="hovertext"
                          to="/contactus"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Contact Us</ListItem>
                        </RouterLink>

                        <RouterLink
                          className="hovertext"
                          to="/about-us"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>About Us</ListItem>
                        </RouterLink>
                        <RouterLink
                          className="hovertext"
                          to="/terms-service"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Terms of Service</ListItem>
                        </RouterLink>
                      </List>{" "}
                    </Grid>

                    <Grid item xs={6} sm={3} md={3} lg={3}>
                      <Typography variant="h4">Contact Us</Typography>
                      <Box
                        className={classes.contactbox}
                        style={{ cursor: "pointer" }}
                      >
                        <IconButton>
                          <AiOutlineMail />
                        </IconButton>
                        <Link href="mailto:support@fierex.com">
                          support@smartchain.com
                        </Link>
                      </Box>
                      <Box className={classes.leftbox}>
                        <Link target="_blank" href="https://twitter.com/">
                          <Box className="dot">
                            <TwitterIcon className={classes.icon} />
                          </Box>
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/">
                          <Box className="dot">
                            <RiInstagramLine className={classes.icon} />
                          </Box>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/">
                          <Box className="dot">
                            <LinkedInIcon className={classes.icon} />
                          </Box>
                        </Link>
                        <Link target="_blank" href="https://www.discord.com/">
                          <Box className="dot">
                            <RiDiscordFill className={classes.icon} />
                          </Box>
                        </Link>
                      </Box>
                    </Grid>
              </Grid>
            </Box>
          </Container>
          <Box className={classes.subfooter}>
            <Divider style={{ backgroundColor: "rgb(255 255 255 / 10%)" }} />
          </Box>
          <Container>
            <Box className={classes.baseSection}>
              <Box className={classes.privacy}>
                <RouterLink to="/privacy-policy">
                  <Typography variant="body1">Privacy Policy |</Typography>
                </RouterLink>
                &nbsp;
                <RouterLink to="/termscondition">
                  <Typography variant="body1">
                    Terms and Conditions |
                  </Typography>
                </RouterLink>
              </Box>
              <Typography variant="body1">
                Copyright©2023. Created with love by FIEREX
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
