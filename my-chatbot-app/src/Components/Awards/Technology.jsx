import React from "react";
import Marquee from "react-fast-marquee"
import react from '../assets/Images/react.png'
import javascript from '../assets/Images/javascript.png'
import python from '../assets/Images/python.png'
import salesforce from '../assets/Images/salesforce.png'
import blockchain from '../assets/Images/blockchain.png'
import java from '../assets/Images/java.png'
import '../assets/CSS/New.css'

const New = () => {
    return (
  <>
  
  <div className="New">
      <div className="title">
        <h1>Technology We Use</h1>
      </div>

      <div className="marquee">
        <Marquee direction="left" speed={350}>
          <div className="image_wrapper" style={{borderRadius:"100"}}>
            <img src={react} alt="React" />
          </div>
          <div className="image_wrapper">
            <img src={python} alt="Python" />
          </div>
          <div className="image_wrapper">
            <img src={salesforce} alt="Salesforce" />
          </div>
          <div className="image_wrapper">
            <img src={blockchain} alt="Blockchain" />
          </div>
          <div className="image_wrapper">
            <img src={javascript} alt="Javascript" />
          </div>
          <div className="image_wrapper">
            <img src={java} alt="Java" />
          </div>
          <div className="image_wrapper">
            <img src={javascript} alt="Javascript" />
          </div>
          <div className="image_wrapper">
            <img src={java} alt="Java" />
          </div>
        </Marquee>
      </div>
    </div>


  </>

    );
  };
  
  export default New;