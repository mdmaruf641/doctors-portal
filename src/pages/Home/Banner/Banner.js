import React from "react";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  height: 450,
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 14, color: "gray", fontWeight: 400, my: 3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              iure beatae nostrum corporis modi amet similique assumenda
              accusamus. Voluptatibus, recusandae.
            </Typography>
            <Button style={{ backgroundColor: "#6ACECE", color: "white" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{ width: 600 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
