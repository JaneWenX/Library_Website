import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const BookContext = createContext()

const BookProvider = ({children}) => {
  const [books,setBooks] = useState('')

   useEffect(()=>{
    axios
    .get("http://openlibrary.org/subjects/love.json")
    .then((res) => {
      console.log(res.data)
      // setItems(res);
    })
    .catch((err) => {
      console.log(err)
    });
   },[])

   useEffect(()=>{
    axios
    .get("http://openlibrary.org/subjects.json")
    .then((res) => {
      console.log(res)
      // setItems(res);
    })
    .catch((err) => {
      console.log(err)
    });
   },[])

  return (
    <BookContext.Provider value={{books,setBooks}}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider