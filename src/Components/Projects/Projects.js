import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import DevNews from '../../Assets/Projects/Dev News mock up.png';
import BookstoreCRM from '../../Assets/Projects/Bookstore CRM mock up.png';
import MustBeFoutwenty from '../../Assets/Projects/MB420 myshopify theme mock up.png';
import zehavacreations from '../../Assets/Projects/Zehavacreations myshopify theme mock up.png';
import dailyplanner from '../../Assets/Projects/dailyplanner.png';
import woodlanefurniture from '../../Assets/Projects/Woodlanefurniture-myshopify-theme-mock-up.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
          <br />
          <br />
          <strong>Password: </strong>
          <strong className="purple"> WebDevJay </strong>
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zehavacreations}
              isBlog={false}
              title="Zehava Creations"
              description="is a Custom Shopify eCommerce store That was built for Womens Self Defense Keychain store to provide a insynce Branding image and UX/UI Design for zehavacreations.com that would help promote a product first experience while keeping the user in mind."
              ghLink="https://github.com/187jjay187/ZehavaCreations-myshopify-theme"
              demoLink="https://zehavacreations.myshopify.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woodlanefurniture}
              isBlog={false}
              title="Woodlane Furniture"
              description="is a Custom Shopify eCommerce store That was built for Woodlane Furniture store, A online division of the physical ratail store which provided a insynce Branding image and UX/UI Design for woodlanefurniture.com that would help promote a product first experience while keeping the user in mind."
              ghLink="https://github.com/187jjay187/woodlanefurniture-myshopify-theme"
              demoLink="https://woodlanefurniturestore.myshopify.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MustBeFoutwenty}
              isBlog={false}
              title="MustBeFoutwenty"
              description="is a Custom Shopify eCommerce store That was built as online retail store front to its wholesale counter parts GreenlaneSA & GurusDistro B2B Distributors, This eCommerce Store provided a insynce Branding image and UX/UI Design for MustBeFourTwenty.com that would help promote a product first experience while keeping the user in mind."
              ghLink="https://github.com/187jjay187/MB420-myshopify-theme"
              demoLink="https://mustbefourtwenty.myshopify.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DevNews}
              isBlog={false}
              title="Dev News"
              description="This is a single page application of a Tech-News-Blog that showcase's weekly blog updates with topics ranging from programming languages, to top university speakers and contributors as well as information about the site and a contact page,  this project was built with HTML, CSS and JavaScript"
              ghLink="https://github.com/187jjay187/cap-tech-page"
              demoLink="https://187jjay187.github.io/cap-tech-page/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailyplanner}
              isBlog={false}
              title="Daily Planner"
              description="In this project I created a To-Do List Application with JavaScript, Reacts & Redux, this application allows you to add, edit, mark complete and delete completed tasks. future features to be implemented would be a color theme picker, a timed task with a start alarm and a timer."
              ghLink="https://github.com/187jjay187/react-to-do-list"
              demoLink="https://to-do-list-08il.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookstoreCRM}
              isBlog={false}
              title="Bookstore CRM"
              description="This Book Store CRM was created using JavaScript, React & Redux, with functionality to keep track of the books you are currently reading, future features to be Implemented are, Profile-linked Api Database to store uploaded pdf's, ebooks, epub book files on a digital display bookshelf as well as an open library to free online books filters."
              ghLink="https://github.com/187jjay187/Book-store/"
              demoLink="https://book-store-58t6.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
