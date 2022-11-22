import React from 'react';
import "./pages.css"
import { Container, Row, Col } from "react-bootstrap";

import Flores from "../images/wallpapers/Flores.png"
import Abrahadabra from "../images/wallpapers/Abrahadabra.png"
import LagoBrasil from "../images/wallpapers/LagoBrasil.png"
import Feiticeiro from "../images/wallpapers/Feiticeiro.png"

function wallpapers() {
  return (
    <Container>
      <Row>
      <h1>Wallpapers</h1>
      <Col xs={12} sm={6}>
          <img className="wallpaper" src={Feiticeiro} width="50%" alt=""/>
          <img className="wallpaper" src={Flores} width="50%" alt=""/>
        </Col>
          <Col xs={12} sm={6}>
            <img className="wallpaper" src={Abrahadabra} width="50%" alt=""/>
            <img className="wallpaper" src={LagoBrasil} width="50%" alt=""/>
          </Col>
      </Row>
    </Container>
          );
        }

export default wallpapers;
