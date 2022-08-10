import React from 'react'
import styled from 'styled-components'
import View from './slideshow-gallery'

const Homepage = () => {
  return (
    <Wrapper>
        <View/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 0px;
    height:85%;
    display: flex;
`

export default Homepage;