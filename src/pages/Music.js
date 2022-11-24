import React from 'react';
import { Link } from 'react-router-dom';
import MusicList from "./content/MusicList.json"
import "./pages.css"
import { Container, Row, Col } from "react-bootstrap";
import Flores from "../images/coverarts/FloresPeloCeu.jpg"
import Imigrante from "../images/coverarts/Imigrante.jpg"

function Music() {
  return (
    <div className="music-page">
    <Container>
      <Row className="music-row">
      <p align="center" >Click in the cover art to open the music</p>
      <Col xs={12} sm={6}>
      <div className="song-card">
        <Link className="link" to={`music/${MusicList[5].id}`}>
        <img src={Imigrante} width="100%" alt=""/>
      </Link>
      </div>
        <div className="song-card">
          <Link className="link" to={`music/${MusicList[3].id}`}>
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

export default Music;
