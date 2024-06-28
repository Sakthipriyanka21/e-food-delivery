import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ThankYou from  "./pages/ThankYou/ThankYou";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (  
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/thankyou" element={<ThankYou/>} />
          
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
