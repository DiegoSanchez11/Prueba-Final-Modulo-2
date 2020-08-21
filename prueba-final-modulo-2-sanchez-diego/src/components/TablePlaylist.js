import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";


export const TablePlaylist = () => {
  return (
    <TableContainer component={Paper}>
      <Table className="" aria-label="simple table">
        <TableHead>
          <TableCell>{this.props.title}</TableCell>
          <TableRow>
            <TableCell align="right">{props.primero}</TableCell>
            <TableCell align="right">{props.segundo}</TableCell>
            <TableCell align="right">{props.tercero}</TableCell>
            <TableCell align="right">{props.cuarto}</TableCell>
            <TableCell align="right">{props.quinto}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePlaylist;
