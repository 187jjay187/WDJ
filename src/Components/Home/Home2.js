import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import myImg from '../../Assets/avatar.svg';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME
              {' '}
              <span className="purple"> INTRODUCE </span>
              {' '}
              MYSELF
            </h1>
            <p className="home-about-body">
              &quot;I&apos;m Jerome Osman, a dedicated product developer and passionate full-stack developer based in South Africa.
              My skills extend beyond coding to include
              {' '}
              <b className="purple">UX/UI Design, Graphic Design </b>
              and
              {' '}
              <b className="purple">Marketing</b>
              , allowing me to take a project from an initial idea to the marketplace.
              <br />
              <br />
              With my profound knowledge of Adobe Suite for Graphic Design and Figma for UX/UI design,
              I craft seamless and user-friendly interfaces.
              {' '}
              <b className="cherry-red">But my skills don&apos;t stop at the surface. </b>
              As a developer, I specialize in
              {' '}
              <b className="javascript-yellow"> JavaScript</b>
              ,
              <b className="react-blue"> React</b>
              {' '}
              &amp;
              {' '}
              <b className="purple">Redux,</b>
              <b className="node-green"> Node.js</b>
              {' '}
              and
              {' '}
              <b className="python-blue2">liquid</b>
              ,
              bringing to life dynamic and engaging front-end UIs. On the back end, I leverage
              {' '}
              <b className="cherry-red"> Ruby</b>
              {' '}
              on
              <b className="cherry-red"> Rails</b>
              {' '}
              &amp;
              {' '}
              <b className="javascript-yellow">Py</b>
              <b className="python-blue2">thon</b>
              {' '}
              to manage complex data structures in
              <b className="node-green">MongoDB</b>
              ,
              {' '}
              <b className="python-blue2"> PostgreSQL</b>
              and
              {' '}
              <b className="firebase-orange">Firebase</b>
              .
              <br />
              <br />
              Outside of work, I am an adventurer at heart, always keen to learn about different cultures,
              content creation, and building new
              {' '}
              <b className="purple">Web Technologies and Products </b>
              in the
              {' '}
              <b className="purple">eCommerce sector. </b>
              I continually apply my passion for product development to a variety of personal projects using cutting-edge tech like
              <b className="purple"> Node.js</b>
              {' '}
              and
              {' '}
              <b className="purple"> React.js and Next.js</b>
              .&quot;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              FIND
              {' '}
              <span className="purple">ME </span>
              {' '}
              ON
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/187jjay187"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/187jjay187"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jerome-osman"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
