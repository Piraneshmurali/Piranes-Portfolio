import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Piranes Muralitharan </span>
    from <span className="purple">Jaffna, Sri Lanka.</span>
    <br />
    I am currently an undergraduate student at SLIIT, specializing in Data Science within my BSc in IT.
    <br />
    I have hands-on experience as a Generative AI Scientist Intern at EVO11VE.
    <br />
    <br />
    Apart from coding, some other activities that I love to do!
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Reading Books
    </li>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"{" "}
  </p>
          <footer className="blockquote-footer">Piranes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;