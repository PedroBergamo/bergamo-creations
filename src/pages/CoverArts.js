import React from 'react';
import "../css/pages.css"
import { Container, Row, Col } from "react-bootstrap";

import EneDeparture from "../images/coverarts/ene-departure.jpg"
import EneWave from "../images/coverarts/ene-wave.jpg"
import Antrasiitille from "../images/coverarts/vimma-Antrasiitille.jpg"
import Virta from "../images/coverarts/inke-virta.jpg"
import Sateenkaari from "../images/coverarts/vimma-Sateenkaari.jpg"

function CoverArts() {
  return (
    <div>
    <Container>
      <Row>
      <h1 style={{textAlign: "center"}}>Cover Arts</h1>

      <Col xs={12} sm={6}>
        <div className="song-card">
        <p style={{color: "white"}}>Vimma - Antrasiitille</p>
          <img src={Antrasiitille} width="100%" alt=""/>
          <iframe className="spotify"
           title="Antrasiitille" src="https://open.spotify.com/embed/track/2WdEx6mMdbGZxPznTVpzgm?utm_source=generator&theme=0"
          seamless>
          </iframe>
        </div>

        <div className="song-card">
        <p style={{color: "white"}}>Elias Nieminen - Wave</p>
          <img src={EneWave} width="100%" alt=""/>
          <iframe className="bandcamp" title="Wave"
              src={`https://bandcamp.com/EmbeddedPlayer/album=2795271973/size=small/bgcol=000000/linkcol=999999/tracklist=false/transparent=true/`} seamless>
          </iframe>
        </div>

        <div className="song-card">
        <p style={{color: "white"}}>Elias Nieminen - Departure</p>
          <img src={EneDeparture} width="100%" alt=""/>
          <iframe className="bandcamp" title="Ene Departure"
              src={`https://bandcamp.com/EmbeddedPlayer/track=4111288514/size=small/bgcol=000000/linkcol=999999/tracklist=false/transparent=true/`} seamless>
          </iframe>
        </div>

        </Col>

        <Col xs={12} sm={6}>
          <div className="song-card">
            <p style={{color: "white"}}>Inke Launi - Virta</p>
            <img src={Virta} width="100%" alt=""/>
            <iframe title="virta" className="spotify"
            src="https://open.spotify.com/embed/track/26bUr3VxxHM9JDBd0lCgIa?utm_source=generator" seamless>
            </iframe>
          </div>

          <div className="song-card">
            <p style={{color: "white"}}>Vimma - Sateenkaari</p>
              <img src={Sateenkaari} width="100%" alt=""/>

              <iframe className="spotify" title = "Sateenkaari"
              src="https://open.spotify.com/embed/track/1FBtbz9GvKA5GbFHBa2NXD?utm_source=generator"
              seamless>
              </iframe>
          </div>
          </Col>
      </Row>
    </Container>
    </div>
          );
        }

export default CoverArts;
