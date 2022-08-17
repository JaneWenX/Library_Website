import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <StyledNav to="/contact">Contact Us</StyledNav>
      <StyledNav to="/location">Location</StyledNav>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background-color: black;
  margin: 0px;
  height: 7%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
  /* margin-top:-50px; */
`;
const StyledNav = styled(NavLink)`
  margin: 40px;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export default Footer;
