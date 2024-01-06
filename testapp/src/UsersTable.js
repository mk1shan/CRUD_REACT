import React from "react";
import { Paper,TableBody, Table, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";

const UsersTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
 
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
