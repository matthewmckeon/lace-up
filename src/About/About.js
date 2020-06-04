import React from "react";
import AboutCard from "./AboutCard";
import ProgramsCard from "./ProgramsCard";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="leftcolumn">
        <div className="mission">
          <AboutCard />
        </div>
        <div className="programs">
          <ProgramsCard />
        </div>
      </div>
      <div className="image-container">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        />
      </div>
    </div>
  );
}
