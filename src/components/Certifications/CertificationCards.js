import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink45Deg } from "react-icons/bs";

function CertificationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certification-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.certLink && (
          <Button variant="primary" href={props.certLink} target="_blank">
            <BsLink45Deg /> &nbsp;
            {"View Certificate"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCards;
