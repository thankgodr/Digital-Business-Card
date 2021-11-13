import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HeaderImage from './headers/HeaderImage';
import Name from './headers/Name';
import Occupation from './headers/Occupation';
import SocialButtons from './headers/SocialButtons';
const Header = () => {
  return (
    <div className="text-center">
      <HeaderImage />
      <Name />
      <Occupation />
      <a className="linkedLink" href="http://linkedin.com/thankgodr">
        Linkedin @thankgodr
      </a>
      <Row>
        <Col md={6}>
          <SocialButtons name="Facebook" onclick="handle" icon="fab fa-facebook-f" />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
