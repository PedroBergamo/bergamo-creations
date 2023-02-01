import React from 'react';
import { Link } from 'react-router-dom';
import CoverArtsInfo from "./content/CoverArts.json"
import "../css/pages.css"
import { Container, Row, Col } from "react-bootstrap";

import Flores from "../images/coverarts/FloresPeloCeu.jpg"
import Imigrante from "../images/coverarts/Imigrante.jpg"

import EneDeparture from "../images/coverarts/ene-departure.jpg"

function CoverArts() {
  return (
    <div className="music-page">
    <Container>
      <Row className="music-row">
      <p align="center" >Click in the cover art to listen the music</p>

      <Col xs={12} sm={6}>

      <div className="song-card">
        <Link className="link" to={`CoverArt/${CoverArtsInfo[5].id}`}>
        <img src={EneDeparture} width="100%" alt=""/>
      </Link>
      </div>

      <div className="song-card">
        <Link className="link" to={`CoverArt/${CoverArtsInfo[5].id}`}>
        <img src={Imigrante} width="100%" alt=""/>
        </Link>
      </div>

      <div className="song-card">
        <Link className="link" to={`CoverArt/${CoverArtsInfo[4].id}`}>
          <img src={Flores} width="100%" alt=""/>
        </Link>
      </div>

        </Col>
        <Col xs={12} sm={6}>


          </Col>
      </Row>
    </Container>
    </div>
          );
        }

export default CoverArts;
