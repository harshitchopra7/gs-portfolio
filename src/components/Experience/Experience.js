import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox";

function Experience() {
  return (
    <div className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_boxes_container">
      <ExperienceBox
        title="Google"
        stat1="stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 "
        stat2="stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1"
        stat3="stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1"
        stat4="stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1"
        stat5="stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1 stat1"
      />
      <ExperienceBox 
        title="Microsoft"
        stat1="stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2 "
        stat2="stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2 "
        stat3="stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2 "
        stat4="stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2 "
        stat5="stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2stat2 stat2stat2 stat2 stat2 stat2 stat2 "
      />
      </div>
      
    </div>
  );
}
export default Experience;
