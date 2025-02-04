import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sentimentImg from "../../Assets/Projects/sentiment.png"; 
import foodRecImg from "../../Assets/Projects/foodrec.png";     
import breastCancerImg from "../../Assets/Projects/breastcancer.png";
import spotifyDashboardImg from "../../Assets/Projects/spotify.png"; 

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
              imgPath={sentimentImg}
              isBlog={false}
              title="Sentiment Analysis using NLP and LLMs"
              description="Built a BERT-based sentiment analysis model with 92% accuracy, deployed on AWS and Azure via Streamlit."
              ghLink="https://github.com/dsnasn/sentiment-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodRecImg}
              isBlog={false}
              title="Intelligent Food Recommendation System"
              description="Designed a recommendation system boosting user retention to 75% and optimized search accuracy."
              ghLink="https://github.com/dsnasn/recommendation_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breastCancerImg}
              isBlog={false}
              title="Breast Cancer Histopathology Diagnosis"
              description="Developed a multi-class classification model with DenseNet121, achieving 95% accuracy for diagnosis."
              ghLink="https://github.com/dsnasn/breast-cancer-multi-classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyDashboardImg}
              isBlog={false}
              title="Spotify Music Trends Interactive Dashboard"
              description="Created an interactive Tableau dashboard analyzing Spotify music trends and user preferences."
              ghLink="https://github.com/dsnasn/Spotify-Trends-Dashboard"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
