import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import ApiConfig from "src/config/ApiConfig";
import { toast } from "react-toastify";
import { calculateTimeLeft } from "src/utils/index";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { contractKovan, NetworkDetails } from "src/constants";
import { ACTIVE_NETWORK } from "src/constants";
import { SUPPORTED_WALLETS } from "src/connectors";
import {
  getWeb3ContractObject,
  getWeb3Obj,
  getContract,
} from "src/utils";
export const AuthContext = createContext();

const setSession = (accessToken) => {
  if (accessToken) {
    sessionStorage.setItem("token", accessToken);
    axios.defaults.headers.common.Authorization = `Creattur ${accessToken}`;
  } else {
    sessionStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};
function checkLogin() {
  const accessToken = window.sessionStorage.getItem("token");
  return accessToken ? true : false;
}

export default function AuthProvider(props) {
  const { activate, account, chainId, deactivate, library } = useWeb3React();
  const [isLogin, setIsLogin] = useState(checkLogin());
  //   const [userData, setUserBalanceData] = useState({});
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  const [endTime, setEndtime] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [kycData, setKycData] = useState([]);
  const [timeLeft, setTimeLeft] = useState();
  const connectToWallet = (data) => {
    if (data) {
      const connector = data.data?.connector;
      window.sessionStorage.removeItem("walletName");
      window.sessionStorage.setItem("walletName", data.name);
      // setErrorMsg("");
      // setSuccessMSG("");
      if (connector && connector.walletConnectProvider?.wc?.uri) {
        connector.walletConnectProvider = undefined;
      }
      activate(connector, undefined, true).catch((error) => {
        if (error) {
          console.log("error", error.message);
          // setwalletError(true);
          // toast.error(
          //   "Please add QIE chain network in your Metamask or switch to that network."
          // );
          // setErrorMsg(error.message);
          activate(connector);
          // setIsLoading(false);
          // setErrorPop(true);
        }
      });
    } else {
      setIsLoading(false);
    }
  };

  let data = {
    userLoggedIn: isLogin,
    userData,
    kycData,
    timeLeft,
    setTimeLeft,
    setEndtime,
    setIsLogin: setIsLogin,
    checkLogin: checkLogin,

    getProfileHandler: () => getProfileHandler(),
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
    },
  };
  const getProfileHandler = async () => {
    try {
      const res = await axios.get(ApiConfig.myAccount, {
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      if (res.data.status === 200) {
        setKycData(res?.data?.data?.kyc?.document?.reverse()[0]);
        setUserData(res?.data?.data);
      }
    } catch (error) {
      console.log("ERROR", error);
      setLoader(false);
    }
  };
  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime * 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });
  useEffect(() => {
    getProfileHandler();
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem("walletName")) {
      const selectectWalletDetails = SUPPORTED_WALLETS.filter(
        (data) => data.name === window.sessionStorage.getItem("walletName")
      );
      connectToWallet(selectectWalletDetails[0]);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
