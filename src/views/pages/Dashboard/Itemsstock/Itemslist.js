import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import { Link,useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { GrFormView } from "react-icons/gr";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from '@material-ui/icons/Visibility';

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

export default function Itemslist({ DummyData }) {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Box className={classes.tablemain}>
      <Box mt={2} width="100%">
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow className={`${classes.tablerow1} tableHead`}>
                <TableCell>S. No</TableCell>
                <TableCell>Supplier</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Shipping Type</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Transaction Hash</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DummyData &&
                DummyData?.map((data, i) => (
                  <TableRow>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>
                      {data?.Supplier ? data?.Supplier : "N/A"}
                    </TableCell>
                    <TableCell>{data?.Items ? data?.Items : "N/A"}</TableCell>
                    <TableCell>{data?.Shipping ? data?.Shipping : "N/A"}</TableCell>
                    <TableCell>{data?.Priority ? data?.Priority : "N/A"}</TableCell>
                    <TableCell>g5f6d7h5gfdg5hg6f</TableCell>
                    <TableCell>{data?.Status ? data?.Status : "N/A"}</TableCell>
                    <TableCell
                    
                    >
                      {/* <Link component={IconButton} to="/Shiping-process"> */}
                      <Link component={IconButton} 
                       onClick={() =>
                        history.push({
                          pathname: "/Shiping-process",
                          hash: "view",
                        })
                      }
                      >
                        <VisibilityIcon
                          style={{ fontSize: "25px", color: "#fff" }}
                        />
                      </Link>
                      <Link 
                        disabled
                      
                      >
                        {" "}
                        <EditIcon
                          style={{
                            fontSize: "1.2rem",
                            color: "#fff",
                            paddingRight: "10px",
                          }}
                        />
                      </Link>
                      <DeleteIcon
                        disabled
                        style={{ fontSize: "1.2rem", color: "#fff" }}
                      />
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
