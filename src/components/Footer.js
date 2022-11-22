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
                <footer className= "footer" >
                    <SocialMedia/>
                    <h2>{footerObj.contact}</h2>
                    <h2>&copy; {footerObj.date} - {footerObj.name}</h2>
                </footer>


        );
    }
}
