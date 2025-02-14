import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiPostman, 
  SiSlack, 
  SiVercel, 
  SiMacos, 
  SiJupyter, 
  SiDocker, 
  SiAmazonaws 
} from "react-icons/si";
import { FaLinux, FaTerminal } from "react-icons/fa"; // 替代 DiLinux 和 DiTerminal

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />  {/* 替代 DiLinux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal />  {/* 替代 DiTerminal */}
      </Col>
    </Row>
  );
}

export default Toolstack;
