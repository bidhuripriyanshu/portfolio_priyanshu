import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactForm from "./ContactForm";
import "./Home.css";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="modern-home-section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
            <Row className="align-items-center min-vh-100">
              <Col lg={7} md={12} className="home-header">
                <div className="greeting-container">
                  <h1 className="greeting-text">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>
                </div>

                <div className="name-container">
                  <h1 className="heading-name">
                    I'M{" "}
                    <span className="main-name">PRIYANSHU BIDHURI</span>
                  </h1>
                </div>

                <div className="type-container">
                  <div className="type-wrapper">
                    <Type />
                  </div>
                </div>

                <div className="cta-container">
                  <button 
                    className="cta-button primary"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get to know me
                  </button>
                  <button 
                    className="cta-button secondary"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    View my work
                  </button>
                </div>
              </Col>

              <Col lg={5} md={12} className="image-container">
                <div className="hero-image-wrapper">
                  <img
                    src={homeLogo}
                    alt="Hero illustration"
                    className="hero-image"
                  />
                  <div className="floating-elements">
                    <div className="floating-dot dot-1"></div>
                    <div className="floating-dot dot-2"></div>
                    <div className="floating-dot dot-3"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <Home2 />
      <ContactForm />
    </section>
  );
}

export default Home;
