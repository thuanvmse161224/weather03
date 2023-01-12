import { useState } from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomeComponent";
import Contact from "./components/ContactConponent";


function App() {
  const data = useState();

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
