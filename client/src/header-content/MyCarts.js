import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MyCarts = () => {
  const [carts, setCarts] = useState([]);
  // const {bookId} = useParams();
  // console.log(bookId)
  //this is to get the cart data in mangoDB

  const deleteSubmit = (e) => {
    const _id = e.target.id;
    axios
      .delete(`/api/borrowCart/${_id}`)
      .then((res) => {
        console.log(res);
        document.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("/api/borrowCart")
      .then((res) => {
        setCarts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      {carts &&
        carts.map((cart) => {
          return (
            <List>
              <Div>
                <A href={`https://openlibrary.org/${cart.key}`} target="_blank">
                  <Title>{cart.title}</Title>
                </A>
                <Author>Author: {cart.author}</Author>
                <RemoveButton onClick={deleteSubmit} id={cart._id}>
                  Remove
                </RemoveButton>
              </Div>
              <Img
                src={`https://covers.openlibrary.org/b/olid/${cart.cover}-S.jpg`}
              />
            </List>
          );
        })}
    </Wrapper>
  );
};
const A = styled.a`
  text-decoration: none;
`;
const Wrapper = styled.div`
  margin: 0px;
  height: 100%;
`;
const Img = styled.img``;
const Title = styled.div`
  font-weight: bolder;
  font-size: 20px;
  margin: 0px 0px 10px 20px;
`;
const Author = styled.div`
  /* display:flex-start; */
  margin: 0px 0px 10px 20px;
  font-family: "Courier New", monospace;
`;
const RemoveButton = styled.button`
  margin: 5px 0px 10px 20px;
  width: 70px;
  font-family: Impact, fantasy;
  &:hover {
    background: white;
  }
`;
const List = styled.div`
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  margin: 10px auto;
  padding: 15px;
  border-right: 5px solid #ebd671;
  position: relative;
  counter-increment: number;
  display: flex;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
  }
  &::before {
    content: counter(number);
    background-color: #ebd671;
    border-left: 1px solid #ebd671;
    border-radius: 5px;
    padding: 15px;
    color: white;
    position: absolute;
    left: -30px;
    top: 0px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export default MyCarts;
