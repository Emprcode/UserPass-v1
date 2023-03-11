import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { CustomForm } from '../components/customFields/CustomForm'
import { MainLayout } from '../components/layout/MainLayout'

const Login = () => {

const inputs = [
  {
    label:"Email",
    type: "email",
    placeholder:"abc@email.com",
    name:"email",
    required:true
  },
  {
    type: "Password",
    label:"Password",
    placeholder:"*****",
    name:"password",
    required:true
  },
  
 
]

  return (
    <MainLayout> 
      <Container>
      <h2 className="p-3">Login Form</h2>
      <Form>
        {
          inputs.map((item, i) => <CustomForm key={i} {...item} /> )
        }
        
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
      </Container>
      
    </MainLayout>
  )
}

export default Login;