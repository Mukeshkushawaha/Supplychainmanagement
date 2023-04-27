import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Contactlist from "src/views/pages/Dashboard/Contactus/Contactlist";
import Itemslist from "./Itemslist";

const DummyData = [
  {
    Supplier: "FTGH",
    Items: "chips",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
  {
    Supplier: "Gjkhgh",
    Items: "soldering wires",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
  {
    Supplier: "FTGH",
    Items: "motherboards",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
  {
    Supplier: "HDG-2A",
    Items: "chips",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
  {
    Supplier: "FTGH",
    Items: "soldering wires",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
  {
    Supplier: "FTGH01",
    Items: "motherboards",
    Shipping: "On road",
    Priority: "Low",
    Status: "Active",
  },
 
 
];

const useStyles = makeStyles((theme) => ({
  table: {
    overflow: "auto",
  },
  tablemain: {
    "& .MuiSelect-icon": {
      color: "#fff",
    },
  },
  tableRow1: {
    "& td": {
      whiteSpace: "nowrap",
      color: "#000",
    },
    "& th": {
      whiteSpace: "pre",
      color: "#000",
    },
  },
}));

export default function Items() {
  const classes = useStyles();
  const [suplier, setSuplier] = useState("0");

  return (
    <Box className={classes.tablemain}>
      <Box >
        <Box>
          <Typography variant="h2">Items</Typography>
        </Box>
       
      </Box>
      <Box mt={2} width="100%">
        <Itemslist DummyData={DummyData} />
      </Box>
    </Box>
  );
}
