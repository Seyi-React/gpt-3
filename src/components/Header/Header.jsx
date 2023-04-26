import React from "react";
import './header.css'

import main from '../../assets/use.png'

const Header = () => {
  return (
    <div className="gpt3-container-header">
      <div className="gpt3-content">
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercising blessing indulgence way everything joy
          alteration boisterous the attachment{" "}
        </p>
          <div className="gpt3-content-child">
             <input type="text" placeholder="Enter your email" />
             <button>Get Started</button>
          </div>
          <div className="gpt3-content-last">
             <p>1,500 people requested access visit in last 24 hrs</p>
          </div>
      </div>
       <div>
           <img src={main} alt="" className="img"/>
       </div>
    </div>
  );
};

export default Header;




// google slack atlassian dropbox shopify