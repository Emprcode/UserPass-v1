import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { CustomForm } from "../components/customFields/CustomForm";
import { MainLayout } from "../components/layout/MainLayout";

const Register = () => {
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
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "******",
      name: "confirmPassword",
      required: true,
    },
  ];

  return (
    <MainLayout>
      <Container>
        <h2 className="p-3">Registration Form</h2>
        <Form>
          {inputs.map((item, i) => (
            <CustomForm key={i} {...item} />
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
