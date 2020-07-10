import React from "react";
import { Container, Row, Col } from "reactstrap";

import Scanner from './Scanner';
import Platform from './Platform';

const Home = () => (
  <>
    <Container style={{textAlign:"center"}}>
      <Row>
        <Col sm={12} md={6}><Scanner/></Col>
        <Col sm={12} md={6}><Platform/></Col>
      </Row>
    </Container>
  </>
);

export default Home;
