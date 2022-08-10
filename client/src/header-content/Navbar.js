import React from 'react'
import { ImHome } from "react-icons/im";
import {ImMenu} from "react-icons/im"
import styled from 'styled-components';
import { VscAccount } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
    <Div>
      <StyledNav to='/'>
    <ImHome size={25}/>
    </StyledNav>
    <ImMenu size={25}/>
    <Span>Welcome</Span>
    </Div>
    <Div>
    <StyledNav to='/signin'>
    <Span>My Account</Span>
    </StyledNav>
    <VscAccount size={25}/>
    </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height:10%;
    display: flex;
    align-items: center;
    background-color:lightgray;
    justify-content:space-between;

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
const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0px 50px;
`;
export default Navbar;