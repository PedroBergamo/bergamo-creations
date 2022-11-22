import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

const navObj = {
    title: 'PEDRO BERGAMO',
    logo: 'images/logo.png',
    navStyle: {
        fontSize: '1em',
        marginTop: '16px',
        float: 'right'
    },
    brandStyle: {
        fontSize: '1.4em'
    },
    linkStyle: {
      marginRight: '16px'
    }
};

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="bungee white" style={navObj.brandStyle}>
                    {navObj.title}
                </Navbar.Brand>
                <Nav>
                  <ScrollLink
                    to="VideoPlayer"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='some-class'
                    activeClass='some-active-class'
                  >
                  Video Player
                  </ScrollLink>
                </Nav>
                <Nav className="mr-auto" style={navObj.navStyle}>
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
                </Nav>
            </Navbar>
        );
    }
}
