import React from 'react'
import styled from 'styled-components'
import BANQ from '../assets/BANQ.png'
const Header = () => {
  return (
    <Wrapper>
    <Img src={BANQ}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 10%;
  background-color: black;
  color: white;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Img = styled.img`
  height: 85%;
  margin:5px;
`
export default Header