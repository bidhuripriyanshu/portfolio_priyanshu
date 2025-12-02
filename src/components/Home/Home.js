import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactForm from "./ContactForm";
import "./Home.css";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const homeContainerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (homeContainerRef.current) {
        const rect = homeContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    const container = homeContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="modern-home-section">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <div 
            ref={homeContainerRef}
            className={`home-container ${isLoaded ? 'loaded' : ''}`}
            style={{
              '--mouse-x': mousePosition.x,
              '--mouse-y': mousePosition.y,
            }}
          >
            <Row className="align-items-center min-vh-100">
              <Col lg={7} md={12} className="home-header">
                <div className="greeting-container card-3d">
                  <h1 className="greeting-text">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>
                </div>

                <div className="name-container card-3d">
                  <h1 className="heading-name">
                    I'M{" "}
                    <span className="main-name">PRIYANSHU BIDHURI</span>
                  </h1>
                </div>

                <div className="type-container card-3d">
                  <div className="type-wrapper">
                    <Type />
                  </div>
                </div>

                <div className="cta-container">
                  <button 
                    className="cta-button primary button-3d"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get to know me
                  </button>
                  <button 
                    className="cta-button secondary button-3d"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    View my work
                  </button>
                </div>
              </Col>

              <Col lg={5} md={12} className="image-container">
                <div className="hero-image-wrapper image-3d">
                  <img
                    src={homeLogo}
                    alt="Hero illustration"
                    className="hero-image"
                  />
                  <div className="floating-elements">
                    <div className="floating-dot dot-1 dot-3d"></div>
                    <div className="floating-dot dot-2 dot-3d"></div>
                    <div className="floating-dot dot-3 dot-3d"></div>
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
