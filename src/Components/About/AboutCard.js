import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hey Again,
            {' '}
            <strong className="Heading-J">J</strong>
            <span className="purple">erome Osman </span>
            from
            {' '}
            <span className="Heading-So"> So</span>
            <span className="Heading-uth">ut</span>
            <span className="Heading-Af">h Af</span>
            <span className="Heading-ri">ri</span>
            <span className="Heading-ca">ca</span>
            {' '}
            Here
            {' '}
            <br />
            <br />
            {' '}
            As a full-stack developer, my front-end expertise lies in JavaScript, React, Redux, and Node.js. On the back end, I use Ruby on Rails and Python, working with databases like MongoDB and PostgreSQL. I also harness Adobe Suite and Figma for design and employ tools like Git and VScode for project management.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              - Content Creation
            </li>
            <li className="about-activity">
              - Travelling
            </li>
            <li className="about-activity">
              - Reading
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            &ldquo;Life is like code, inspect your reality and only commit to a positive change&rdquo;
            {' '}
          </p>
          <footer className="blockquote-footer">WebDevJay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
