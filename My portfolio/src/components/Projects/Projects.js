import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/foodie.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/dreamie.png";
import chatify from "../../Assets/Projects/olex.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/sillky.png";

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
              title="OLEX"
              description="OLEX is a comprehensive online salon management system designed to streamline operations and enhance customer experiences for a salon based in Jaffna, Sri Lanka. Leveraging the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to optimize salon management processes while providing a seamless digital interface for both salon administrators and customers, ensuring smooth operations and enhanced service delivery."
              ghLink="https://github.com/Piraneshmurali/ITP-Online-Salon-Management-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SILLKY"
              description="The Online E-Store Management System(SILLKY) is designed for a women's dressing store, enabling seamless management of products, customer interactions, and delivery processes. The system includes functionalities for admins to manage dresses, delivery persons to manage their profiles, and customers to shop for dresses."
              ghLink="https://github.com/Piraneshmurali/Online-E-Store-Management-JAVA"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DREAMIE"
              description="The Online Event Management System(DREAMIE) is designed to help wedding planners manage and organize wedding-related events efficiently. The system includes an admin panel where administrators can add events, view customer and event counts, and manage customer orders."
              ghLink="https://github.com/Piraneshmurali/Online-Event-Management-JAVA"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="FOODIE"
              description="The Online Food Ordering System(FOODIE) allows customers to register, log in, and order food. Customers have the option to choose between online delivery and take away. The system includes an admin panel where administrators can manage food items and assign delivery tasks to delivery personnel."
              ghLink="https://github.com/Piraneshmurali/Online-Food-Ordering-System-PHP"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
