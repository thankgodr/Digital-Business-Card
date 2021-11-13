import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FooterButton from './footer/FooterButton';
import {
  faTwitter,
  faFacebookF,
  faInstagramSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Row>
      <Col className="footer_container text-center p-5">
        <FooterButton icon={faTwitter} />
        <FooterButton icon={faFacebookF} />
        <FooterButton icon={faInstagramSquare} />
        <FooterButton icon={faGithub} />
      </Col>
    </Row>
  );
};

export default Footer;
