import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      // collect data
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // send to the server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    handleBookingClose();
  };
  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            sx={{ width: "90%", m: 1 }}
            disabled
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="patientName"
            id="outlined-size-small"
            defaultValue={user.displayName}
            onBlur={handleOnBlur}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="email"
            id="outlined-size-small"
            defaultValue={user.email}
            onBlur={handleOnBlur}
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            name="phone"
            onBlur={handleOnBlur}
            id="outlined-size-small"
            placeholder="Your Phone Number"
            size="small"
          />
          <TextField
            sx={{ width: "90%", m: 1 }}
            disabled
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
