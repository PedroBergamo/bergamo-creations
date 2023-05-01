import React from 'react';
import { Nav } from 'react-bootstrap';
import "../css/components.css";

const navObj = {
    linkStyle: {
      margin: "10px",
      textAlign: "center"
    }
};

export default class Contacts extends React.Component {
    render() {
        return (
          <div className="contacts">
                <p>pedro@bergamocreations.com</p>
                <Nav className="nav-links">
                <Nav.Link
                    href="https://www.instagram.com/bergamocreations/"
                    target="_blank"
                    alt="Instagram"
                    style={navObj.linkStyle}
                  >
                    <span className="fa fa-instagram black" style={{fontSize: '40px'}}></span>
                </Nav.Link>
                    <Nav.Link
                        href="https://www.facebook.com/profile.php?id=100087251499811"
                        target="_blank"
                        alt="Facebook"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-facebook black" style={{fontSize: '40px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.behance.net/pedrobergamo"
                        target="_blank"
                        alt="Behance"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-behance black" style={{fontSize: '40px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.etsy.com/fi-en/shop/BergamoCreations"
                        target="_blank"
                        alt="Etsy"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-etsy black" style={{fontSize: '40px'}}></span>
                    </Nav.Link>

                </Nav>
                </div>
        );
    }
}
