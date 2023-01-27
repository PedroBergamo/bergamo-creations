import React from 'react';
import '../css/components.css';
import Contacts from "./Contacts.js";
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
                    <Contacts/>
                    <h3>&copy; {footerObj.date} - {footerObj.name}</h3>
                </footer>
        );
    }
}
