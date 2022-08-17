import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MyAccount = () => {
    const [profiles,setProfiles] = useState('')
    useEffect(()=>{
    axios
      .get("/api/account")
      .then((res) => {
        console.log(res.data.data[0].email)
        setProfiles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])

 const updateProfile =(e)=>{
    const _id = e.target.id;
    axios
    .put(`/api/account/${_id}`)
    .then((res) => {
        console.log(res)
        // setProfiles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
 }


  return (
    <Wrapper>
    <Title>Edit Profile</Title>
        <Form onSubmit={updateProfile}>

        <Span>Email</Span>
        {profiles&&<Input value={profiles[0].email}/>}
        <Span>First name</Span>
        <Input></Input>
        <Span>Last name</Span>
        <Input></Input>
        <Span>Preference</Span>
        {profiles&&<Input value={profiles[0].preference}/>}
        <Button type="submit">Submit Changes</Button>
    </Form>
    </Wrapper>
  )
}
const Form = styled.form`
  height: 47%;
  width: 30%;
  display: flex;
flex-direction:column;
justify-content:flex-start;
  font-weight: bold;
`;
const Button = styled.button`
  margin: 10px 100px;
  padding: 10px;
  font-weight: bolder;
`;
const Wrapper = styled.div`
    margin: 0px;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: center;
`
const Title = styled.div`
font-family: "Open Sans",sans-serif;
font-size: 2.8416rem;
margin: 30px 100px;
`
const Input = styled.input`
  margin: 10px 100px;
  padding: 10px;
  width: 200px;
  background-color:lightgray;
  border:none;
`
const Span = styled.label`
    font-family:"Roboto",Sans-Serif;
    font-size:1rem;
    margin: 10px 100px;

`
export default MyAccount