import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableRow,
  Divider,
  IconButton,
  MenuItem,
  DialogActions,
  TextField,
  DialogContentText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect, useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import AddIcon from "@material-ui/icons/Add";
import { toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import { UserContext } from "src/context/User";
//   import DataLoading from "src/component/DataLoading";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DialogContent from "@material-ui/core/DialogContent";
// import MarketplaceCard from "src/component/MarketplaceCard";
import { useHistory, useLocation } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
//   import DataNotFound from "src/component/DataNotFound";
import { Tooltip } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "35px 0",
    },
    "& h3": {
      fontWeight: 700,
      fontSize: "30px",
      color: "#262424",
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },
  nftcard: {
    "& .nftDetailbox": {
      boxShadow:
        "1px 3px 2px -1px #ff5d0c, 0px 1px 0px 0px #ff5d0c, 0px 1px 3px 0px #ff5d0c",
      boxSizing: "border-box",
    },
    "& .nftDetailbox1": {
      boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
      boxSizing: "border-box",
      border: "1px solid #A8CEDF",
    },
  },
  nftImg: {
    width: "100%",

    overflow: "hidden",
    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",
    borderRadius: "10px 10px 10px 10px",
  },
  tabBtn: {
    "& button": {
      fontWeight: "400",
      fontSize: "14px",
      height: "40px",
      minWidth: "100px",
      borderRadius: "10px",
      marginRight: " 12px",
      color: theme.palette.primary.main,
      [theme.breakpoints.only("xs")]: {
        minWidth: "80px",
        marginRight: " 5px",
        fontSize: "12px",
      },
      "&.active": {
        background: theme.palette.background.tab,
        color: theme.palette.text.primary,
      },
    },
  },
  imagesSection: {
    "& img": {
      height: "70px",
      borderRadius: "5px",
      objectFit: "cover",
    },
  },
  time: {
    paddingRight: "25px",
    "& h6": {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "130%",
      color: "#C6BECC",
    },
  },
  tableroot: {
    "& .MuiTableCell-root": {
      textAlign: "left",
    },
    "& .tableHead": {
      // backgroundColor: '#ECECEC',
      "& th": {
        whiteSpace: "pre",
        fontSize: "16px",
        fontWeight: "500",
        padding: "15px 23px",
        borderBottom: "none",
      },
    },
    "& .descriptionbox": {
      whiteSpace: "pre-line",
      "@media(max-width:768px)": {
        whiteSpace: "nowrap",
      },
    },
  },

  tableRow1: {
    "& td": {
      textAlign: "left",

      color: "#808080",
      whiteSpace: "pre",
      fontSize: "14px",
      fontWeight: "400",
      padding: "17px 23px",
      // borderBottom: '1px solid #E0E0E0',
      // background: '#FFFFFF',
    },
    "& th": {
      color: theme.palette.text.black,
      whiteSpace: "pre",
      backgroundColor: "#ECECEC",
    },
  },
  tabletopbox: {
    // background: "linear-gradient(261.87deg, #62D3F0 13.12%, #35A5F5 83.57%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "23px",
    marginTop: "70px",
    minHeight: "52px",
    maxHeight: "52px",
    "& .addbox": {
      width: "28px",
      height: "28px",
      borderRadius: "100%",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        color: "rgb(13, 140, 205)",
      },
    },

    "& h4": {
      fontWeight: "400",
      // color: '#fff',
    },
  },
  dialogsec: {
    "& .MuiDialog-paperWidthXs": {
      maxWidth: "610px",
      overflowY: "auto",
      overflowX: "hidden",
      height: "600px",
      minHeight: "600px",
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
    },
  },
  dialogsec1: {
    "& .MuiDialog-paperWidthXs": {
      maxWidth: "650px",
      overflowY: "auto",
      overflowX: "hidden",
      height: "650px",
      minHeight: "600px",
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
    },
  },
  dialogsec2: {
    "& .MuiDialog-paperWidthXs": {
      maxWidth: "600px",
      overflowY: "auto",
      overflowX: "hidden",
      height: "341px",
      minHeight: "341px",
    },
    "& .MuiFormHelperText-contained": {
      color: "red",
    },
  },
  infomodal: {
    marginTop:"75px",
    "& h1": {
      fontSize: "30px",
      fontWeight: "600",
      // color: "#4da7f0",
      textAlign: "center",
      marginBottom: "16px",
    },
    "& h4": {
      fontWeight: "400",
      // color: "#000000",
      marginBottom: "10px",
    },
    "& h6": {
      fontWeight: "400",
      // color: "#646464",
    },
    "& h5": {
      fontWeight: "300",
      marginBottom: "5px",
      // color: "#000000",
      fontSize: "16px",
      fontWeight: "400",
    },
  },
  formControl: {
    width: "100%",
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      paddingRight: "32px",
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  },
  butm: {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: "0",
    right: "0",
  },
  mainBox: {
    marginTop: "35px",
  },
}));

export default function Nft() {
  const [tabview, setTabView] = useState("details");
  const classes = useStyles();
  const user = useContext(UserContext);
  const location = useLocation();
  // const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingtrack, setIsLoadingtrack] = useState(false);
  const { account } = useWeb3React();
  const [trakingdatalist, setTrakingdata] = useState([
    {
      date: "12/04/23",
      trackingStatus:"Packed",
      companyName:"Mobiloitte",
      trackingId:"12njnnj3",
      comment:"hi mukesh"
    },
    {
      date: "12/04/23",
      trackingStatus:"Packed",
      companyName:"Mobiloitte",
      trackingId:"12njnnj3",
      comment:"hi mukesh"
    },
    {
      date: "12/04/23",
      trackingStatus:"Packed",
      companyName:"Mobiloitte",
      trackingId:"12njnnj3",
      comment:"hi mukesh"
    },
    {
      date: "12/04/23",
      trackingStatus:"Packed",
      companyName:"Mobiloitte",
      trackingId:"12njnnj3",
      comment:"hi mukesh"
    },
    {
      date: "12/04/23",
      trackingStatus:"Packed",
      companyName:"Mobiloitte",
      trackingId:"12njnnj3",
      comment:"hi mukesh"
    },
  ]);
  const [trakingpreviousOwner, setTrakingpreviousOwner] = useState();
  const [trackingaddress, setTrackingaddress] = useState();
  const [userAddressaddress, setuserAddressaddress] = useState("");
  const [selectdata, setSelectdata] = useState("PACKED");
  const [dataList, setDataList] = useState();
  const [datetime, setDatetime] = useState("");
  const [isSubmit1, setIsSubmit1] = useState(false);
  const [description, setDescription] = useState("");
  const [open3, setOpen3] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [openId, setOpenId] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [trackingid, setTrackingId] = useState("");
  const handleClickOpen5 = (id) => {
    setOpen5(true);
    setOpenId(id);
  };
  const [comment, setComment] = React.useState([]);
  const OpenModal = (comment) => {
    setComment(comment);
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
  }
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    arrows: true,
    className: "recomended",
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
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
          slidesToShow: 2,
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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [mobileNumber, setFieldValue] = useState();
  const [modaldata, setModaldata] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const currentDate = new Date();

  // const ItemrecieveHandle = async () => {
  //   setIsLoading("item");
  //   try {
  //     const res = await axios({
  //       method: "POST",
  //       url: Apiconfig.addtracking,
  //       headers: {
  //         token: window.sessionStorage.getItem("token"),
  //       },
  //       data: {
  //         nftId: orderDetails?._id,
  //         userId: orderDetails?.userId?._id,
  //         trackingStatus: "COMPLETE",
  //         previousOwner: trakingpreviousOwner,
  //       },
  //     });
  //     if (res.data.statusCode === 200) {
  //       toast.success("Item recieved successfully.");
  //       setIsLoading(false);
  //       window.location.href = `/view-nft?${orderId}`;
  //       setOpen5(false);
  //       ListtrakingHandle();
  //     } else {
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };
  // const ListtrakingHandle = async (id) => {
  //   setIsLoadingtrack(true);
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       url: Apiconfig.listTracking,
  //       headers: {
  //         token: window.sessionStorage.getItem("token"),
  //       },
  //       params: {
  //         nftId: id ? id : orderDetails?._id,
  //       },
  //     });
  //     if (res.data.statusCode === 200) {
  //       setTrakingdata(res.data.result);
  //       // setTrakingpreviousOwner(res.data.result[0]?.previousOwner?._id);
  //       setTrackingaddress(res.data.result[0]?._id);
  //       setuserAddressaddress(res.data.result[0]?.addressId);
  //       setIsLoadingtrack(false);
  //       setModaldata(res.data.result[0]);
  //     } else {
  //       setIsLoadingtrack(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoadingtrack(false);
  //   }
  // };
  // useEffect(() => {
  //   ListtrakingHandle(orderDetails?._id);
  // }, [user?.userData]);

  // const submitAddressHanlder = async () => {
  //   setIsSubmit(true);
  //   if (
  //     namedata !== "" &&
  //     emaildata !== "" &&
  //     mobileNumber !== "" &&
  //     description1 !== ""
  //   ) {
  //     setIsLoading1(true);
  //     try {
  //       const res = await axios({
  //         method: "PUT",
  //         url: Apiconfig.submitaddress,
  //         headers: {
  //           token: window.sessionStorage.getItem("token"),
  //         },
  //         params: {
  //           _id: trackingaddress,
  //         },
  //         data: {
  //           namedata: namedata,
  //           emaildata: emaildata,
  //           mobileNumber: mobileNumber,
  //           description1: description1,
  //         },
  //       });

  //       if (res.data.statusCode === 200) {
  //         toast.success("Address fetch successful");
  //         setIsLoading1(false);

  //         setOpen1(false);
  //         setNameData("");
  //         setEmailData("");
  //         setFieldValue("");
  //         setDescription1("");
  //       } else {
  //         setIsLoading1(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading1(false);
  //     }
  //   }
  // };


  let types = window.location;
  // const type = "add";
  const type = types.hash.split("#")[1];
  console.log("hlloe",type)
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.tableroot}>
          <Box className={classes.tabletopbox}>
            <Typography variant="h4" color="primary" style={{color:"#fff"}}>
            {type == "view" ? "Tracking info":"Recent Tracking info"}  
            </Typography>

            <IconButton onClick={() => handleClickOpen()}>
             
                <Box className="addbox">
                  <AddIcon />
                </Box>
              
            </IconButton>
          </Box>
         

          <TableContainer>
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow className={`${classes.tablerow1} tableHead`}>
                  <TableCell>Date and time</TableCell>
                  <TableCell>Shipment Status</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Tracking ID</TableCell>
                  <TableCell>Discription</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {trakingdatalist.map((data) => (
                    <TableRow className={classes.tableRow1}>
                      <TableCell style={{ borderRight: "none" }}>
                        {data?.date
                       }
                      </TableCell>{" "}
                      <TableCell style={{ borderRight: "none" }}>
                        {data.trackingStatus ? data.trackingStatus : "N/A"}
                      </TableCell>{" "}
                      <TableCell style={{ borderRight: "none" }}>
                        {data.companyName ? data.companyName : "N/A"}
                      </TableCell>{" "}
                      <TableCell style={{ borderRight: "none" }}>
                        {data.trackingId ? data.trackingId : "N/A"}
                      </TableCell>{" "}
                      <TableCell
                        className="descriptionbox"
                        style={{
                          display: " flex",
                          // justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "450px",
                          }}
                        >
                          {data?.comment ? data?.comment : "N/A"}
                        </Typography>
                        <BootstrapTooltip title="View more">
                          <VisibilityIcon
                            onClick={() => {
                              OpenModal(data?.comment);
                            }}
                            // onClick={() => {
                            //   setOpen(true);
                            // }}
                            style={{
                              fontSize: "20px",
                              cursor: "pointer",
                              margin: "0px 5px",
                            }}
                          />
                        </BootstrapTooltip>{" "}
                      </TableCell>
                    </TableRow>
                  ))}
                  {!isLoadingtrack &&
                    trakingdatalist &&
                    trakingdatalist.length === 0 && (
                      <Box
                        style={{
                          dislay: "flex",
                          justifyContent: "center",
                          marginTop: "1rem",
                        }}
                      >
                      </Box>
                    )}
                  {isLoadingtrack && (
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        marginTop: "10px",
                      }}
                    >
                      <ButtonCircularProgress />
                    </Box>
                  )}
                </TableBody>
            </Table>
          </TableContainer>

          <div>
            <Dialog
              open={open3}
              onClose={handleClose3}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  style={{ whiteSpace: " break-spaces" }}
                >
                  {comment ? comment : "N/A"}
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </Box>
        <Box mt={2}>
          {dataList?.previousOwner.walletAddress.toLowerCase() ===
            account?.toLowerCase() && (
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => handleClickOpen2(modaldata)}
              >
                View Address
                {isLoading === "item" && <ButtonCircularProgress />}
              </Button>
            </Box>
          )}
        </Box>
       
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                // disabled={
                //   isLoading === "item" ||
                //   dataList?.delivered === true ||
                //   trakingdatalist.length === 0
                // }
                onClick={() => handleClickOpen1()}
              >
                Delivered to
                {/* {isLoading === "item" && <ButtonCircularProgress />} */}
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{ marginLeft: "10px" }}
                disabled={
                  isLoading === "item" ||
                  dataList?.delivered === true ||
                  trakingdatalist.length === 0
                }
                onClick={() => handleClickOpen5(trackingaddress)}
                // onClick={() => ItemrecieveHandle()}
              >
                Item received{" "}
                {isLoading === "item" && <ButtonCircularProgress />}
              </Button>
            </Box>
         

        <Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
            fullWidth
            className={classes.dialogsec}
          >
            <DialogContent style={{ paddingTop: "0px" }}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setOpen(false)}
                  className={classes.closeButton}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box className={classes.infomodal}>
                <Typography variant="h1" color="primary">
                  Add Traking Details
                </Typography>
                <Box mb={2}>
                  <Divider />
                </Box>
                <Box>
                  <Typography variant="h5" color="primary">
                    Shipment status
                  </Typography>
                </Box>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    value={selectdata}
                    onChange={(e) => setSelectdata(e.target.value)}
                    name="Gender"
                    inputProps={{ "aria-label": "Without label" }}
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="PACKED">Packed</MenuItem>
                    <MenuItem value="SHIPPING">Shipping</MenuItem>
                    <MenuItem value="DISPATCH">Dispatch</MenuItem>
                    {/* <MenuItem value="COMPLETE">Complete</MenuItem> */}
                    <MenuItem value="DELIVERED">Delivered</MenuItem>
                  </Select>
                </FormControl>
                {selectdata === "SHIPPING" && (
                  <>
                    <Box mt={2}>
                      <Typography variant="h5" color="primary">
                        Company name
                      </Typography>
                    </Box>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="message"
                      type="name"
                      inputProps={{ maxLength: 100 }}
                      placeholder="Please enter company name"
                      value={companyname}
                      onChange={(e) => setCompanyName(e.target.value)}
                      helperText={
                        isSubmit1 &&
                        companyname === "" &&
                        "Please enter company name"
                      }
                    />
                    <Box mt={2}>
                      <Typography variant="h5" color="primary">
                        Tracking ID
                      </Typography>
                    </Box>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      name="message"
                      type="name"
                      inputProps={{ maxLength: 50 }}
                      placeholder="Please enter tracking ID"
                      value={trackingid}
                      onChange={(e) => setTrackingId(e.target.value)}
                      helperText={
                        isSubmit1 &&
                        trackingid === "" &&
                        "Please enter tracking id"
                      }
                    />
                  </>
                )}
                <Box mt={2}>
                  <Typography variant="h5" color="primary">
                    Date and time
                  </Typography>
                </Box>
                <TextField
                  type="datetime-local"
                  id="datetime-local"
                  variant="outlined"
                  fullWidth
                  name="fromDate"
                  defaultValue={currentDate}
                  format="DD/MM/yyyy hh:mm"
                  minDate={new Date()}
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                  error={isSubmit1 && datetime === ""}
                  helperText={
                    isSubmit1 &&
                    datetime === "" &&
                    "Please select date and time"
                  }
                />
                <Box mt={2}>
                  <Typography variant="h5" color="primary">
                    Discription
                  </Typography>
                </Box>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  name="message"
                  type="name"
                  multiline
                  inputProps={{ maxLength: 500 }}
                  rowsMax={5}
                  rows={5}
                  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  helperText={
                    isSubmit1 &&
                    description === "" &&
                    "Please enter description"
                  }
                />
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mt={3}
                >
                  <Button variant="contained" size="large" color="primary">
                    Submit
                  </Button>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
        <Box>
          <Dialog
            open={open1}
            onClose={handleClose1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
            fullWidth
            className={classes.dialogsec1}
          >
            <DialogContent style={{ paddingTop: "0px" }}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setOpen1(false)}
                  className={classes.closeButton}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box className={classes.mainBox}>
                <Box className="termsAndConditions">
                  <Box>
                    <Typography variant="h3" color="primary">
                      User Details
                    </Typography>
                  </Box>
                  <Box></Box>
                  <Box mt={3}>
                    <Grid container spacing={1}>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Box>
                          <Typography variant="h6" color="primary">
                            First Name{" "}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          mukesh rah
                        </Typography>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Email{" "}
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          tesingaE@mailinator.com
                        </Typography>
                      </Grid>

                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Phone Number
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          9873783883
                        </Typography>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Full Address
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          Delhi
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
        <Box>
          <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
            fullWidth
            className={classes.dialogsec2}
          >
            <DialogContent style={{ paddingTop: "0px" }}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setOpen2(false)}
                  className={classes.closeButton}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box className={classes.mainBox}>
                <Box className="termsAndConditions">
                  <Box>
                    <Typography variant="h3" color="primary">
                      User Details
                    </Typography>
                  </Box>
                  <Box></Box>
                  <Box mt={3}>
                    <Grid container spacing={1}>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Box>
                          <Typography variant="h6" color="primary">
                            First Name{" "}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          mukesh kushawaha
                        </Typography>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Email{" "}
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          mukesh@mailinaor.com
                        </Typography>
                      </Grid>

                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Phone Number
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          lkjhfghjkl;
                        </Typography>
                      </Grid>
                      <Grid item lg={3} md={3} sm={3} xs={12}>
                        <Typography variant="h6" color="primary">
                          Full Address
                        </Typography>
                      </Grid>
                      <Grid item lg={9} md={9} sm={9} xs={12}>
                        <Typography variant="body1" color="primary">
                          fghjklkjh
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </DialogContent>
          </Dialog>
        </Box>
        <Box>
          <Dialog
            open={open5}
            // onClose={handleClose5}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            maxWidth="xs"
          >
            <DialogContent style={{ paddingTop: "0px" }}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => setOpen5(false)}
                  className={classes.closeButton}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <DialogContentText
                color="primary"
                id="alert-dialog-slide-description"
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "35px",
                }}
              >
                Are you sure want to received item ?
              </DialogContentText>
            </DialogContent>
            <DialogActions
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={classes.butm}>
                <Button
                  style={{ marginRight: "5px" }}
                  // onClick={() => {
                  //   ItemrecieveHandle(openId);
                  // }}
                  variant="contained"
                  color="primary"
                >
                  Yes
                </Button>
                <Button
                  style={{ marginLeft: "5px" }}
                  onClick={handleClose5}
                  variant="outlined"
                  color="primary"
                >
                  No
                </Button>
              </Box>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </Box>
  );
}
