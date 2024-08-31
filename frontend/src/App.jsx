import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navabar";
import AllRoutes from "./Routes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import InformationSection from "./components/Footer/InformationSection";
import { useSelector } from "react-redux";

function App() {
  let cartState = useSelector((state) => state.cart);
  console.log(cartState);

  return (
    <>
      <Navbar />
      <AllRoutes />
      <InformationSection/>
      <Footer/>
    </>
  );
}

export default App;
