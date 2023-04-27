import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Select from "@material-ui/core/Select";
import { Form, Formik } from "formik";
import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { AuthContext } from "src/context/Auth";
import ApiConfig from "src/config/ApiConfig";
import moment from "moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
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

  outlineborder1: {
    "& .react-tel-input .form-control": {
      width: "100%",
      color: "#6D6D6D",
      borderRadius: "5px",
      height: "55px",
      background: "#FFFFFF06",
      border: "1px solid #ffffff00",
    },
    "& .react-tel-input .country-list .country": {
      padding: "7px 9px",
      textAlign: "left",
      backgroundColor: "#2D2D2D",
      color: "#fff",
      "&:hover": {
        background: "#000000e3",
      },
    },
    "& .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus":
      {
        backgroundColor: "transparent !important",
      },
    "& .react-tel-input .selected-flag": {
      backgroundColor: "#202020",
      "&:hover": {
        backgroundColor: "none",
      },
    },
    "& .react-tel-input .selected-flag .arrow": {
      left: "20px",
    },

    "& .react-tel-input .country-list .country.highlight": {
      backgroundColor: "#000000e3",
    },
    "& .react-tel-input .flag-dropdown ": {
      backgroundColor: "transparent",
      //   borderRight: "1px solid #949494",
      border: "none",
      height: "44px",
      position: "absolute",
      top: "5px",
    },
    "& .react-tel-input .flag-dropdown.open .selected-flag": {
      background: "#FFFFFF06",
    },
  },
}));
export default function Profile() {
  const classes = useStyles();
  const [showPasswordold, setShowPasswordold] = useState(false);
  const [showPasswordnew, setShowPasswordnew] = useState(false);
  const [showPasswordcnf, setShowPasswordcnf] = useState(false);
  

 





 




  return (
    <Box className={classes.mainregister}>
      <Box my={2} className={classes.mainLoginContainer}>
        <Box>
          <Typography variant="h1">My Profile</Typography>
          <Typography variant="h6">
            You can set preferred name, create your branded profile URL and
            manage other personal settings.
          </Typography>

          
           
                 

               
                <Box className={classes.formBox}>
                  <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">First Name</Typography>
                        <TextField
                          placeholder="Enter your first name"
                          variant="outlined"
                          name="firstName"
                          fullWidth
                          
                        />
                     
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Last Name</Typography>
                        <TextField
                          placeholder="Enter your last name"
                          variant="outlined"
                          name="lastName"
                          fullWidth
                          
                        />
                        
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Email</Typography>
                        <TextField
                          placeholder="Enter your email"
                          variant="outlined"
                          name="email"
                          fullWidth
                         
                        />
                        
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Mobile Number</Typography>
                        <FormControl
                          fullWidth
                          variant="filled"
                          className={classes.outlineborder1}
                        >
                        
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Country</Typography>
                        <FormControl fullWidth>
                          <Select
                            variant="outlined"
                            name="country"
                          
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                          
                                <MenuItem
                                 
                                >
                                ghjkl
                                </MenuItem>
                             
                          </Select>
                        </FormControl>
                       
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">State</Typography>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            variant="outlined"
                            name="state"
                           
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                           
                                  <MenuItem
                                    
                                  >
                                   jkl
                                  </MenuItem>
                               
                          </Select>
                        </FormControl>
                       
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">City</Typography>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            name="cities"
                            variant="outlined"
                           
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                           
                                  <MenuItem
                                   
                                  >
                                  jkl
                                  </MenuItem>
                                
                          </Select>
                        </FormControl>
                       
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Address</Typography>
                        <TextField
                          placeholder="Enter your address"
                          variant="outlined"
                          name="address"
                          disabled
                          fullWidth
                         
                        />
                       
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                      <Box>
                        <Typography variant="body1">Date of Birth</Typography>
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
                        <Typography variant="body1">IBI Name</Typography>
                        <TextField
                          placeholder="Enter your first name"
                          variant="outlined"
                          name="IBIName"
                          fullWidth
                         
                        />
                       
                      </Box>
                    </Grid>
                 
                  </Grid>
                </Box>
                
       
        </Box>
      </Box>
    </Box>
  );
}
