// // import FrameComponent3 from "./FrameComponent1";
// // import FrameComponent2 from "./FrameComponent2";
// // import FrameComponent1 from "./FrameComponent1";
// // import FrameComponent from "./FrameComponent";
// import "../assets/CSS/insights.css";

// const Insights = () => {
//   return (
//     // <div >
//     //   <FrameComponent3 />
//     //   <img  alt="" src="/ellipse-28.svg" />
//     //   <FrameComponent2 />
//     //   <FrameComponent1 />
//     //   <img alt="" src="/ellipse-28.svg" />
//     //   <img  alt="" src="/ellipse-28.svg" />
//     //   <FrameComponent />
//     // </div>
//     <>
//     </>
//   );
// };

// export default Insights;



import React from "react";
import "../../assets/CSS/style.css";
import EventsSection from "./EventsSection";

const InsightsPage = () => {
  return (
    <div className="insights-container">
      <div className="header">
        <h1 className="page-heading">Insights</h1>
        <p>Our Work is to make your work easier</p>
      </div>
      <div className="content">
        <img src="src/assets/Images/alex-kotliarskyi-QBpZGqEMsKg-unsplash 1.png" alt="Office" className="office-image"/>
        <div className="tabs">
          <a href="#our-team">Our team</a>
          <a href="#about-grt">About GRT</a>
          <a href="#events">Events</a>
        </div>
        <div className="divsion-line"></div>
        <div className="team-description">
          <h2 id="our-team">Our team</h2>
          <p className="our-team-content">
            GRT's strength lies in its talented teams, consisting of over 200
            specialists globally, including developers, data scientists, and strategic
            consultants. Each team member at GRT is handpicked for their unique
            skills and a shared passion for transformative tech solutions.
            Collaboratively, they drive the creation of tools and applications that not
            only meet the current market demands but also foresee and shape
            future trends.
          </p>
        </div>
        <div className="team-members">
          {["Aaryaman Scindia", "Suryansh Rana", "Subham Gorai", "Japish Singh Thind"].map((name, index) => (
            <div key={index} className="profile">
              <div className="profile-picture">
                <img src="src/assets/Images/image 67.png" alt="" />
                <p className="person">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* <div className="divsion-line"></div>
<h1 className="page-sections" id="about-grt">About GRT</h1> */}

<div className="styled-heading-container">
      <div className="styled-heading-top-horizontal-line"></div>
      <div className="styled-heading-content">
        <div className="styled-heading-vertical-line"></div>
        <h1 className="styled-heading-title" id="events">About GRT</h1>

      </div>
    </div>

<div className="about-container">
      <div className="top-section">
        <div className="our-story">
          <h2 className="story-h2"><span style={{color:"#fff", paddingRight:".3rem"}}>Our</span> Story</h2>
          <p>Green Rider Technology (GRT) leverages cutting-edge AI technology to drive digital transformation across industries. Founded with a mission to revolutionize business operations through smart data analysis and automation, GRT stands at the forefront of innovation, offering solutions that improve efficiency and scalability. Our commitment to sustainability and ethical tech practices ensures that our advancements contribute positively to society and the environment.</p>
          <button className="read">Read more</button>
        </div>

        <div className="about-grt">
          <img src="src\assets\Images\gerard-siderius-YeoSV_3Up-k-unsplash 1.png" alt="GRT Robots" />
        </div>
      </div>
      <div className="mission-container">
      <div className="mission-image">
        <img src="src\assets\Images\growtika-nGoCBxiaRO0-unsplash 1.png" alt="Mission Visualization" />
      </div>
      <div className="mission-text">
        <h1>Our <span style={{color:"#fff !important", paddingInline:".3rem"}}>Mission,</span> Vision and <span style={{color:"#fff !important", paddingInline:".3rem"}}>Goal</span> </h1>

        <div className="mission-data-container">
          <h2>Mission</h2>
          <p>To leverage AI and Machine Learning to drive efficiency, innovation, and sustainable growth for businesses worldwide.</p>
          <h2>Vision</h2>
          <p>To be a global leader in AI-driven solutions, transforming industries and enhancing lives through cutting-edge technology.</p>
          <h2>Goal</h2>
          <p>To create intelligent systems that solve real-world problems and empower our clients to excel in a constantly evolving market.</p>
          <button className="read">Read more</button>
        </div>
      </div>
    </div>
    </div>
    {/* <h1 className="page-sections" id="events">Events</h1> */}
    <div className="styled-heading-container">
      <div className="styled-heading-top-horizontal-line"></div>
      <div className="styled-heading-content">
        <div className="styled-heading-vertical-line"></div>
        <h1 className="styled-heading-title" id="events">Events</h1>

      </div>
    </div>
      <EventsSection/>
    </div>
  );
};

export default InsightsPage;

