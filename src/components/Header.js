import React from 'react';
import "../css/Header.css";
import Menu from "./Menu.js";

import {Row} from "react-bootstrap"
import Logo from "../brand/logo/BC-logo-pink.svg";


export default class Header extends React.Component {
    render() {
        return (
          <div className="header" id="myHeader">
          <Row>
            <Menu/>
          </Row>
            <div className="splash-elements">
            <img className="logo" src={Logo} alt=""/>
              <h3>Strategic designs for rebellious brands</h3>
            </div>
          </div>
        );
    }
}
