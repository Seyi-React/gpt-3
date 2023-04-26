import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import Brand from "./components/Brand/brand";
import WhatGPT from "./components/whatGPT/whatGPT";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <React.Fragment>
      <div>
         <div>
            <Navbar/>
         </div>
         <div>
              <Header/>
         </div>
         <div>
         <Brand/>
         </div>
         <div>
            <WhatGPT/>
            <Features/>
            <CTA/>
            <Footer/>
         </div>
      </div>
    </React.Fragment>
  );
};

export default App;
