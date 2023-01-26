import React from 'react';
import "../css/Header.css";
import Menu from "./Menu.js";

import Mark from "../brand/mark/mark-white.png";


export default class Header extends React.Component {
    render() {
        return (
          <div className="header" id="myHeader">
            <Menu/>
            <div className="logo">
              <img src={Mark} width="100px" alt="mark"/>
            </div>
          </div>
        );
    }
}
