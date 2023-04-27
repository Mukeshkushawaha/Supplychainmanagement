import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  IconButton,
  FormControl,
  FormHelperText,
  Select,
} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ButtonCircularProgress from "./ButtonCircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import ApiConfig from "src/config/ApiConfig";
import axios from "axios";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  modaltext: {
    "& h5": {
      fontWeight: "300",
      "& span": {
        color: "rgba(255, 255, 255, 0.6)",
      },
    },
    "& .buttonboxes": {
      display: "flex",
      alignItems: "center",
      padding: "30px",
      "@media(max-width:442px)": {
        display: "block",
        padding: "20px",
      },
      "& button": {
        margin: "0px 10px",
        "@media(max-width:442px)": {
          margin: "10px 0px 0px",
        },
      },
    },
    "& .flexbox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "@media(max-width:533px)": {
        display: "block",
      },
    },
    "& .balancebox": {
      background: "rgba(255, 255, 255, 0.025)",
      backdropFilter: "blur(4px)",
      borderRadius: "10px",
      padding: "22px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "16px",
      "& h5": {
        fontWeight: "300",
      },
    },
  },
}));

export default function ClaimModal({
  claimOpen,
  handleClose,
  listOrderHistory,
  sendClaimData,
  claimableAmount,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [claimRequest, setClaimRequest] = useState("0");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const claimHandler = async () => {
    setIsSubmit(true);
    try {
      if (claimRequest != "0") {
        setIsLoading("claim");
        const res = await axios({
          method: "POST",
          url: ApiConfig.sendclaimrequest,
          headers: {
            authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
          params: {
            claimRequest: claimRequest,
          },
        });
        if (res.data.status === 200) {
          toast.success(res.data.message);
          setIsLoading(false);
          handleClose();
          listOrderHistory();
        } else {
          setIsLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <Dialog
      open={claimOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <Box className={classes.modaltext}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton style={{ padding: "0px" }}>
              <ClearIcon onClick={handleClose} style={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Box className="balancebox">
            <Typography variant="h5">Claimable Fiero Balance</Typography>
            <Typography
              variant="h5"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              {claimableAmount ? claimableAmount : 0}
            </Typography>
          </Box>
          <Box mb={2} mt={2}>
            <Typography variant="body1" style={{ marginBottom: "4px" }}>
              Claim Request
            </Typography>
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.forminput}
            >
              <Select
                name="claimRequest"
                value={claimRequest}
                onChange={(e) => setClaimRequest(e.target.value)}
                error={isSubmit && claimRequest === "0"}
                helperText={
                  isSubmit &&
                  claimRequest === "0" &&
                  "Please select claim Request"
                }
              >
                <MenuItem value="0">-Select Claim -</MenuItem>
                <MenuItem value="FULL">Full</MenuItem>
                <MenuItem value="PERDAY">Per Day</MenuItem>
              </Select>
            </FormControl>
            {isSubmit && claimRequest === "0" && (
              <FormHelperText error>Please select claim Request</FormHelperText>
            )}
          </Box>

          <Box className="buttonboxes">
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              fullWidth
              onClick={handleClose}
              disabled={isLoading === "claim"}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={claimHandler}
              // onClick={() => history.push("/vesting")}
            >
              Claim Now{isLoading === "claim" && <ButtonCircularProgress />}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
