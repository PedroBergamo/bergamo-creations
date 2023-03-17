import "../css/pages.css"
import Clients from "../components/Clients.js";
import {Container, Row, Col} from "react-bootstrap"
import Pedro from "../images/photo-pedro-samuel.jpg"

const About = () => {
  return (
  <div className="about">
  <Row>
    <Col xs={12} md={4} className="pedro-photo">
        <img src={Pedro} width="100%" alt="pedro"/>
    </Col>
    <Col xs={12} md={8} >
      <h1> Pedro Bergamo</h1>
      <p>
      Bergamo Creations is a Helsinki-based branding agency run by the designer, illustrator, developer and musican Pedro Bergamo.
      <br/>Focused on the creation and nurturing of musical acts, its mission is to connect artists
      and audiences through the development of strong identities,
      brands, websites and divergent art pieces.
      </p>
      <p>Let's work together?</p>
      <button className="email-button" onClick={() => window.location = 'mailto:pedro@bergamocreations.com'}>
      <h3>pedro@bergamocreations.com</h3></button>
      </Col>
  </Row>
  </div>
  )
}

const Splash = () => {
  return (
    <div>
    <Container className="splash">
    <Row className="d-none d-lg-block">
    <h1><br/></h1>
    <h1>Bergamo Creations</h1>
    <h1><br/></h1>
    </Row>
    <Row>
      <h1>Symbols are powerful because they are visible signs of invisible realities</h1>
      <h2 style={{width:"100%"}}>-Saint Augustine-</h2>
    </Row>
    </Container>
    </div>
  )
}


const Portfolio = () => {
  return(
    <div>
    <Clients/>
    </div>
    )
}

export default Portfolio;
