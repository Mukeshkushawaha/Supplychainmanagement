import {
  Box,
  FormControl,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "src/context/User";
import { useWeb3React } from "@web3-react/core";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "react-phone-input-2/lib/style.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  mainLoginContainer: {
    background: "rgba(255, 255, 255, 0.025)",
    padding: "20px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },

    "& h1": {
      fontSize: "32px",
    },
    "& h6": {
      fontWeight: "300",
      fontSize: "16px",
      margin: "10px 0px",
      color: "rgba(255, 255, 255, 0.6)",
      width: "100%",
      maxWidth: "583px",
    },
  },
  formBox: {
    paddingTop: "30px",
    "& svg": {
      fontSize: "16px",
      color: "#555352",
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#BB2C2C !important",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#BB2C2C !important",
      padding: "0px",
    },
    "& p": {
      color: "#fff !important",
      paddingBottom: "8px",
    },
    "& .MuiSelect-icon": {
      color: "#ffffff !important",
    },
    "& .MuiSvgIcon-root": {
      color: "#fff !important",
    },
  },
}));
export default function Ordercreate() {
  const classes = useStyles();
  const [suplier, setSuplier] = useState("0");
  const [suplier1, setSuplier1] = useState("0");
  const user = React.useContext(UserContext);
  const { activate, account } = useWeb3React();
  const [loadig,setLoading] = useState(true)

  return (
    <Box className={classes.mainregister}>
      <Box my={2} className={classes.mainLoginContainer}>
        <Box>
          <Typography variant="h1">Order Create</Typography>
          <Box className={classes.formBox}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Supplier</Typography>
                  <TextField
                    placeholder="Enter your Supplier name"
                    variant="outlined"
                    name="firstName"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Items</Typography>
                  <TextField
                    placeholder="Enter number od container"
                    variant="outlined"
                    name="lastName"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Number of Quantity</Typography>
                  <TextField
                    placeholder="Enter number od container"
                    variant="outlined"
                    name="lastName"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Number of container</Typography>
                  <TextField
                    placeholder="Enter number od container"
                    variant="outlined"
                    name="lastName"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Container Type</Typography>
                  <FormControl fullWidth>
                    <Select
                      variant="outlined"
                      name="country"
                      value={suplier}
                      onClick={(e) => setSuplier(e.target.value)}
                    >
                      <MenuItem value="0">Select</MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Shipping Type</Typography>
                  <TextField
                    placeholder="Enter number od container"
                    variant="outlined"
                    name="lastName"
                    fullWidth
                  />
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Priority</Typography>
                  <FormControl fullWidth>
                    <Select
                      variant="outlined"
                      name="country"
                      value={suplier1}
                      onClick={(e) => setSuplier1(e.target.value)}
                    >
                      <MenuItem value="0">Select</MenuItem>
                      <MenuItem value={10}>Low</MenuItem>
                      <MenuItem value={20}>High</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Order Description</Typography>
                  <TextField
                    placeholder="Enter your address"
                    variant="outlined"
                    name="address"
                    fullWidth
                  />
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Order Creation Date</Typography>
                  <FormControl fullWidth>
                    <KeyboardDatePicker
                      disableFuture
                      inputVariant="outlined"
                      format="DD/MM/YYYY"
                      fullWidth
                      disabled
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box>
                  <Typography variant="body1">Arrival date to port</Typography>
                  <FormControl fullWidth>
                    <KeyboardDatePicker
                      disablePast
                      inputVariant="outlined"
                      format="DD/MM/YYYY"
                      fullWidth
                    />
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        {account ? <Button
          variant="contained"
          color="primary"
          onClick={() => user.connectWallet()}
        >
          Submit
        </Button> : <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => user.connectWallet()}
        >
          Connect wallet
        </Button>
        </>}
       
      </Box>
    </Box>
  );
}
