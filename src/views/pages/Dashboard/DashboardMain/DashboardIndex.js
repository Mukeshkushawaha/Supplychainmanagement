// import React, { useContext, useEffect, useState } from "react";
// import { Box, Typography, Grid, Button } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   dashboardbox: {
//     background: "rgba(255, 255, 255, 0.025)",
//     borderRadius: "15px",
//     padding: "50px 20px",
//     "& .balancebox": {
//       background: "rgba(255, 255, 255, 0.025)",
//       backdropFilter: "blur(4px)",
//       borderRadius: "10px",
//       padding: "22px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       "& h5": {
//         fontWeight: "300",
//       },
//     },
//     "& button": {
//       padding: "8px 60px",
//     },
//     "& .flexmain": {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       "@media(max-width:501px)": {
//         display: "block",
//       },
//     },
//   },
//   tableboxmain: {
//     background: "rgba(255, 255, 255, 0.025)",
//     borderRadius: "15px",
//     padding: "20px",
//     marginTop: "24px",
//   },
// }));

// function DashboardIndex() {
//   const classes = useStyles();
//   const history = useHistory();

// const apiHang

//   return (
//     <Box>
//       <Box className={classes.dashboardbox}>
//         <Box className="flexmain">
//           <Typography variant="h1">dashboard</Typography>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             size="large"
//             onClick={() => history.push("/buy-token")}
//           >
//             Buy Token
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default DashboardIndex;

import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import OrderHistoryTable from "./OrderHistoryTable";

const DummyData = [
  {
    Supplier: "Mukesh",
    Estimateddate: "12/07/2023",
    Status: "Active",
    Description: "Hello mukesh how are you",
  },
  {
    Supplier: "Vikash",
    Estimateddate: "12/07/2023",
    Status: "Active",
    Description: "Hello mukesh how are you",
  },
  {
    Supplier: "Rahul",
    Estimateddate: "12/07/2023",
    Status: "Active",
    Description: "Hello mukesh how are you",
  },
  {
    Supplier: "Subash",
    Estimateddate: "12/07/2023",
    Status: "Active",
    Description: "Hello mukesh how are you",
  },
];

const useStyles = makeStyles((theme) => ({
  dashboardbox: {
    background: "rgba(255, 255, 255, 0.025)",
    borderRadius: "15px",
    padding: "50px 20px",
    "& .balancebox": {
      background: "rgba(255, 255, 255, 0.025)",
      backdropFilter: "blur(4px)",
      borderRadius: "10px",
      padding: "22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& h5": {
        fontWeight: "300",
      },
    },
    "& button": {
      padding: "8px 60px",
    },
    "& .flexmain": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "@media(max-width:501px)": {
        display: "block",
      },
    },
    "& .artwork": {
      marginTop: "50px",
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "0px",
      },

      "& .artworkbox": { paddingRight: "3.15rem" },
      "& h2": {
        fontSize: "40px",
        fontFamily: "'ClashDisplay-Medium'",
        [theme.breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      "& p": {
        fontWeight: 400,
        fontSize: "18px",
        marginTop: "10px",
        color: "#706b6b",
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px",
        },
      },
    },
  },
  tableboxmain: {
    background: "rgba(255, 255, 255, 0.025)",
    borderRadius: "15px",
    padding: "20px",
    marginTop: "24px",
  },
}));

function DashboardIndex() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box>
      <Box className={classes.dashboardbox}>
        <Box pt={3} pb={6}>
          <Grid container>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className="artworkbox">
                <Typography variant="h2" color="primary">
                  68 +{" "}
                </Typography>
                <Typography variant="body2">Total Orders</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className="artworkbox">
                <Typography variant="h2" color="primary">
                  14 +{" "}
                </Typography>
                <Typography variant="body2">Pending Items</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <Box className="artworkbox">
                <Typography variant="h2" color="primary">
                  54 +{" "}
                </Typography>
                <Typography variant="body2">Confirm Items</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="flexmain">
          <Typography variant="h2">Comming Soon</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => history.push("/CreateOrder")}
          >
            Add Order
          </Button>
        </Box>
      </Box>
      <Box>
        <OrderHistoryTable DummyData={DummyData} />
      </Box>
    </Box>
  );
}

export default DashboardIndex;
