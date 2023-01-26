/* eslint-disable react/prop-types */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TableComponent({ rowEntries, handleDelete }: any) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '55vh' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="center">
              <b>Reading Number:</b>
            </TableCell> */}
            <TableCell align="center">
              <b>Employee Name:</b>
            </TableCell>
            <TableCell align="center">
              <b>Start</b>
            </TableCell>
            <TableCell align="center">
              <b>End</b>
            </TableCell>
            <TableCell align="center">
              <b>Actual Time</b>
            </TableCell>
            <TableCell align="center">
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowEntries?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell align="center">{row.id}</TableCell> */}

              <TableCell component="th" scope="row" align="center">
                {row.description ? row.description : '-'}
              </TableCell>
              <TableCell align="center">{row.timerStartTime}</TableCell>
              <TableCell align="center">{row.timerEndTime}</TableCell>
              <TableCell align="center">{row.secondsCount}</TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
