import React from 'react';
import "./pages.css";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Photo from "../images/Photos/Pedro_candle.jpg"
var satu = "https://www.satulankinen.fi/";
var Seppo = "https://www.satulankinen.fi/";
var canario_passarinho = "https://www.recantocaipira.com.br/duplas/canario_passarinho/canario_passarinho.html";
var dream = "https://medium.com/@pedro.bergamo/my-dream-as-a-composer-96f8b9903ba0";
var flotation = "http://flotation-simulator.com";
var simulation = "https://www.sciencedirect.com/science/article/pii/S089268752100501X";
var LOTR = "https://trepo.tuni.fi/bitstream/handle/10024/105456/LoponenMax2019.pdf;sequence=1";
var rolando = "https://www.linkedin.com/in/rolandocamilo/";

const Santeros = () => {
  return(
    <div className="content">
        <Col xs={12} md={8} >
        <h1>Press Kit</h1>
        <p>
        It all started with a tune he heard in a <a className="text_link" href={dream} target="_blank" rel="noreferrer">dream</a>.
        After that, a 15 year old Pedro Bergamo got involved with the lutheran church, composing music to be sang by the masses while studying to become a pastor.
        He would probably be living a very different life if it was not for a force that dragged him out of his safe haven. A "l'appel du vide" sort of thing.
        In his 17s, Pedro left the church and dived deep into other religions and mystical practices, as e.g. the Latin-American "Santeria".
        He moved to São Paulo and joined as the lead singer in a hard rock band, playing in a couple bars and festivals.
        He started composing rock music in English and at some point, the band was solely playing his compositions.
        But his trouble with alcohol and a near death experience led him to give up the project and return to his hometown to live with his biological father.
        </p>
        <p>
        His father had plans to turn him into a star of Sertanejo (Brazilian Country music), just like <a className="text_link" href={canario_passarinho} target="_blank" rel="noreferrer">himself</a>. He bought him a viola caipira
        and Pedro came up with a repertoire mostly played to entertain his grandfather, whom he always had a strong bond with. At this point he also started composing music in the viola caipira,
        experimenting with Portuguese for the first time after leaving the church. But he never really thought of it as a profession. Instead, he was looking for something deeper and more meaningful, like becoming a monk or a martial arts teacher.
        One day at a friend's house, he found a book about magic and asked if he could borrow it. The magic of the book, for his disappointment, was not the same as Aleister Crowley's or Eliphas Levi's.
        It was a book full of magic tricks. One of the magic tricks, however, related to the use of a compound to make a handwriting disappear in paper, sparked his interest in Chemistry.
        So when he was 22, he enrolled in a chemistry program obtaining the title of Master of Science in 2017. The same year he moved to Finland to pursue a Ph.D.. During the next 4 years he would develop
        simulators and games to teach the chemistry related to  <a className="text_link" href={flotation} target="_blank" rel="noreferrer">flotation</a>, as also write scientific papers on the <a className="text_link" href={simulation} target="_blank" rel="noreferrer">subject</a>.
        </p>
        <p>
        In 2020, after 4 years away from home, he received the news that his grandfather died. Not being able to attend the funeral made him question his choice of leaving his home country.
        Looking for ways to deal with the grief, he revisited the Brazilian music he composed in his early 20s and recorded <Link className= "text_link" target="_blank" to="/music">some</Link> of them using solely Brazilian instruments.
        In 2021, he saw an advertising in Muusikoiden.net of a latin band looking for a lead singer and he joined. There he met Satu, Seppo and Rolando and practiced those songs for the first time with a band, together with other covers.
        After some gigs, the drummer/sound designer <a className="text_link" href={rolando} target="_blank" rel="noreferrer">Rolando Camilo</a> suggested that they should have another project, which would focus only on his original compositions. A "Brazilian Radiohead" or "Latin Pink Floyd" sort of thing.
        They invited the folk artist <a className="text_link" href={satu} target="_blank" rel="noreferrer"> Satu Lankinen</a> in the accordion and named the group "Los Santeros".
        The legendary guitarist <a className="text_link" href={Seppo} target="_blank" rel="noreferrer">Seppo Salmi</a> joined the gang and they renamed it to "Pedro Bergamo & Los Santeros",
        since there was another American band called "Los Santeros". After a while testing with different bassists, the jazz/bossa nova musician and <a className="text_link" href={LOTR} target="_blank" rel="noreferrer">literature master</a> Max Loponen joined the party.
        </p>
        <p>
        Right now the band is in the process of recording their debut album, but they are open for gig offers. Send us a message!
        </p>
        <h1>Reviews</h1>
        <p>"Soulful, mystical and danceable. It is like a cool gypsy band. A hidden gem in Helsinki that everyone should know about!"</p>
        <p>"Erityisesti jäi mieleen laulajan karismaattinen tulkinta ja ihania melodioita sisältäneet biisit.
        Samalla intiimi mutta myös rento keikka , jota menisin kastomaan uudellen"</p>
        <h1>PB & Los Santeros:</h1>
            <p>Pedro Bergamo - Acoustic Guitar & Vocals</p>
            <p>Rolando Camilo - Drums & Backing Vocals</p>
            <p>Satu Lankinen - Accordion & Backing Vocals</p>
            <p>Seppo Salmi - Electric Guitar</p>
            <p>Max Loponen - Bass</p>
        <h1>Contact for gigs:</h1>
        <p>phone: (+358)406740101</p>
        <p>email: pedrobergamo89@gmail.com</p>
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
