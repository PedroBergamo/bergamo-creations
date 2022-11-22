import React from 'react';
import { Nav } from 'react-bootstrap';
import "../index.css";

const navObj = {
    brandStyle: {
        fontSize: '1.4em'
    },
    linkStyle: {
      margin: "10px",
    }
};

export default class SocialMedia extends React.Component {
    render() {
        return (
          <div className="social-media">
          <h3 style={{marginBottom:"10%"}}>Connect with the mystic:</h3>
                <Nav>
                <Nav.Link
                    href="https://www.instagram.com/pedro.bergamo/"
                    target="_blank"
                    alt="Instagram"
                    style={navObj.linkStyle}
                  >
                    <span className="fa fa-instagram white" style={{fontSize: '24px'}}></span>
                </Nav.Link>
                    <Nav.Link
                        href="https://www.facebook.com/PedroBergamoOfficial/"
                        target="_blank"
                        alt="Facebook"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-facebook white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.youtube.com/channel/UCNQ8zZfIcpQf9cNEYxsoiOQ"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-youtube white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>

                    <Nav.Link
                        href="https://open.spotify.com/artist/3mRWEl21jxyttpZH1s7TSd?si=7108dad7994b415c"
                        target="_blank"
                        alt="ReverbNation"
                        style={navObj.linkStyle}
                      >
                        <span className="fa fa-spotify white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                    <Nav.Link
                        href="https://pedrobergamo.bandcamp.com"
                        target="_blank"
                        alt="Bandcamp"
                        style={navObj.linkStyle}
                    >
                        <span className="fa fa-bandcamp white" style={{fontSize: '24px'}}></span>
                    </Nav.Link>
                </Nav>
                </div>
        );
    }
}
