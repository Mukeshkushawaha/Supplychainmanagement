import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { toast } from "react-toastify";
import { sortAddress } from "src/utils";
import moment from "moment";
import { BiCopy } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import OrderDetailView from "src/component/OrderDetailView";
import NodatafoundImage from "src/component/NoDataFound";
import DataLoader from "src/component/DataLoader";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  table: {
    overflow: "auto",
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

export default function OrderHistoryTable({
  DummyData,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.tablemain}>
      <Box mt={2} width="100%">
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow className={`${classes.tablerow1} tableHead`}>
                <TableCell>S. No</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Estimated Arrival</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DummyData &&
                DummyData?.map((data, i) => (
                  <TableRow>
                    <TableCell>
                      {i+1}
                    </TableCell>
                    <TableCell>
                      {data?.Supplier ? data?.Supplier : "N/A"}
                    </TableCell>
                    <TableCell>
                      {data?.Estimateddate ? data?.Estimateddate : "N/A"}
                    </TableCell>
                    <TableCell>
                      {data?.Status ? data?.Status : "N/A"}
                    </TableCell>
                    <TableCell>
                      {data?.Description ? data?.Description : "N/A"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
