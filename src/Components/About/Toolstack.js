import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiAdobe,
  SiGit,
  SiRedis,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiWebpack,
  SiHeroku,
  SiNetlify,
  SiAmazonaws,
  SiAmazons3,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAwsfargate,
  SiAwslambda,
  SiAmazonecs,
  SiAmazoneks,
  SiAmazonrds,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
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
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsfargate />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonecs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazoneks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonrds />
      </Col>
    </Row>
  );
}

export default Toolstack;
