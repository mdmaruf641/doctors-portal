import React from "react";
import "./Service.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = (props) => {
  const { name, desc, img } = props.service;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ height: "80", width: "auto", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
