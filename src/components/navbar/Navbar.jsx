import React, { useState } from "react";
import "./navbar.css";
import {RiCloseLine } from 'react-icons/ri'
import {RiMenu3Line} from 'react-icons/ri'



const Navbar = () => {

     const [toggle,setToggle] = useState(false);


  return (
    <div>
      <div className="gpt3_navbar">
        <div className="gpt3_logo">
          <h3 className="gpt3-text">GPT-3</h3>
        </div>
        <div className="gpt3_navbar_links">
          <p>
            <a href="">Home</a>
          </p>
          <p>
            <a href="">What is GPT</a>
          </p>
          <p>
            <a href="">Open AI</a>
          </p>
          <p>
            <a href="">Case Studies</a>
          </p>
        </div>
        <div className="gpt3-menu">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>

        {/* Mobile sizing */}
             <div className="gpt3_container">
                {toggle ? <RiCloseLine color='#fff' size={23} className="icon" onClick={() => setToggle(false)} />
                : <RiMenu3Line color='#fff' size={23} className="icon" onClick={() => setToggle(true)} /> }
                 {
                    toggle && (
                        <div className="gpt3_navbar_mobile">
                        <p>
                          <a href="">Home</a>
                        </p>
                        <p>
                          <a href="">What is GPT</a>
                        </p>
                        <p>
                          <a href="">Open AI</a>
                        </p>
                        <p>
                          <a href="">Case Studies</a>
                        </p>
                        <div className="gpt3-menu-mobile">
                               <p>Sign in</p>
                               <button>Sign up</button>
                             </div>
                      </div>
                             
                    )
                 }
             </div>
      </div>
    </div>
  );
};




export default Navbar;
