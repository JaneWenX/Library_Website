import Homepage from "./Homepage";
import Category from "./Category"
import Bookdetails from './Bookdetails'
import History from './History'
import { Route,Routes } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";
const App = () =>{

  return (
    <Wrapper>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/books/:bookId" element={<Bookdetails/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="">404</Route>
      </Routes>
    <Footer/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width:auto;
`
export default App;
