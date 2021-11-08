import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../Hooks/useAuth";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                name="name"
                type="text"
                onChange={handleOnChange}
                id="standard-basic"
                label="Name"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                name="email"
                type="email"
                onChange={handleOnChange}
                id="standard-basic"
                label="Email"
                variant="standard"
              />
              <br />

              <TextField
                sx={{ width: "75%", m: 1 }}
                name="password"
                onChange={handleOnChange}
                id="standard-basic"
                type="password"
                label="Password"
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                name="password2"
                onChange={handleOnChange}
                id="standard-basic"
                type="password"
                label="Confirm Password"
                variant="standard"
              />
              <br />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
