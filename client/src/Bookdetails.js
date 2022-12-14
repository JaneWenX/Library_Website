import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import axios from "axios";
import styled from 'styled-components';
// import ReactPaginate from 'react-paginate';


const Bookdetails = () => {
  const {subjectId} = useParams();
  const [books,setBooks] = useState('')
  const [fav,setFav] = useState(false)
  const [add,setAdd] = useState(false)
  const [share,setShare] = useState(false)

  //this is to get the API data by subjectId

  useEffect(()=>{
    axios
    .get(`http://openlibrary.org/subjects/${subjectId}.json`)
    .then((res) => {
      setBooks(res.data.works);
    })
    .catch((err) => {
      console.log("get subject:", err)
    });
   },[subjectId])

  //this is to post the book data to mangoDB by clicking

   const handleFav = (book)=>(e)=>{
    e.preventDefault();
    axios({
      method:'POST',
      url:'/api/favorites',
      data:{
      author: book.authors[0].name,
      title:book.title,
      cover:book.cover_edition_key,
      key:book.key,
    }
  })
    .then((res)=>{
      // console.log(res)
      setFav(true)
    })
    .catch((err)=>{
      console.log("add to favorite:",err)
    })
    e.target.disabled = true;

   }

   const handleAdd =(book)=>(e)=>{
    e.preventDefault()
    axios({
      method:'POST',
      url:'/api/borrowCart',
      data:{
      author: book.authors[0].name,
      title:book.title,
      cover:book.cover_edition_key,
      key:book.key,
      }
    })
    .then((res)=>{
      setAdd(true)
    })
    .catch((err)=>{
      console.log("add to list",err)
    })
   }
   const handleShare =(book)=>(e)=>{
    e.preventDefault()
    axios({
      method:'POST',
      url:'/api/shareTo',
      data:{
      author: book.authors[0].name,
      title:book.title,
      cover:book.cover_edition_key,
      key:book.key,
      }
    })
    .then((res)=>{
      setShare(true)
    })
    .catch((err)=>{
      console.log("add to share",err)
    })
   }

   if(!books){
    return <div>loading</div>
   }
  return (
    <Wrapper>
     {books.map((book)=>{
      return (
        <>
        <PerBook key={book.cover_id}>
        {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
      <a href={`https://openlibrary.org/${book.key}`} target="_blank">
        <Img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}/>
        </a>
        <RightWord>
          <BookInfo>
          <Title>{book.title}</Title>
          <Author>Author: {book.authors[0].name}</Author>
          </BookInfo>
          <IconBar>
          <Button>
          <AiOutlineHeart size={30} onClick={handleFav(book)}/> Favorites
          </Button>
          <Button>
          <BiBookAdd size={30} onClick={handleAdd(book)}/> Add
          </Button>
          <Button>
          <AiOutlineShareAlt size={30} onClick={handleShare(book)}/> Share
          </Button>
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
  margin-bottom:15px;
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
const Button = styled.button`
  display:flex;
  flex-direction: column;
  align-items:center;
  /* justify-content: space-between; */
  padding:15px;
  border: none;
  background:none;
  /* transform: translate(-50%, -50%);
  cursor: pointer; */


  @keyframes fave-heart {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -2800px 0;
  }
}
&:active {
  animation: 'fave-heart' 1s steps(28);
  background-position: -2800px 0;
  transition: background 1s steps(28);
  cursor: default;
  }
`
const BookInfo = styled.div`
  height:70%;

`
export default Bookdetails