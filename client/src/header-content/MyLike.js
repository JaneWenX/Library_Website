import React, {useEffect,useState} from 'react'
import styled from 'styled-components';
import axios from "axios";

const MyLike = () => {
const [likes,setLikes] = useState('')
  useEffect(()=>{
    axios
    .get('/api/favorites')
    .then((res)=>{
      console.log(res.data.data)
      setLikes(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Wrapper>
      {likes && likes.map((like)=>{
        return(
          <>
            <Img src={`https://covers.openlibrary.org/b/olid/${like.cover}-S.jpg`}/>
            <Title>{like.title}</Title>
            <Author>Author: {like.author}</Author>
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
export default MyLike