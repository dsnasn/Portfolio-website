import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import logo0 from "../../Assets/Experience/uofg.jpg";
import logo1 from "../../Assets/Experience/CNBM.png";
import logo2 from "../../Assets/Experience/bytedance.png";
import logo3 from "../../Assets/Experience/asiainfo.png";
import logo4 from "../../Assets/Experience/sohu.png";
import logo5 from "../../Assets/Experience/mcdonalds.png";
import logo6 from "../../Assets/Experience/mstandd.png";

function Experience() {
  return (
    <Container>
      <h1 className="experience-heading">Work <strong className="purple">Experience</strong></h1>
      
    <h2 className="section-title">Data Science Related Experience</h2>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo0} alt="Company 0 Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Research Assistant</h3>
        <h5>the University of Glasgow</h5>
        <p>
        Supported UK-based analytics research by modeling IoT data flow and building live dashboards for real-world health logistics applications.
        </p>
    </Col>
    </Row>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo1} alt="Company 1 Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Machine Learning Intern</h3>
        <h5>CNBM Information Technology Co., Ltd.</h5>
        <p>
        Improved data processing efficiency and model accuracy through SQL optimization, feature engineering, and machine learning models like Random Forest and XGBoost. Developed KPI dashboards to support data-driven decision-making.
        </p>
    </Col>
    </Row>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo2} alt="Company 2 Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Data Scientist Intern</h3>
        <h5>ByteDance</h5>
        <p>
        Focused on optimizing user engagement by developing churn prediction models, conducting A/B testing, and analyzing user traffic data, leading to improved retention rates and increased conversion metrics.
        </p>
    </Col>
    </Row>


      <h2 className="section-title">Other Work Experience</h2>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo3} alt="AsiaInfo Technologies Limited Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Product Manager Intern</h3>
        <h5>AsiaInfo Technologies Limited</h5>
        <p>Assisted in defining product requirements and coordinating cross-functional teams, improving feature delivery speed by 15% and supporting data-driven decision-making with analytical reports.</p>
    </Col>
    </Row>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo4} alt="Sohu.com Limited Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Content Operations Intern</h3>
        <h5>Sohu.com Limited</h5>
        <p>Optimized content strategies through data analysis, increasing article engagement by 12% and enhancing user retention with tailored content recommendations.</p>
    </Col>
    </Row>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo5} alt="McDonald's Corporation Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Part-Time Crew Member</h3>
        <h5>McDonald's Corporation</h5>
        <p>Ensured efficient service during peak hours, maintaining 98% order accuracy and supporting inventory management to reduce stock discrepancies by 15%.</p>
    </Col>
    </Row>

    <Row className="experience-card">
    <Col md={2} className="experience-logo-container">
        <img src={logo6} alt="M Stand Coffee Logo" className="experience-logo" />
    </Col>
    <Col md={10} className="experience-description">
        <h3>Part-Time Barista</h3>
        <h5>M Stand Coffee</h5>
        <p>Delivered high-quality customer service, reducing average wait times to under 3 minutes and implementing inventory tracking improvements to minimize waste by 10%.</p>
    </Col>
    </Row>

    </Container>
  );
}

export default Experience;
