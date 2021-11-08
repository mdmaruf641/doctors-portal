import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "./../../../Hooks/useAuth";

const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${
      user.email
    }&date=${date.toLocaleDateString()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointments]);

  return (
    <div>
      <h2>Appointments: {appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Service</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.serviceName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;