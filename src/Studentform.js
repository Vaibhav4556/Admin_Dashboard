import React, { useEffect, useState } from "react";

import { Form, FormGroup, Label, Input, Container } from "reactstrap";
import axios from "axios";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

let initialValues = {
  name: "",
  email: "",
  mobileNumber: "",
  batch: "",
  status: "",
  program: "",
};

const Studentform = () => {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormdata] = useState(initialValues);

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
     if(id)
      
        fetch("https://6300763b34344b643108c047.mockapi.io/users/"+id).then((response)=>response.json())
        .then((data) => setFormdata(data));
  }, [id]);

  const handleSubmit = () => {
    if (id){
      axios
      .put(
        "https://6300763b34344b643108c047.mockapi.io/users/"+id,
        JSON.stringify(formData),
        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then((data) => setFormdata(initialValues));
  }
    else{
    
    axios
      .post(
        "https://6300763b34344b643108c047.mockapi.io/users",
        JSON.stringify(formData),
        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then((data) => setFormdata(initialValues));
    }
  };

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            value={formData.name}
            onChange={handleChange}
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input  value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobileNumber">mobileNumber</Label>
          <Input  value={formData.mobileNumber}
            onChange={handleChange}
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile No"
            type="mobileNumber"
          />
        </FormGroup>
        <FormGroup>
          <Label for="batch">Batch</Label>
          <Input  value={formData.batch}
            onChange={handleChange}
            id="batch"
            name="batch"
            placeholder="Enter Batch"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="status">Status</Label>
          <Input  value={formData.status}
            onChange={handleChange}
            id="status"
            name="status"
            placeholder="Enter Status"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="program">Program</Label>
          <Input  value={formData.program}
            onChange={handleChange}
            id="program"
            name="program"
            placeholder="Enter Program"
            type="text"
          />
        </FormGroup>
        <Button onClick={handleSubmit}> Submit </Button>
      </Form>
    </Container>
  );
};

export default Studentform;
