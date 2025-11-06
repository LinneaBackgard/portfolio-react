import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        <span>Hello, I´m Linnéa</span>, a data analyst and developer, based in
        Sweden.
      </h1>
      <p>I work with problem solving.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
