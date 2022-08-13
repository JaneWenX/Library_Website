import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { BiBookAdd } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';


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
      console.log(typeof(String(res.data.works[0].availability.available_to_borrow)))

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
        <PerBook>
        {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
        <Img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}/>
        <RightWord>
          <BookInfo>
          <Title>{book.title}</Title>

          <Author>Author: {book.authors[0].name}</Author>
          <Availability>Availability: {String(book.availability.available_to_borrow)}</Availability>
          </BookInfo>
          <IconBar>
            <Div>
          <FcLike size={30}/>
          </Div>
          <Div>
          <BiBookAdd size={30}/>
          </Div>
          <Div>
          <AiOutlineShareAlt size={30}/>
          </Div>
          </IconBar>
          </RightWord>
          </PerBook>
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
  background:lightgray;
`
const PerBook = styled.div`
  display:flex;
  background:white;
  width:60%;
  /* height:21%; */
  margin:15px;
  box-shadow: 10px 10px 5px #aaaaaa;

`
const RightWord = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top:33px;
`
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
const Availability = styled.span`
  margin:0px 0px 10px 20px;
`
const IconBar = styled.div`
  position: relative;
  bottom:0;
  border-top: 2px solid lightgray;
  border:solid none none none;
  width:613px;
  display:flex;
  align-items:center;
  justify-content: space-between;
`
const Div = styled.div`
  /* display:flex;
  align-items:center;
  justify-content: space-between; */
  padding:20px;
`
const BookInfo = styled.div`
  height:70%;

`
export default Bookdetails