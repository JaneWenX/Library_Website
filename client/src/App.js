import Homepage from "./Homepage";
import Category from "./Category"
import Bookdetails from './Bookdetails'
import History from './History'
import { Route,Routes } from "react-router-dom";
import Header from './Header'
import Footer from './Footer/Footer'
import styled from "styled-components";
import Navbar from "./Navbar";
import ContactUs from "./Footer/ContactUs";
import Location from "./Footer/Location";
const App = () =>{

  return (
    <Wrapper>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/books/:bookId" element={<Bookdetails/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="">404</Route>
      </Routes>
    <Footer/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width:auto;
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
