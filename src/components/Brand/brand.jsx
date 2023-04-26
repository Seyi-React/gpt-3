import React from "react";
import "./brand.css";
import Atlas from "../../assets/atlas.png";
import Dropbox from "../../assets/dropbox.png";
// import Microsoft from "../../assets/Micro.png";
import Slack from "../../assets/slackk.png";


const Brand = () => {
  return (
    <>
      <div className="brand-container">
       
        <div className="brand-img-container">
          <div>
            <img src={Atlas} alt="" className="brand-img" />
          </div>
          <div>
            <img src={Dropbox} alt="" className="brand-img" />
          </div>
          <div>
            <img src={Slack} alt="" className="brand-img" />
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Brand;
