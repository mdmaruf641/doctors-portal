import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("https://floating-tundra-41181.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("doctor added successfully");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  return (
    <div>
      <h2>Add A Doctor</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%", m: 1 }}
          label="Name"
          required
          type="text"
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%", m: 1 }}
          label="Email"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />
        <br />
        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
