import { useState } from "react";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/HomeComponent";
import Contact from "./components/ContactConponent";
import SearchPage from "./components/SearchPageComponent";


function App() {
  const data = useState();

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Search" element={<SearchPage />}></Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
