import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jiahui Ma </span>
            from <span className="purple"> the University of Glasgow.</span>
            <br />
            I am currently pursuing my Master's degree in Computer Science,
            specializing in Data Science, Machine Learning, and Artificial Intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Cutting-edge Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogging and Fitness
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, growing, and building things that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Jiahui Ma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
