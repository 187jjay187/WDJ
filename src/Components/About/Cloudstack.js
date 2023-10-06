import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
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

function Cloudstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
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

export default Cloudstack;
