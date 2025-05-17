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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Raghuveer222/TSS-Final"
              demoLink="https://transporter-schedular.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="Crop-Cate"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/bidhuripriyanshu/Crop-cate"
              demoLink="https://github.com/bidhuripriyanshu/Crop-cate/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={route}
              isBlog={false}
              title="Route Rationalization Model Using Machine Learning  for Real-Time Traffic Management"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/bidhuripriyanshu/ROUTE_RATIONALISATION_ML_FINAL"
              demoLink="https://github.com/bidhuripriyanshu/ROUTE_RATIONALISATION_ML_FINAL"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebook}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
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
