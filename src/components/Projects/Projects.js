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
              title="AI Career Coach"
              description="An AI-powered full-stack career coaching platform built with Next.js, PostgreSQL, Prisma, Clerk, and Google Gemini AI. Features include ATS-optimized resume building, AI-generated cover letters, interview preparation quizzes, resume ATS analysis for PDF/DOCX files, personalized industry insights, onboarding workflows, and performance tracking. Integrated Inngest cron jobs for automated industry data refresh and deployed with a scalable modern architecture."
              ghLink="https://github.com/bidhuripriyanshu/carrer-coach-ai"
              demoLink="https://carrer-coach-ai.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="LabourLink"
              description="A full-stack platform connecting daily-wage labourers with local contractors, built using Next.js, PostgreSQL, Prisma, and NextAuth. Features include role-based authentication (Labour, Contractor, Admin), secure RBAC middleware protection, job posting and application management, advanced job search & filtering, contractor dashboards, labour profiles, and scalable Prisma-powered database architecture. Designed to simplify local hiring and create employment opportunities efficiently."
              ghLink="https://github.com/bidhuripriyanshu/LabourLink"
              demoLink="https://labour-link-local.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={route}
              isBlog={false}
              title="FarmStackAI"
              description="An AI-powered smart agriculture platform built with the MERN stack, Flask, and Machine Learning to help farmers make data-driven decisions. Features include crop recommendation based on soil and environmental parameters, secure JWT authentication, bcrypt password encryption, community discussion forums, and real-time interaction between React frontend, Node.js backend, and Python ML services. Designed to improve farming productivity through intelligent crop prediction and digital collaboration."
              ghLink="https://github.com/bidhuripriyanshu/FarmStackAI"
              demoLink="https://farm-stack-ai.vercel.app/"              
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
