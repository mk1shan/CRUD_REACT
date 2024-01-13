import React from "react";
import { Paper, TableBody, Table, TableContainer, TableHead, TableRow, TableCell, Button } from "@mui/material";

const UsersTable = ({rows,selectedUser}) => {


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
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope="row">{row.id}</TableCell>
                <TableCell component='th' scope="row">{row.name}</TableCell>
                <TableCell>
                  <Button sx={{ margin: '0px 10px' }} onClick={() => selectedUser({id:row.id,name:row.name})}>
                    Update
                  </Button>
                  <Button sx={{ margin: '0px 10px' }} onClick={() => {}}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope="row" colSpan={3}>
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
