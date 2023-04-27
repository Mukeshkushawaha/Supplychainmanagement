import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import ApiConfig from "src/config/ApiConfig";
import { calculateTimeLeft } from "src/utils";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 18,
  },
  colorPrimary: {
    backgroundColor: "#424242",
  },
  bar: {
    background:
      "linear-gradient(93.14deg, #FFB000 -20.75%, #FF564D 11.84%, #FF0098 53.76%, #5D00C1 102.96%)",
  },
}))(LinearProgress);
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    padding: "107px 0px 130px",
    backgroundImage: "url(images/backimg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: "1",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "100px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "70px 0px 100px",
    },
    "&::after": {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "-1",
      position: "absolute",
      background:
        "linear-gradient(89.75deg, rgba(0, 0, 0, 0.53) 0.21%, rgb(0 0 0 / 0%) 36.51%, rgba(0, 0, 0, 0) 99.77%, rgba(0, 0, 0, 0) 99.78%, rgba(0, 0, 0, 0.0110417) 99.78%)",
    },
    "& h1": {
      fontSize: "45px",
      fontWeight: "700",
      lineHeight: "63px",
      width: "100%",
      maxWidth: "701px",
      letterSpacing: "1.6px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
      "@media(max-width:767px)": {
        fontSize: "25px !important",
        lineHeight: "40px",
      },
    },
    "& h4": {
      width: "100%",
      margin: "25px 0px 35px",
      maxWidth: "607px",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "31px",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
    "& p": {
      color: "rgba(255, 255, 255, 0.6)",
      fontWeight: "300",
      textAlign: "center",
      marginTop: "10px",
    },
    "& .timebox": {
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      padding: "10px",
      textAlign: "center",
      paddingTop: "15px",
      paddingBottom: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  leftbox: {
    width: "100%",
  },
  listsale: {
    "& p": {
      whiteSpace: "pre",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "calc(100% - 5px)",
      maxWidth: "145px",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
  },
}));
const timeData = [
  {
    time: "30",
    day: "Days",
  },
  {
    time: "23",
    day: "Hours",
  },
  {
    time: "14",
    day: "Minutes",
  },
  {
    time: "32",
    day: "Seconds",
  },
];
function Banner() {
  const classes = useStyles();
  const history = useHistory();
  const tokenCheck = window.sessionStorage.getItem("token");
  const [liveSaleList, setLiveSaleList] = useState("");
  const timeValue = moment(liveSaleList?.enabled_sale?.saleDate).unix();
  const [closeTimeLeft, setCloseTimeLeft] = useState([]);

  const getSaleListHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: ApiConfig.getsalelist,
      });

      if (res.data.status === 200) {
        setLiveSaleList(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSaleListHandler();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCloseTimeLeft(calculateTimeLeft(new Date(parseInt(timeValue) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Box className={classes.bannerbox}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box>
              <Typography variant="h1">
              supply chain management system.
              </Typography>
              <Typography variant="h4">
              Supply chain management (SCM) is management of the flow of goods, data, and finances related to a product or service
              </Typography>
              <Box mb={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/login")}
                  >
                   Login
                  </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box className={classes.leftbox}>
              <img src= "images/bannerright.jpg" alt="" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Banner;
