import React from "react";
import "../../assets/CSS/career.css";

function GreatPlaceToWork(){ 
        return(
            <div className="career4">
                <div className="heading">
                <div className="rectangle"></div>
                <h3 className="careerHeading">What makes <span className="changeGreen">Green Rider Technology</span> a great place to work?</h3>
                </div>
                <div className="imgsemi">
                    <img className="career4Img"
                    src="src\assets\Images\GreatPlaceToWork.png"
                    alt="career4Img" />
                    <div className="semicircle"></div>
                </div>
                
                <div className="blocksss">
                    <div className="block">
                        <div className="bimg">
                            <img className="Img74" src="src\assets\Images\bulletIcon.png" alt="Img74" />
                            <h4>Continuous Learning</h4>
                        </div>
                        <p>We believe in investing in our employees growth and development.</p>
                    </div>
                        <div className="block"> 
                        <div className="bimg">
                            <img className="Img74" src="src\assets\Images\bulletIcon.png" alt="Img74" />
                            <h4>Innovative Enviornmnent</h4>
                        </div>
                        <p> Our employees have the opportunity to work on cutting-edge projects that challenge and inspire them to innovate.</p>
                    </div>
                    <div className="block">
                        <div className="bimg">
                            <img className="Img74" src="src\assets\Images\bulletIcon.png" alt="Img74" />
                            <h4>Company Values</h4>
                        </div>
                        <p>Integrity, transparency, and ethical conduct are the foundation of everything we do at Green Rider Technology</p>
                    </div>
                </div>
            </div>
        )
}

export default GreatPlaceToWork;
