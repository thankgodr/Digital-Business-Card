import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HeaderImage from './headers/HeaderImage';
import Name from './headers/Name';
import Occupation from './headers/Occupation';
import SocialButtons from './headers/SocialButtons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  return (
    <div className="text-center">
      <HeaderImage />
      <Name />
      <Occupation />
      <a className="linkedLink" href="http://linkedin.com/thankgodr">
        Linkedin @thankgodr
      </a>
      <Row className="mt-3 mb-3">
        <Col md={6}>
          <SocialButtons
            name="Email"
            onclick="handle"
            icon={faEnvelope}
            classname="email_btn"
            extra="null"
          />
        </Col>
        <Col md={6}>
          <SocialButtons
            name="Twitter"
            onclick="handle"
            icon={faTwitter}
            classname="twitter_btn"
            extra="null"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
