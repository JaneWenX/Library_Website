import Homepage from "./Homepage";
import Category from "./Category"
import Bookdetails from './Bookdetails'
import History from './History'
import { Route,Routes } from "react-router-dom";
import Header from './header-content/Header'
import Footer from './Footer/Footer'
import styled from "styled-components";
import Navbar from "./header-content/Navbar";
import ContactUs from "./Footer/ContactUs";
import Location from "./Footer/Location";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./header-content/SignIn";
const App = () =>{

  return (
    <Wrapper>
      <GlobalStyles/>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/books/:bookId" element={<Bookdetails/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/signin" element={<SignIn/>}/>
    
        <Route path="">404</Route>
      </Routes>
    <Footer/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width:100vw;
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  margin-left:0;

/* height: calc(100vh - 110px); */
`;

export default App;
