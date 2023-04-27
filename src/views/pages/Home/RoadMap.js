import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  mainroad: {
    "& h5": {
      color: "rgba(255, 255, 255, 0.87)",
      fontWeight: "300",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px !important",
      },
    },
    "& h3": {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Good Times W00 Bold",
      color: " rgba(255, 255, 255, 0.6)",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px !important",
      },
    },
  },
  roadmapboxes: {
    position: "relative",
    zIndex: "9",
    "& h1": {
      marginBottom: "16px",
      fontSize: "30px",
    },
    "& p": {
      fontWeight: "300",
      fontSize: "16px",
      color: "#fff",
      width: "100%",
      maxWidth: "651px",
      marginBottom: "100px",
    },
  },
}));
function RoadMap(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
    ],
  };
  return (
    <Box className={classes.mainroad}>
      <Box className="roadmappage" pt={5} pb={6}>
        <Container maxWidth="lg">
          <Box className={classes.roadmapboxes} mb={5}>
            <Typography variant="h1">See the roadmap of chain</Typography>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. galley of type and scrambled it to make a type specimen
              book.
            </Typography>
          </Box>
          <Slider {...settings} className="roadmapslider">
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 2</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 3</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 4</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 5</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 6</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 7</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 8</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 9</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
            <div className="sliderBox">
              <Box className="circle circle1"></Box>
              <div className="timlineBox">
                <Box className="year-text">
                  <Typography variant="h3">QUARTER 10</Typography>
                  <Box className="line"></Box>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Good Times W00 Bold",
                      color: "#FFFFFF",
                    }}
                  >
                    2023
                  </Typography>
                </Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text of the printing and unknown
                  printer.
                </Typography>
              </div>
            </div>
          </Slider>
        </Container>
      </Box>
    </Box>
  );
}

export default RoadMap;
