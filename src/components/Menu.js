import React from 'react';
import { slide as Slide } from 'react-burger-menu';

import Contacts from './Contacts.js';
import "../css/Menu.css";
import {
     Link
  } from 'react-router-dom';

import menu from "../images/Icons/menu.png"
var Shop = "https://www.etsy.com/fi-en/shop/Visibilium"


var Music = "https://www.pedrobergamo.com/"


export default class Menu extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
        menuOpen: false
      }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
      this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render() {
        return (
          <div>
              <Slide
                right
                customBurgerIcon={ <img src={menu} alt="menu png"/>}
                width={ '100%' }
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
              <div className='menu'>
                <h1 style={{text_align:"left"}}>Menu</h1>
                <div className="menu-button-list">
                  <li onClick={() => this.closeMenu()}><Link className="menu_link" to=
                  "/design"><h1>Design</h1></Link></li>
                  <li onClick={() => this.closeMenu()}><Link className="menu_link" to=
                  "/CoverArts"><h1>Cover Arts</h1></Link></li>
                    <a onClick={() => this.closeMenu()} className="menu_link"
                    href={Shop} target="_blank" rel="noreferrer"><h1>Shop</h1></a>
                    <a onClick={() => this.closeMenu()} className="menu_link"
                    href={Music} target="_blank" rel="noreferrer"><h1>Music</h1></a>

                </div>

              </div>
                <Contacts/>
              </Slide>
              </div>

        )
      }}
