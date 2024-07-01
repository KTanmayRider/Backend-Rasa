import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import '../../assets/CSS/dreamjob.css';

function DreamJob(){
    return(
        <div className="container">
          <div className="header">
            <div className="greenBar"></div>
            <div className="title">Find Your <span className="changeGreen">Dream Job</span> in Green Rider Technology</div>
          </div>
          <form>
                <div className="formGroup">
                    <Dropdown className="dropOption">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Job Title</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Developer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Manager</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropOption">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">All Location</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Gurugram</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Indore</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropOption">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">Experience</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Fresher</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium Level</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Experience(3+ Years)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className="select">Select</button>
                </div>
            </form>
            <div className="dreamJobContentImage">
            <img alt="dreamJob" className="dreamJob" src="src\assets\Images\dreamjob.png" />
            <div className="careercontent">
            A career in Green Rider Technology not only offers the chance to work on the cutting edge of AI and Ml but also the oppurtunity to make a meaningful impact on the enviroment.

            By developing the right skills, gaining practical experience, and actively engaging with the industry, you can find your dream job in this exciting and rapidly growing feild. Embrace the challenge and be part of the movement towards a more sustainable future.
            </div>
            </div>
        </div>
    );
}

export default DreamJob;