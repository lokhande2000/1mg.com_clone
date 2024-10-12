import "./App.css";
import Navbar from "./components/Header/Navabar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer/Footer";
import InformationSection from "./components/Footer/InformationSection";
import { useSelector } from "react-redux";
import { VStack } from "@chakra-ui/react";

function App() {
  // let cartState = useSelector((state) => state.cart);
  // console.log(cartState);

  return (
    <>
      <Navbar />
      <AllRoutes />
      <VStack>
        <InformationSection />
        <Footer />
      </VStack>
    </>
  );
}

export default App;
