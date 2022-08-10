import React, { useState } from "react";
import styled from "styled-components";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = ()=>{

    
}

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>Email address</Label>
        <Input
          placeholder="Please enter email address"
          type="email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        ></Input>
        <Label>Password</Label>
        <Input
          placeholder="Please enter the password"
          type="password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        ></Input>
        <Button>LOG IN</Button>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0px;
  height: 100%;
`;
const Form = styled.form`
  height: 47%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 37%;
  margin-top: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2%;
  font-weight: bold;
`;
const Input = styled.input`
  margin: 5px 100px;
  padding: 10px;
`;
const Button = styled.button`
  margin: 30px 100px;
  padding: 10px;
  font-weight: bolder;
`;
const Label = styled.label`
  margin: 0px 90px;
  padding: 10px;
`;
export default SignIn;
