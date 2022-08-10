import React from "react";
import styled from "styled-components";
const Location = () => {
  return (
    <Wrapper>
      <p>
        <Title> Address</Title>
        475, boulevard De Maisonneuve Est Montréal (Québec) H2L 5C4 Telephone:
        514 873-1100 (Montréal region) or 1 800 363-9028 (elsewhere in Québec)
        Fax: 514 873-9312
      </p>
      <p>
        <Title>Opening hours</Title>
        Monday: Closed Tuesday through Friday: 10 am to 9 pm Saturday and
        Sunday: 10 am to 5 pm
        <Title>Espace Jeunes (the children's library)</Title>
        Monday: Closed Tuesday through Friday: 10 am to 8 pm Saturday and
        Sunday: 10 am to 5 pm
        <Title>Le Square (the digital design lab)</Title>
        Sunday and Monday: Closed Tuesday and Wednesday: 1 pm to 5 pm Thursday
        and Friday: 1 pm to 9 pm Saturday: 10 am to 5 pm
        <Title>National Library</Title>
        Sunday and Monday: Closed Tuesday and Wednesday: 10 am to 9 pm Thursday
        through Saturday: 10 am to 5 pm
      </p>
      <p>
        <Title>BAnQ's Boutique</Title>
        (Closed) Visit the online Boutique: boutiquebanq.ca Parking 400 spaces
        (access through Avenue Savoie and Rue Berri)
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin-top:20px;
    padding: 20px;
    height:100%;
    display: flex;

`
const Title = styled.h3`
  font-size:20px;
  margin:10px 0px;
`
export default Location;
