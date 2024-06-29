import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const handleHireMeClick = () => {
    window.location.href = "mailto:muralitharanpiranesh@outlook.com";
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PIRANES MURALITHARAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      {/* Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 1000, // Ensures it's above other content
        }}
      >
        <Button
          variant="primary"
          size="lg"
          style={{
            padding: "12px 24px",
            borderRadius: "50px",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            border: "none",
            fontWeight: "bold",
          }}
          onClick={handleHireMeClick}
        >
          Hire me!
        </Button>
      </div>
    </section>
  );
}

export default Home;
