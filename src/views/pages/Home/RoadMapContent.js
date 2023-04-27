import React from "react";
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { AnimationOnScroll } from "react-animation-on-scroll";
const useStyles = makeStyles((theme) => ({
  roadmapYearBox: {
    position: "relative",
    zIndex: "9",
    padding: "20px 0 50px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "-50px",
    },
    "& .roadcontentBox": {
      background: "rgba(255, 255, 255, 0.04)",
      borderRadius: "10px",
      padding: "20px",
      zIndex: "9999",
    },
    "& .commingBox": {
      background: "#FF4626",
      borderRadius: "10px",
      height: "36px",
      minWidth: "137px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const roadContent = [
  [
    {
      text: " Quarter 2",
      comming: "Coming Soon",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
  ],
  [
    {
      text: "Quarter 3",
      comming: "Coming Soon",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
  ],
  [
    {
      text: "Quarter 4",
      comming: "Coming Soon",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
  ],
  [
    {
      text: "Quarter 5",
      comming: "Coming Soon",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
  ],
  [
    {
      text: "Quarter 1",
      comming: "Coming Soon",
    },
    {
      text: " Website for Fieres ",
    },
    {
      text: " High Quality NFT Collection",
    },
    {
      text: " High Quality NFT Collection",
    },
  ],
];

function RoadmapYear({ activeIndex }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.roadmapYearBox}>
        <Container maxWidth="lg">
          <Box style={{ width: "100%" }}>
            <Grid container spacing={2} alignItems="center">
              {roadContent &&
                roadContent[activeIndex] &&
                roadContent[activeIndex]?.map((data) => {
                  return (
                    <Grid item xs={12}>
                      <Box className="roadcontentBox displaySpacebetween">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                          <Typography variant="body1" color="primary">
                            {data.text}
                          </Typography>
                        </AnimationOnScroll>
                      </Box>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default RoadmapYear;
