import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

import axios from "axios";
import styled from 'styled-components';
const Bookdetails = () => {
  const {subjectId} = useParams();
  // console.log(subjectId)
  const [books,setBooks] = useState([])
  
  useEffect(()=>{
    axios
    .get(`http://openlibrary.org/subjects/${subjectId}.json`)
    .then((res) => {
      console.log(res.data.works)
      setBooks(res.data.works);
      console.log(res.data.works[0].authors[0].name)

    })
    .catch((err) => {
      console.log("get subject:", err)
    });
   },[subjectId])


  return (
    <Wrapper>
     {books.map((book)=>{
      return (
        <>
        <Img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-S.jpg`}/>
          <Title>{book.title}</Title>

          <Author>Author: {book.authors[0].name}</Author>
        </>
      )
     })

     }

    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0px;
  height: 100%;
`
const Img = styled.img`

`
const Title = styled.div`
  font-weight: bolder;
`
const Author = styled.div`

`
export default Bookdetails