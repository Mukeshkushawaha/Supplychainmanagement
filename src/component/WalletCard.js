import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SendCoinModal from "./SendCoinModal";
import ReceiveCoinModal from "./ReceiveCoinModal";
import axios from "axios";
import ApiConfig from "src/config/ApiConfig";

const useStyles = makeStyles((theme) => ({
  maincardbox: {
    background: "rgba(255, 255, 255, 0.025)",
    borderRadius: "11.2757px",

    // backdropFilter: "blur(3.0845px)",
    "& h6": {
      fontWeight: "500",
      marginLeft: "6px",
    },
    "& h5": {
      fontWeight: "500",
      fontSize: "14px",
      color: "rgba(255, 255, 255, 0.6)",
    },
    "& .uppercontent": {
      padding: "15px",
    },
    "& .buttoncontent": {
      padding: "15px",
      [theme.breakpoints.down("sm")]: {
        padding: "8px",
      },
    },
    "& .buttonbox": {
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "40.2703px",
      padding: "4px",
      cursor: "pointer",
      zIndex: "999",
      position: "relative",
      "& img": {
        width: "100%",
        maxWidth: "42px",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "32px",
        },
      },
      "& p": {
        paddingLeft: "16px",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "8px",
        },
      },
    },
    "& .borderbox": {
      position: "relative",
      "&::after": {
        content: "''",
        height: "48px",
        width: "37px",
        position: "absolute",
        right: "-14px",
        top: "2px",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        [theme.breakpoints.down("sm")]: {
          height: "32px",
          top: "5px",
        },
      },
    },
  },
}));

function WalletCard(props) {
  const classes = useStyles();
  const { data } = props;
  const [openModal, setOpenModal] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [receiveData, setReceiveData] = useState("");
  const [sendData, setSendData] = useState("");
  const [coinDataDetail, setCoinDataDetail] = useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = (data) => {
    setOpenModal(true);
    setSendData(data);
  };
  const handleReceiveModal = (data) => {
    setOpenReceive(true);
    setReceiveData(data);
  };
  const handleCloseReceive = () => {
    setOpenReceive(false);
  };
  const [BNBpriceUSD, setBNBpriceUSD] = useState([]);
  const [AVTpriceUSD, setAVTpriceUSD] = useState();
  const current_price = AVTpriceUSD?.market_data?.current_price?.usd;

  const myBNBpriceUSD = async () => {
    axios({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=27&page=1&sparkline=false&price_change_percentage=1h%2C%2024h",
    })
      .then(async (res) => {
        if (res.status === 200) {
          setBNBpriceUSD(res.data);

          // setState(1);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const myAVTpriceUSD = async () => {
    axios({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/artverse-token",
    })
      .then(async (res) => {
        if (res.status === 200) {
          setAVTpriceUSD(res.data);
          // setState(1);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    myBNBpriceUSD();
    myAVTpriceUSD();
  }, []);
  const getAllCoinDetail = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: ApiConfig.getcoindetails,
        params: {
          coinName: data?.coinData?.coinShortName,
        },
      });
      if (res.data.status === 200) {
        setCoinDataDetail(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllCoinDetail();
  }, []);

  return (
    <>
      <Box className={classes.maincardbox}>
        <Box className="uppercontent">
          <Box display="flex" alignItems="center" mb={1}>
            <img
              src={data?.coinData?.coinImage}
              alt=""
              width="100%"
              style={{ width: "100%", maxWidth: "30px" }}
            />
            <Typography variant="h6">
              {data?.coinData?.coinFullName}({data?.coinData?.coinShortName})
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography variant="h5">Total Balance:</Typography>
            <Typography variant="body2">
              {" "}
              {data?.coinBalance?.totalBalance
                ? data?.coinBalance?.totalBalance
                : 0}
            </Typography>
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Typography variant="h5">
              1 {data?.coinData?.coinShortName}
            </Typography>
            <Typography variant="body2">
              <Box>
                {data?.coinData?.coinShortName === "BTC" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "btc" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {data?.coinData?.coinShortName === "ETH" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "eth" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {data?.coinData?.coinShortName === "USDT" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "usdt" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>

              <Box>
                {data?.coinData?.coinShortName === "TRX" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "trx" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {/* {data?.coinData?.coinShortName === "FIERO" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "Fiero" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )} */}
                {/* -----------------------firo price in usd------- */}
                {data?.coinData?.coinShortName === "FIERO" ? (
                  <>$ {coinDataDetail?.marketPriceFierex} USD</>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {data?.coinData?.coinShortName === "BNB" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "bnb" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>
              <Box>
                {data?.coinData?.coinShortName === "MATIC" ? (
                  <>
                    {BNBpriceUSD?.map((data, i) => {
                      return (
                        <>
                          {data.symbol === "matic" ? (
                            <>{`$${parseFloat(data.current_price).toFixed(
                              2
                            )}`}</>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
              </Box>
            </Typography>
          </Box>
        </Box>
        {/* <Box mt={3}>
          <Divider />
        </Box>
        <Box className="buttoncontent">
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Box className="borderbox">
                <Box
                  className="buttonbox"
                  onClick={() => handleOpenModal(data)}
                >
                  <Box display="flex" alignItems="center">
                    <img src="images/coin/sentcoin.png" alt="" />
                    <Typography variant="body2">Send</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Box
                className="buttonbox"
                onClick={() => handleReceiveModal(data)}
              >
                <Box display="flex" alignItems="center">
                  <img
                    src="images/coin/receivecoin.png"
                    alt=""
                    style={{ transform: "rotate(168deg)" }}
                  />
                  <Typography variant="body2">Receive</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
      <SendCoinModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        data={data}
        sendData={sendData}
        coinDataDetail={coinDataDetail}
      />
      <ReceiveCoinModal
        openReceive={openReceive}
        handleCloseReceive={handleCloseReceive}
        receiveData={receiveData}
        data={data}
      />
    </>
  );
}

export default WalletCard;
