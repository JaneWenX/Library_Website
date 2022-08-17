import React from "react";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <Wrapper>
      <Title>By phone</Title>
      <p>514 873-1100 ou 1 800 363-9028</p>
      <Title>In person</Title>
      <p>
        Bibliothèque et Archives nationales du Québec 475, boulevard De
        Maisonneuve Est Montréal (Québec) H2L 5C4
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    margin-top:20px;
    padding: 20px;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
`;
const Title = styled.h3`
  font-size:20px;
  margin:20px 0px;
`
export default ContactUs;
