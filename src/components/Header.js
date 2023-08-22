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
            <img className="mark-b" src={Mark} alt=""/>

            </Row>
            <div className="splash-elements">
              <h1>Symbols are powerful because they are visible signs of invisible realities</h1>
              <p>Saint Augustine</p>
            </div>
          </div>
        );
    }
}
