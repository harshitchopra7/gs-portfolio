import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingpage_container">
      <p>
        <span className="highlighting">Hi,</span> my name is
      </p>
      <p className="landingpage_name">Harshit Chopra</p>
      <p className="landingpage_designation">
        I am an SDE at <span className="highlighting">Swiggy.</span>
      </p>
      <div className="landingpage_description">
        <p>
          I am a Computer Science graduate and I love working on front end web
          development projects.
        </p>
        <p>
          I have developed 3 real world websites till now that are currently
          being used by the people all over India.
        </p>
        <p>I am a 3 star C++ and a 3 star Python coder at HackerRank.</p>
      </div>
      <button className="landingpage_btn">
        <a href="mailto:harshit@gmail.com">Get in Touch</a>
      </button>
    </div>
  );
}
export default LandingPage;
