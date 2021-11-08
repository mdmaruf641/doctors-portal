import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "./../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://floating-tundra-41181.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);

          setSuccess(true);
        }
      });
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button sx={{ ml: 2, mt: 1 }} variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin created successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
