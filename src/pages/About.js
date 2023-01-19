import React from 'react';
import "../css/pages.css"
import {Link} from "react-router-dom"
import cv from "../Resources/CV.pdf";
import AboutBanner from "../images/Banner/About.jpg"
import {Col} from "react-bootstrap";
var chemistry = "https://www.sciencedirect.com/science/article/pii/S0022231316305737";
var chemicalphysics = "https://www.sciencedirect.com/science/article/pii/S0301010416301501";
var chemistryc = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85020209527&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var natural = "https://www.scopus.com/record/display.uri?eid=2-s2.0-85019731851&origin=recordpage&featureToggles=FEATURE_VIEW_PDF:1";
var minerals = "https://www.sciencedirect.com/science/article/abs/pii/S089268752100501X";
var fs = "http://www.flotation-simulator.com"
var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";


const About = () => {
  return(
    <div>
          <img src={AboutBanner} width="100%" height= "30%" alt="AboutMeBanner"></img>

          <Col className="last-column" xs={12} md={8}>
          <p>
          Pedro Bergamo is a brand designer based in Helsinki-Finland.
          Born in 1989, he was raised by his mom and step-dad in a poor neighbourhood of Franca-Brazil. He is the third biological son of Pedro Bergamo from the Sertanejo duo <a
        className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">
        "Canário e Passarinho"</a>.
        </p>
        <p>
          When young, he was deeply involved with the church and even studied to become a pastor due to his interest in spirituality, mythology and ancient history.
          He was also passionate about astronomy, which led him to the work of Carl Sagan and Isaac Asimov.
          </p>
          <p>
          When he was 17, his uncle convinced him to study chemistry, after noticing his interest in science fiction.
          After receiving an internship in the department of
          computational chemistry of the University of Franca, he did his Master's Degree and published his research in the <a className="text_link" href={chemistry}
          target="_blank" rel="noreferrer">"Journal of Luminescence"</a>, besides contributing with his colleagues research published in <a className="text_link" href={chemicalphysics}
          target="_blank" rel="noreferrer">"Chemical Physics"</a>, <a className="text_link" href={chemistryc}
          target="_blank" rel="noreferrer">"Journal of Physical Chemistry C"</a> and <a className="text_link" href={natural}
          target="_blank" rel="noreferrer">"Natural Products Communications"</a>.
          In this period, while working as a producer and marketing specialist in the morning for a radio show, he would teach chemistry during the night for high school students.
          In 2017, he moved to Finland to pursue a PhD.
          </p>
          <p>
          In Finland, he got a position as a researcher in modelling and simulation, programming the
          chemistry behind the simulators used in the training of process operators. He is the main author of a review on thoses types of simulations published in
           <a className="text_link" href={minerals}
          target="_blank" rel="noreferrer">"Minerals Engineering"</a>.
          After two years as a programmer and teacher, he heard a call to go back to working with people, so he
          moved to Helsinki to work at the "Digital Solutions" team of now Metso-Outotec. There he focused on
          graphic design, front-end development, UX design, 3d modelling and game development. Since 2021 he works as a freelancer.
          Here you can find some samples of his work in <Link className= "text_link" target="_blank" to="/music">graphic design</Link> and <a className="text_link" href={fs}
          target="_blank" rel="noreferrer">UX, game development</a>.
          </p>
          </Col>
          <Col className="last-column" xs={6} md={4}>
          <h1>CV</h1>
          <p>
            Click here for a resumed version of his <a className="text_link" download="BergamoCV.pdf" href={cv} rel="noreferrer" target="_blank" >CV</a>.</p>
            </Col>
        </div>
    );
};

export default About;
