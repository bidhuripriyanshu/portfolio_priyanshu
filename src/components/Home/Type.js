import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <div className="typewriter-wrapper">
        <span className="typewriter-prefix">I am a —</span>
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "MERN Stack Developer",
              "ML Enthusiast",
              "Open Source Contributor",
              "Problem Solver",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 45,
            delay: 70,
            cursor: "|",
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
          }}
        />
      </div>
    </div>
  );
}

export default Type;
