import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <Row className="main_row justify-content-md-center">
      <Col xs={12} md={6} className="align-self-center mainCol">
        <Header />
        <Main />
      </Col>
    </Row>
  );
}

export default App;
