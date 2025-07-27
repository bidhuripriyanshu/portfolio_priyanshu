import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

  return (
    <Container fluid className="modern-home-about-section" id="about">
      <Container>
        <div className="about-container">
          <Row className="align-items-center">
            <Col lg={8} md={12} className="home-about-description">
              <div className="about-content">
                <h1 className="about-title">
                  LET ME <span className="purple">INTRODUCE</span> MYSELF
                </h1>
                <div className="about-text">
                  <p className="home-about-body">
                    I fell in love with programming and I have at least learnt
                    something, I think… 🤷‍♂️
                  </p>
                  
                  <div className="skills-section">
                    <h3 className="skills-title">My Expertise</h3>
                    <p className="home-about-body">
                      I am fluent in classics like{" "}
                      <span className="purple">C++, Javascript and Python.</span>
                    </p>
                  </div>

                  <div className="interests-section">
                    <h3 className="interests-title">Areas of Interest</h3>
                    <p className="home-about-body">
                      My field of Interest's are building new{" "}
                      <span className="purple">Web Technologies and Machine Learning,</span>{" "}
                      also in areas related to{" "}
                      <span className="purple">Data Science and Artificial Intelligence.</span>
                    </p>
                  </div>

                  <div className="tech-section">
                    <h3 className="tech-title">Tech Stack</h3>
                    <p className="home-about-body">
                      Whenever possible, I also apply my passion for developing products
                      with <span className="purple">Node.js</span> and{" "}
                      <span className="purple">Modern Javascript Library and Frameworks</span>{" "}
                      like <span className="purple">React.js and Next.js</span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={12} className="myAvtar">
              <div className="avatar-container">
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={800}
                  transitionSpeed={1500}
                  scale={1.1}
                  gyroscope={true}
                >
                  <div className="avatar-wrapper">
                    <img src={myImg} className="avatar-image" alt="avatar" />
                    <div className="avatar-glow"></div>
                  </div>
                </Tilt>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col md={12} className="home-about-social">
              <div className="social-container">
                <h2 className="social-title">FIND ME ON</h2>
                <p className="social-subtitle">
                  Feel free to <span className="purple">connect</span> with me
                </p>
                
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/bidhuripriyanshu"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="GitHub Profile"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://x.com/priyanshu351"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="Twitter Profile"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/priyanshu-bidhuri-0757a1299/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/_bidhuripriyanshu/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="Instagram Profile"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Home2;
