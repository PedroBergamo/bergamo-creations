import "../css/pages.css"
import Clients from "../components/Clients.js";
import {Container, Row, Col} from "react-bootstrap"
import Pedro from "../images/photo-pedro-3.jpg"

import Signature from "../images/signature.png"

const Portfolio = () => {
  return(
    <div>
      <Container className="splash">
      <Row>
      <Col>

    </Col>
      <Col xs={12} md={4} >
        <h1>Symbols are powerful because they are visible signs of invisible realities</h1>
        <h2>-Saint Augustine-</h2>
      </Col>
      </Row>


      </Container>
      <div className="about">
      <Row>
        <Col xs={12} md={4} className="pedro-photo">
          <img src={Pedro} width="100%" alt="pedro"/>
        </Col>
          <Col xs={12} md={8} >
      <h1> Pedro Bergamo</h1>
      <p>
      Bergamo Creations is a Helsinki-based branding agency run by the designer, developer and musican Pedro Bergamo. <br/>Focused on the
      creation and nurturing of creative brands. It aims to serve musicians
      to build a strong digital identity through the creation of
      logos, branding books and divergent art pieces such as cover arts, posters and fine art prints.
      </p>
      <img src={Signature} width="50%" alt="signature"/>
      </Col>
    </Row>

      </div>


    <Clients/>
    </div>
    )
}

export default Portfolio;
