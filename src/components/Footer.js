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
                    <p>&copy; {footerObj.date} - {footerObj.name}</p>
                </footer>
        );
    }
}
