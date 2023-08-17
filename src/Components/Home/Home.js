import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../Assets/2016-06-30_06.19_1-removebg-icons2.png';
import Home2 from './Home2';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                {' '}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I&apos;m
                {' '}
                <strong className="Heading-J">J</strong>
                <strong className="main-name">erome Osman.</strong>
              </h1>
              <h1 className="heading-name">
                A Product
                <strong className="main-name"> Developer</strong>
              </h1>
              <h1 className="heading-name">
                Based in
                <strong className="Heading-So"> So</strong>
                <strong className="Heading-uth">ut</strong>
                <strong className="Heading-Af">h Af</strong>
                <strong className="Heading-ri">ri</strong>
                <strong className="Heading-ca">ca</strong>
              </h1>
              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
                <p>
                  <b>I like to think I&apos;m A Jack of all trades, which is better than a master of one.</b>
                  <br />
                  <b>
                    And if your Product is in need of multifaceted skills,
                    Then I am your guy.
                  </b>
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
