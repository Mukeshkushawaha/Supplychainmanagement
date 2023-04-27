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
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { GrFormView } from "react-icons/gr";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";

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

export default function OrderHistoryTable({ DummyData }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.tablemain}>
      <Box mt={2} width="100%">
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow className={`${classes.tablerow1} tableHead`}>
                <TableCell>S. No</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Name</TableCell>
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
                      {data?.Contact ? data?.Contact : "N/A"}
                    </TableCell>
                    <TableCell>{data?.Email ? data?.Email : "N/A"}</TableCell>
                    <TableCell>{data?.Name ? data?.Name : "N/A"}</TableCell>
                    <TableCell>{data?.Status ? data?.Status : "N/A"}</TableCell>
                    <TableCell>
                      {/* <Link component={IconButton} to="/Shiping-process"> */}
                      <Link component={IconButton} disabled>
                        <VisibilityIcon
                          style={{ fontSize: "25px", color: "#fff" }}
                        />
                      </Link>
                      <Link component={IconButton} to="/edit-profile" disabled>
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
