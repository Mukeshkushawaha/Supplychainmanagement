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

const DummyData = [
  {
    Contact: "9102537721",
    Email: "mksingh@mailinator.com",
    Name: "Mukesh",
    Status: "Active",
  },
  {
    Contact: "9102537721",
    Email: "mksingh@mailinator.com",
    Name: "Mukesh",
    Status: "Active",
  },
  {
    Contact: "9102537721",
    Email: "mksingh@mailinator.com",
    Name: "Mukesh",
    Status: "Active",
  },
  {
    Contact: "9102537721",
    Email: "mksingh@mailinator.com",
    Name: "Mukesh",
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

export default function OrderHistoryTable() {
  const classes = useStyles();
  const [suplier, setSuplier] = useState("0");

  return (
    <Box className={classes.tablemain}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h2">Contact list</Typography>
        </Box>

        <Box>
          <FormControl fullWidth style={{ minWidth: "200px" }}>
            <Select
              variant="outlined"
              name="country"
              value={suplier}
              onClick={(e) => setSuplier(e.target.value)}
            >
              <MenuItem value="0">Select user type</MenuItem>
              <MenuItem value={10}>Supplier</MenuItem>
              <MenuItem value={20}>Vendors</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box mt={2} width="100%">
        <Contactlist DummyData={DummyData} />
      </Box>
    </Box>
  );
}
