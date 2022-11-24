import React from 'react';
import "./pages.css";
import {Col} from "react-bootstrap";

var Photo = "./brand/Pedro.png"

const Santeros = () => {
  return(
    <div className="content">
        <Col xs={12} md={8} >
        <h1>BIO</h1>
        </Col>
        <Col xs={6} md={4}>
        <img src={Photo} width="100%" alt=""/>
        <p align="center"><a download="Pedro_Bergamo.jpg" href={Photo} rel="noreferrer" target="_blank"> Download photo</a></p>
        <iframe width="560" height="315"  className="video"
        src="https://www.youtube.com/embed/ctxEx62X7Rk"
        title="YouTube video player" fframeBorder="0" allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </Col>
        </div>
    );
};

export default Santeros;
