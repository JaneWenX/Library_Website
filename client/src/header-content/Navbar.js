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
    <NavbarDropdown>
    <VscAccount size={25} cursor="pointer"/>
    <NavbarDropdownContent>
      <List to="/history">History</List>
      <List to="/myshare">My Shares</List>
      <List to="/like">My Favorites</List>
      <List to="/mycart">My Cart</List>
      {/* <List>Logout</List> */}
  </NavbarDropdownContent>
  </NavbarDropdown>
    </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height:10%;
    display: flex;
    align-items: center;
    background-color:lightgray;
    justify-content:space-around;
    color:white;
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
const NavbarDropdownContent = styled.ul`
   display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
`
const NavbarDropdown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${NavbarDropdownContent} {
      display: block;
    }
  `;

const List = styled(NavLink)`
  color: black;
  font-weight: bold;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
  &:hover {
  color:grey;
  display: block;
}
`
export default Navbar;