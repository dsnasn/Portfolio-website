import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import dp100 from "../../Assets/Projects/dp100.png";
import dp203 from "../../Assets/Projects/dp203.png";
import ibm from "../../Assets/Projects/ibm.png";
import google from "../../Assets/Projects/google.png";
import AI_ML_DS_udemy from "../../Assets/Projects/AI_ML_DS_udemy.jpg";
import calculus_coursera from "../../Assets/Projects/calculus_coursera.png";
import ml_coursera from "../../Assets/Projects/ml_coursera.png";
import pytorch from "../../Assets/Projects/pytorch.jpg";
import SQL_udemy from "../../Assets/Projects/SQL_udemy.jpg";
import tensorflow from "../../Assets/Projects/tensorflow.jpg";
import { BsLink45Deg } from "react-icons/bs";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={dp100} alt="Azure Data Scientist" />
              <Card.Body>
                <Card.Title>Microsoft Certified: Azure Data Scientist Associate</Card.Title>
                <Card.Text>
                  This certification validates expertise in applying data science and machine learning to implement and run machine learning workloads on Azure.
                  <br />
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://learn.microsoft.com/api/credentials/share/en-gb/JiahuiMa-7646/F2B82D69B1F78E24?sharingId" // 替换为实际的链接
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={dp203} alt="Azure Data Engineer" />
              <Card.Body>
                <Card.Title>Microsoft Certified: Azure Data Engineer Associate</Card.Title>
                <Card.Text>
                  This certification demonstrates proficiency in designing and implementing data management, monitoring, security, and privacy using the full stack of Azure data services.
                  <br />
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://learn.microsoft.com/api/credentials/share/zh-cn/JiahuiMa-7646/972DADE8131F0AD8?sharingId" // 替换为实际的链接
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

                    <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={ibm} alt="IBM Data Science" />
              <Card.Body>
                <Card.Title>IBM Data Science Professional Certificate</Card.Title>
                <Card.Text>
                  This certification covers essential data science skills including Python, SQL, data visualization, machine learning, and applying models to solve real-world problems.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.coursera.org/account/accomplishments/specialization/5Y5YJPSOMZ2J"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={google} alt="Google Data Analytics" />
              <Card.Body>
                <Card.Title>Google Data Analytics Professional Certificate</Card.Title>
                <Card.Text>
                  This certification demonstrates competence in data analysis using tools like SQL, R, and Tableau, focusing on data-driven decision-making and visualization.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.coursera.org/account/accomplishments/professional-cert/certificate/XBD3DM5DFVV8"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
                    <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={AI_ML_DS_udemy} alt="AI ML DS Udemy" />
              <Card.Body>
                <Card.Title>AI & Machine Learning, Data Science Bootcamp</Card.Title>
                <Card.Text>
                  Covers AI, machine learning, and data science concepts with Python and real-world projects.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.udemy.com/certificate/UC-f2203457-358c-4b16-a236-2fc293a6c108/"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={calculus_coursera} alt="Calculus for ML" />
              <Card.Body>
                <Card.Title>Calculus for Machine Learning and Data Science</Card.Title>
                <Card.Text>
                  Focuses on essential calculus concepts used in machine learning algorithms.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.coursera.org/account/accomplishments/verify/DLD8CLAU17PV"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={ml_coursera} alt="Machine Learning Coursera" />
              <Card.Body>
                <Card.Title>Machine Learning Specialization by Stanford University</Card.Title>
                <Card.Text>
                  Covers supervised and unsupervised learning, model evaluation, and neural networks.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://coursera.org/share/8cd5a6ff46ac9913293bd29666b6a391"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={pytorch} alt="PyTorch Bootcamp" />
              <Card.Body>
                <Card.Title>PyTorch for Deep Learning Bootcamp</Card.Title>
                <Card.Text>
                  Hands-on course focusing on building deep learning models using PyTorch.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.udemy.com/certificate/UC-dd2f6bd3-d2c1-424b-ba56-7852a50fb363/"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={SQL_udemy} alt="SQL Bootcamp" />
              <Card.Body>
                <Card.Title>Complete SQL and Databases Bootcamp</Card.Title>
                <Card.Text>
                  Covers relational databases, SQL queries, and data manipulation with hands-on exercises.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.udemy.com/certificate/UC-24f1c246-5c4c-4067-b924-2149253efc78/"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={tensorflow} alt="TensorFlow Bootcamp" />
              <Card.Body>
                <Card.Title>TensorFlow for Deep Learning Bootcamp</Card.Title>
                <Card.Text>
                  Teaches building, training, and deploying machine learning models using TensorFlow.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://www.udemy.com/certificate/UC-af69e190-6088-4b4a-b20e-cc493808fd12/"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
