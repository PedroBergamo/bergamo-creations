import React from 'react';
import "../css/Header.css";
import Menu from "./Menu.js";

import {Row} from "react-bootstrap"
import Mark from "../brand/mark/mark-white-BC-web.png";


export default class Header extends React.Component {
    render() {
        return (
          <div className="header" id="myHeader">
          <Row>
            <Menu/>

            <img className="mark-background" src={Mark} alt=""/>
            </Row>
            <div className="splash-elements">

              <h1>Bergamo Creations</h1>
            </div>
          </div>
        );
    }
}
