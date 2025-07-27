import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <div className="typewriter-wrapper">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Machine Learning Enthusiast",
              "MERN Stack Developer",
              "Open Source Contributor",
              "Problem Solver",
              "Creative Thinker"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            cursor: "|",
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor"
          }}
        />
      </div>
      <div className="typewriter-underline"></div>
    </div>
  );
}

export default Type;
