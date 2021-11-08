import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Services.css";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    img: "https://i.ibb.co/bRHmvmt/cavity.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est perferendis necessitatibus ipsa, dolorem aspernatur.",
  },
  {
    name: "Cavity Filling",
    img: " https://i.ibb.co/Qnvk9RG/fluoride.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est perferendis necessitatibus ipsa, dolorem aspernatur.",
  },
  {
    name: "Teath Whitening",
    img: "https://i.ibb.co/n7vpQQV/whitening.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est perferendis necessitatibus ipsa, dolorem aspernatur.",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ m: 2 }} variant="h6" component="div">
          Our Services
        </Typography>
        <Typography
          sx={{ fontWeight: 600, color: "success.main", m: 5 }}
          variant="h4"
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
