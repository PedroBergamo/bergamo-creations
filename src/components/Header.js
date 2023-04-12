import React from 'react';
import "../css/Header.css";
import Menu from "./Menu.js";

import {Row} from "react-bootstrap"
import Mark from "../brand/mark/bergamoth.png";


export default class Header extends React.Component {
    render() {
        return (
          <div className="header" id="myHeader">
          <Row>
            <Menu/>
          </Row>
            <div className="splash-elements">
            <img src={Mark} width="40%" alt="mark"/>
              <h1>Bergamo Creations</h1>
              <p>Eccentrify your identity</p>
            </div>
          </div>
        );
    }
}
