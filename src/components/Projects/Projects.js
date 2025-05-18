import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ebook from "../../Assets/Projects/project4.png";
import route from "../../Assets/Projects/project2.png";
import Tss from "../../Assets/Projects/project_1.png";
import crop from "../../Assets/Projects/proejct3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tss}
              isBlog={false}
              title="Transport schedular"
              description="A full-stack MERN web app enabling real-time ride and shipment scheduling between users and transporters. Features include role-based login, instant updates via Socket.io, Dockerized deployment, and automated CI/CD with GitHub Actions. Built for scalability and efficient transport management"
              ghLink="https://github.com/Raghuveer222/TSS-Final"
              demoLink="https://transporter-schedular.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="Crop-Cate"
              description="A smart crop recommendation system that uses machine learning to suggest the most suitable crops based on soil conditions, weather, and other environmental factors. Designed to assist farmers in making informed agricultural decisions for better yield and sustainability."
              ghLink="https://github.com/bidhuripriyanshu/Crop-cate"
              demoLink="https://github.com/bidhuripriyanshu/Crop-cate/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={route}
              isBlog={false}
              title="Route Rationalization Model Using Machine Learning  for Real-Time Traffic Management"
              description="A machine learning-based project aimed at optimizing and rationalizing transportation routes for improved efficiency and cost-effectiveness. The system analyzes route data to suggest optimal paths, reduce redundancy, and enhance overall logistics planning."
              ghLink="https://github.com/bidhuripriyanshu/ROUTE_RATIONALISATION_ML_FINAL"
              demoLink="https://github.com/bidhuripriyanshu/ROUTE_RATIONALISATION_ML_FINAL"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebook}
              isBlog={false}
              title="Ebook-BookLand"
              description=" web-based platform that allows users to browse, read, and manage ebooks online. Built with modern web technologies, this project includes user authentication, ebook upload/view functionality, and a responsive interface for a seamless reading experience."
              ghLink="https://github.com/bidhuripriyanshu/ebook_platform_online"
              demoLink="https://github.com/bidhuripriyanshu/ebook_platform_online"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
