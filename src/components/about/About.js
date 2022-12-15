import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="me"></div>
        <p className="me__disc">
          Certified Full Stack Developer With 3+ years of coding Experience.
          worked under serveral big company projects done more than 15 Real life
          based projects, build highly responsive website, A Pro typer with
          80WPM typing speed, Workout lover, a Motivator
        </p>
        <div className="footer">
          <h3>fav book</h3>
          <p>The subtle art of not giving F...</p>
        </div>
        <div className="heading">
          <h2>Magazine is a destination of the worlds</h2>
        </div>
        <div className="subscriber__content1">
          <h1>1345</h1>
          <p>New Subscribers this month</p>
        </div>
        <div className="subscriber__content2">
          <h1>40+</h1>

          <p>New Projects are done this month</p>
        </div>
      </div>
    </div>
  );
};

export default About;
