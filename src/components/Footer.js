import React from 'react';
import '../index.css';
import SocialMedia from "./SocialMedia.js";
const date = new Date();

const footerObj = {
    name: 'Bergamo Creations',
    date: date.getFullYear(),
    contact: 'pedro@bergamocreations.com'
};

export default class Footer extends React.Component {
    render(){
        return (
                <footer className="footer" >
                <h3>pedro@bergamocreations.com</h3>
                    <SocialMedia/>
                    <h3>&copy; {footerObj.date} - {footerObj.name}</h3>
                </footer>
        );
    }
}
