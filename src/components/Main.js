import React from 'react';
import { Col, Row } from 'react-bootstrap';
import About from './main/About';

const Main = () => {
  const interest =
    ' Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic';
  return (
    <Row>
      <Col md={12}>
        <About />
      </Col>
      <Col md={12}>
        <About title="Interest" details={interest} />
      </Col>
    </Row>
  );
};

export default Main;
