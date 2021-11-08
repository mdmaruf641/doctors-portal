import React, { useState } from "react";
import { Grid, Container, Typography, Alert } from "@mui/material";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9:00AM",
    space: "10 SPACES AVAILABLE",
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05AM - 11:30AM",
    space: "15 SPACES AVAILABLE",
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00PM - 6:30PM",
    space: "14 SPACES AVAILABLE",
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00AM - 8:30AM",
    space: "20 SPACES AVAILABLE",
  },
  {
    id: 5,
    name: "Rote Cannel",
    time: "7:00pM - 9:00PM",
    space: "7 SPACES AVAILABLE",
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9:00AM",
    space: "10 SPACES AVAILABLE",
  },
];

const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
      <Typography
        sx={{ color: "info.main", fontWeight: 500, mb: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Available Appointment {date.toDateString()}
      </Typography>
      {bookingSuccess && (
        <Alert severity="success">Appointment Book successfully!</Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
