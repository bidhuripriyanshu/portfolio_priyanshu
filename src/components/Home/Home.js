import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePhoto from "../../Assets/profile.jpg"; // 👈 Put your photo in Assets/ named profile.jpg
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import ContactForm from "./ContactForm";
import "./Home.css";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="modern-home-section">
      {/* Aurora animated background */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* ── HERO ── */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <div className={`home-container${isLoaded ? " loaded" : ""}`}>
            <Row className="align-items-center w-100">
              {/* Left — text */}
              <Col lg={7} md={12} className="hero-text-col">
                {/* Greeting badge */}
                <div className="greeting-badge">
                  <span className="wave" role="img" aria-label="wave">👋</span>
                  Hey there, welcome!
                </div>

                {/* Name */}
                <h1 className="hero-name-line">I'm</h1>
                <h1 className="hero-name-line" style={{ marginBottom: "1.4rem" }}>
                  <span className="hero-name-highlight">PRIYANSHU BIDHURI</span>
                </h1>

                {/* Typewriter */}
                <Type />

                {/* CTA */}
                <div className="cta-container">
                  <button
                    className="cta-button primary"
                    onClick={() => scrollTo("about")}
                  >
                    About Me
                  </button>
                  <button
                    className="cta-button secondary"
                    onClick={() => scrollTo("projects")}
                  >
                    View Projects
                  </button>
                </div>

                {/* Metrics strip */}
                <div className="metrics-strip">
                  <div className="metric-item">
                    <span className="metric-number">1+</span>
                    <span className="metric-label">Years Experience</span>
                  </div>
                  <div className="metric-divider" />
                  <div className="metric-item">
                    <span className="metric-number">10+</span>
                    <span className="metric-label">Projects Built</span>
                  </div>
                  <div className="metric-divider" />
                  <div className="metric-item">
                    <span className="metric-number">10+</span>
                    <span className="metric-label">Technologies</span>
                  </div>
                </div>
              </Col>

              {/* Right — profile photo */}
              <Col lg={5} md={12} className="hero-image-col">
                <div className="hero-image-wrapper">
                  <div className="hero-image-glow" />
                  <div className="hero-photo-ring">
                    <img
                      src={profilePhoto}
                      alt="Priyanshu Bidhuri"
                      className="hero-photo"
                    />
                  </div>
                  <div className="floating-elements">
                    <div className="floating-dot dot-1" />
                    <div className="floating-dot dot-2" />
                    <div className="floating-dot dot-3" />
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
