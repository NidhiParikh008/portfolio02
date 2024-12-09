import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/proj4.png";
import emotion from "../../Assets/Projects/proj2.png";
import editor from "../../Assets/Projects/proj3.png";
import chatify from "../../Assets/Projects/proj1.png";
import suicide from "../../Assets/Projects/proj6.png";
import bitsOfCode from "../../Assets/Projects/proj5.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Pasand Pickles"
              description="Pasand Pickles is a web application showcasing a variety of pickles with their prices and shop details. Built using HTML and CSS, it features a clean and user-friendly interface, allowing customers to browse through different types of pickles and find shop information easily. Perfect for pickle enthusiasts looking for quality and variety!"
              ghLink="https://github.com/NidhiParikh008/Pasand-Pickles"
              demoLink="https://nidhiparikh008.github.io/Pasand-Pickles/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Student Master"
              description="Student Master is a web-based application built with React, Node.js, and MongoDB for efficient student management. It allows users to add, edit, view, and delete student details while also managing academic results for up to six semesters. faculty can input and view semester-wise marks, with pass/fail status displayed for each subject.  The system is  user-friendly and designed to streamline student data and academic performance tracking.."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="Portfolio Website is a modern, responsive web application created using HTML, CSS, and JavaScript. It showcases personal or professional details, including an introduction, skills, projects, and contact information, all presented in a visually appealing layout. The website is designed with a clean and responsive UI, ensuring seamless viewing across devices.This portfolio serves as an excellent platform for highlighting achievements and connecting with potential employers."
              ghLink="https://github.com/NidhiParikh008/portfolio1"
              demoLink="https://nidhiparikh008.github.io/portfolio1/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mini store"
              description="Mini Store is a simple yet functional e-commerce application built using PHP, HTML, and CSS. The project allows users to browse and purchase various items, including ladies' clothing, electronic gadgets like phones, and more. It features a clean and responsive design with categories for easy navigation, a shopping cart for managing selected items.This project is ideal for small businesses and beginners in web development looking to create a functional online store."
              ghLink="https://github.com/NidhiParikh008/Mini-Store-"
              demoLink="https://nidhiparikh008.github.io/Mini-Store-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Admin pannel"
              description="Admin Panel is a web-based application developed using React for the frontend, Node.js for the backend, and MongoDB for data storage. It provides a secure registration and login system for administrators to manage user details effectively. Admins can view a list of all registered users along with their registration date and time, ensuring easy tracking. The panel allows admins to edit user details, such as their address,mobile number and etc.this Admin Panel streamlines user management for any system."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Weather Forecast"
              description="Weather Forecast is a simple web application where users can enter a city and state to get real-time weather details, including temperature and conditions. Built with a responsive interface, it fetches accurate data from a weather API, making it easy to check weather updates for any location."
              ghLink="https://github.com/NidhiParikh008/weather-website"
              demoLink="https://nidhiparikh008.github.io/weather-website/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
