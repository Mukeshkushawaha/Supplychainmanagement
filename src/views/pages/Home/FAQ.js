import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FaqData from "src/views/pages/Home/FaqData";
import { toast } from "react-toastify";
import ApiConfig from "src/config/ApiConfig";
import axios from "axios";
import NodatafoundImage from "src/component/NoDataFound";
import DataLoader from "src/component/DataLoader";
const FaqDataList1 = [
  {
    head: "What is the private documents section?",
    summary:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available .In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    head: "What is the private documents section?",
    summary:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available .In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    head: "What is the private documents section?",
    summary:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available .In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    head: "What is the private documents section?",
    summary:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available .In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    head: "What is the private documents section?",
    summary:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available .In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "100px 0px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "80px 0px",
    },
    "& h1": {
      marginBottom: "60px",
      fontSize: "30px",
    },
  },
}));

export default function FAQ() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [faqList, setFaqList] = useState([]);

  const listFaqHandler = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: ApiConfig.getfaqlist,
      });

      if (res.data.status === 200) {
        setFaqList(res.data.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    listFaqHandler();
  }, []);

  return (
    <div className={classes.root}>
      <div className="faqrightcss"></div>
      <Container>
        <Box>
          <Typography variant="h1">Frequently Asked Questions</Typography>
        </Box>
        <Box mt={4}>
          <Grid container spacing={2}>
            {faqList &&
              faqList?.map((data, i) => {
                return (
                  <Grid item xs={12} sm={12} md={12} key={i}>
                    <FaqData data={data} index={i} />
                  </Grid>
                );
              })}
            {!isLoading && faqList && faqList.length === 0 && (
              <NodatafoundImage data={"FAQ not found"} />
            )}
          </Grid>
          {isLoading && <DataLoader />}
        </Box>
      </Container>
    </div>
  );
}
