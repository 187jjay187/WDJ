import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/about.png';
import Toolstack from './Toolstack';
import FrameworkTechStack from './Frameworkstack';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Get To Know
              {' '}
              <strong className="purple">The Details</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Language
          {' '}
          <strong className="purple">Tech Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Framework
          {' '}
          <strong className="purple">Tech Stack </strong>
        </h1>

        <FrameworkTechStack />

        <h1 className="project-heading">
          Tech
          <strong className="purple"> Tools</strong>
          {' '}
          I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
