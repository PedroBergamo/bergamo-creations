import React from 'react';
import "../css/Header.css";
import Menu from "./Menu.js";

import Mark from "../brand/mark/bergamoth.png";


export default class Header extends React.Component {
    render() {
        return (
          <div className="header" id="myHeader">
            <Menu/>
            <div className="logo">
              <img src={Mark} width="200px" alt="mark"/>
                <h1>Bergamo Creations</h1>
                <p>Eccentrify your identity</p>
            </div>
          </div>
        );
    }
}
