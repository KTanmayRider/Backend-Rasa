import React from "react";
import "../../assets/CSS/event.css";

const EventsSection = () => {
  return (
    <div className="events-container">

      <img
        src="src\assets\Images\image 65.png"
        alt="Event discussion"
        className="top-event-image"
      />
      <div className="event-content">
        <div className="left-panel">
          <h2>
            Join 200+ AI and technology innovators for a day of insights,
            learning, and networking. Discover how Green Rider Technology's
            cutting-edge solutions can drive your business forward.
          </h2>
          <p></p>
          <div className="social-media-container">
            <div className="vertical-divider"></div>
            <div className="icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Images/image 79.png" alt="LinkedIn" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Images/image 80.png" alt="Facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Images/image 81.png" alt="Twitter" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Images/image 82.png" alt="Instagram" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="src/assets/Images/image 83.png" alt="WhatsApp" />
              </a>
            </div>
          </div>
          <div className="event-details-container">
            <div className="location-details">
              <img
                src="src\assets\Images\image 84.png"
                alt="Location Icon"
                className="icon"
              />
              <p className="details-text">
                Location/Venue: C21 Business Park, Indore, and CLC Tower, Plot
                146, Sector 44, Gurugram, Haryana 122003
              </p>
            </div>
            <div className="date-details">
              <img
                src="src\assets\Images\image 85.png"
                alt="Calendar Icon"
                className="icon"
              />
              <p className="details-text">
                Date: 18 June 2024 | 08:30 a.m. to 05:00 p.m.
              </p>
            </div>
          </div>
        </div>
        <div className="event-expectations-container">
          <h2>
            What to expect from{" "}
            <span className="highlight">Green Rider Technology</span> at the
            event?
          </h2>
          <ul>
            <li>
              GRT actively participates in and hosts various industry events.
            </li>
            <li>
              Events range from international tech conferences to exclusive
              webinars and workshops.
            </li>
            <li>Attendees can expect to:</li>
            <li>Gain insights into emerging AI technologies</li>
            <li>Network with industry leaders</li>
            <li>
              Discover how GRT's solutions can be tailored to their business
              needs
            </li>
          </ul>
        </div>
      </div>
      <div className="register-container">
        <button className="register-now">
          Register Now
          <img
            src="src\assets\Images\image 86.png"
            alt="icon"
            className="register-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default EventsSection;
