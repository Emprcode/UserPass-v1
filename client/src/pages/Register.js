import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomForm } from "../components/customFields/CustomForm";
import { MainLayout } from "../components/layout/MainLayout";
import { registerUser } from "../helper/axiosHelper";

const Register = () => {
  const [formData, setFormData] = useState({});
  const inputs = [
    {
      label: "Username",
      type: "text",
      placeholder: "abc",
      name: "name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "abc@email.com",
      name: "email",
      required: true,
    },
    {
      type: "Password",
      label: "Password",
      placeholder: "*****",
      name: "password",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await registerUser(formData);
    toast[status](message);
  };
  return (
    <MainLayout>
      <Container>
        <h2 className="p-3">Registration Form</h2>
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((item, i) => (
            <CustomForm key={i} {...item} onChange={handleOnChange} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </MainLayout>
  );
};

export default Register;
