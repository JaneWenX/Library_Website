import React from 'react'
import { ImHome } from "react-icons/im";
import {ImMenu} from "react-icons/im"
import styled from 'styled-components';
import { VscAccount } from "react-icons/vsc";
const Navbar = () => {
  return (
    <Wrapper>
    <Div>
    <ImHome size={25}/>
    <ImMenu size={25}/>
    <Span>Welcome</Span>
    </Div>
    <Div>
    <Span>My Account</Span>
    <VscAccount size={25}/>
    </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height:10%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color:lightgray;
`
const Div = styled.div`
    margin:10px 15px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color:lightgray;
`
const Span = styled.span`
  font-size: 18px;
  font-weight:bold;
`

export default Navbar;