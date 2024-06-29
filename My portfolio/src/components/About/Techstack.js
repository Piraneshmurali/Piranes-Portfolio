import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const iconStyle = {
    fontSize: "1.5rem", // Adjust font size as needed
    textAlign: "center", // Center align text
    margin: "10px 0", // Add some margin for spacing
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>Angular</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>C | C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>HTML, CSS, JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>SQL | MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>Node.js & Express.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={iconStyle}>MongoDB</div>
      </Col>
    </Row>
  );
}

export default Techstack;
