import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';

const MyShare = () => {
  //this is to get the shared data in mangoDB
  const [shares,setShares] = useState('')
  useEffect(()=>{
    axios
    .get('/api/shareTo')
    .then((res)=>{
      setShares(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <Wrapper>
      {shares && shares.map((share)=>{
        return(
          <List>
            <Div>
            <A href={`https://openlibrary.org/${share.key}`} target="_blank">
            <Title>{share.title}</Title>
            </A>
            <Author>Author: {share.author}</Author>
            </Div>
            <Img src={`https://covers.openlibrary.org/b/olid/${share.cover}-S.jpg`}/>
          </List>
        )
      })}
    </Wrapper>
  )
}
const A = styled.a`
  text-decoration:none;
`
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
const List = styled.div`
    background-color: #eee;
    font-family:Arial, Helvetica, sans-serif;
    width: 500px;
    margin: 10px auto;
    padding: 15px;
    border-right: 5px solid #EBD671;
    position: relative;
    counter-increment: number;
    display:flex;
    justify-content: space-between;
    &:hover{
      box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .25);
    transition: all .2s ease-in-out;   
  }
`
const Div = styled.div`
  display: flex;
  flex-direction:column;
`
export default MyShare