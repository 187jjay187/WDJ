import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiNodejs,
  // DiMongodb,
  DiPython,
  // DiGit,
  // DiBootstrap,
  DiCss3,
  // DiJqueryUiLogo,
  DiRuby,
} from 'react-icons/di';
import {
  // SiRedis,
  // SiFirebase,
  // // SiNextdotjs,
  // SiPostgresql,
  // SiRedux,
  // SiRubyonrails,
  // SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
// import { TbBrandGolang } from 'react-icons/tb';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJqueryUiLogo />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRubyonrails />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
    </Row>
  );
}

export default Techstack;
