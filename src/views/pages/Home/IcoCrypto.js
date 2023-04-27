import React from "react";
import { Box, Typography, Container, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";

const useStyles = makeStyles((theme) => ({
  cryptomain: {
    padding: "100px 0px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "70px 0px 0px",
    },
    "& h1": {
      margin: "30px 0px",
      width: " 100%",
      maxWidth: "677px",
      lineHeight: "49px !important",
      [theme.breakpoints.down("sm")]: {
        lineHeight: "40px !important",
      },
    },
  },
  timelinetext: {
    "& h4": {
      marginBottom: "16px",
    },
    "& p": {
      width: "100%",
      maxWidth: "466px",
    },
  },
  rightImage: {
    position: "absolute",
    right: "0px",
    top: "50%",
    maxWidth: "60%",
    transform: "translateY(-50%)",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      maxWidth: "70%",
      top: "auto",
      transform: "none",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
    "& img": { width: "100%" },
  },
}));

function IcoCrypto() {
  const classes = useStyles();
  return (
    <Box className={classes.cryptomain}>
      <Container>
        <Box>
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={7} md={7} sm={12} xs={12}>
             
              <Typography variant="h1">
                We’ve built a platform to buy and sell shares
              </Typography>
              <Box className={classes.timelinetext}>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <Avatar src="images/platform.png" alt="" width="100%" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h4">
                        Decentralized Platform
                      </Typography>
                      <Typography variant="body1">
                        The platform helps investors to make east to purchase
                        and sell their tokens
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <Avatar src="images/platform.png" alt="" width="100%" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h4">Crowd wisdom</Typography>
                      <Typography variant="body1">
                        The process of taking into account the collective
                        opinion of a group
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <Avatar src="images/platform.png" alt="" width="100%" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h4">Rewards mechanism</Typography>
                      <Typography variant="body1">
                        The system pay a bonus for excellent individuals
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}></Grid>
          </Grid>
        </Box>
      </Container>
      <Box className={classes.rightImage}>
        <img src="images/mainImg.webp" alt="" />
      </Box>
    </Box>
  );
}

export default IcoCrypto;
