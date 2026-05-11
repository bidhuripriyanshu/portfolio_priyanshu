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

const features = [
  {
    icon: "💡",
    title: "Passionate Developer",
    body: "I fell in love with programming and haven't looked back — always learning, always building.",
  },
  {
    icon: "🖥️",
    title: "Fluent in C++, JavaScript & Python",
    body: "My core languages power everything from algorithms to full-stack web applications.",
  },
  {
    icon: "🌐",
    title: "Web & ML Enthusiast",
    body: "I blend modern web technologies with machine learning to build intelligent, user-friendly products.",
  },
  {
    icon: "⚡",
    title: "MERN Stack & React Ecosystem",
    body: "Node.js, React.js, Next.js — I craft fast, scalable full-stack applications end-to-end.",
  },
];

const socials = [
  {
    href: "https://github.com/bidhuripriyanshu",
    label: "GitHub",
    icon: <AiFillGithub />,
  },
  {
    href: "https://x.com/priyanshu351",
    label: "Twitter / X",
    icon: <AiOutlineTwitter />,
  },
  {
    href: "https://www.linkedin.com/in/priyanshu-bidhuri-0757a1299/",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/_bidhuripriyanshu/",
    label: "Instagram",
    icon: <AiFillInstagram />,
  },
];

function Home2() {
  return (
    <Container fluid className="modern-home-about-section" id="about">
      <Container>
        <Row className="align-items-start">
          {/* Left — content */}
          <Col lg={7} md={12} className="home-about-description">
            <span className="section-label">Who I Am</span>

            <h1 className="about-title">
              Let Me{" "}
              <span className="purple">Introduce</span>{" "}
              Myself
            </h1>

            <p className="about-lead">
              A software developer who loves turning complex ideas into elegant,
              performant software — from pixel-perfect UIs to intelligent back-end
              systems.
            </p>

            {/* Feature cards */}
            <div className="feature-cards">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-body">
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right — avatar */}
          <Col lg={5} md={12} className="about-avatar-col">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={900}
              transitionSpeed={1500}
              scale={1.04}
              gyroscope={true}
            >
              <div className="avatar-card">
                <img src={myImg} className="avatar-image" alt="Priyanshu Bidhuri avatar" />
                <span className="avatar-badge">Open to opportunities ✦</span>
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* Social links */}
        <Row>
          <Col md={12}>
            <div className="social-section">
              <p className="social-heading">Find Me On</p>
              <p className="social-sub">
                Feel free to <span className="purple">connect</span> with me
              </p>
              <ul className="home-about-social-links">
                {socials.map((s) => (
                  <li className="social-icons" key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
