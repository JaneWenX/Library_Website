import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios";

const MyCarts = () => {
const [carts,setCarts] = useState('')
  useEffect(()=>{
    axios
    .get('/api/borrowCart')
    .then((res)=>{
      console.log(res.data.data)
      setCarts(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Wrapper>
      {carts && carts.map((cart)=>{
        return(
          <>
            <Img src={`https://covers.openlibrary.org/b/olid/${cart.cover}-S.jpg`}/>
            <Title>{cart.title}</Title>
            <Author>Author: {cart.author}</Author>
          </>
        )
      })}


    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 0px;
  height: 100%;
`;
const Img = styled.img`
`
const Title = styled.div`
  margin:0px 0px 10px 20px;
  font-weight: bolder;
  font-size:20px;
  margin:0px 0px 10px 20px;
`
const Author = styled.div`
  /* display:flex-start; */
  margin:0px 0px 10px 20px;
  font-family: 'Courier New', monospace;
`
export default MyCarts