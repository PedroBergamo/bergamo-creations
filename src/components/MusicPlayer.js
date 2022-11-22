import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BandCamp = {
    song1: 'https://bandcamp.com/EmbeddedPlayer/track=101063964/size=small/bgcol=ffffff/linkcol=000000/tracklist=false/transparent=true/',
    song2: 'https://bandcamp.com/EmbeddedPlayer/track=1471844362/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
    song3: 'https://bandcamp.com/EmbeddedPlayer/track=2366630471/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
    imigrante: 'https://bandcamp.com/EmbeddedPlayer/track=2965750530/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/'
};
const style = {
    border: '0',
    width: '100%',
    height: '700px'
};

export default class MusicPlayer extends React.Component {
    render() {
        return (
            <Container id="music">
                <Row>
                  <Col xs={12} sm={6}>
                        <h1>Music</h1>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>O Feiticeiro Esteve Aqui <i></i></h3>
                        <iframe style={style} title="O Feiticeiro Esteve Aqui" src={BandCamp.song1} seamless>
                            <a href="https://pedrobergamo.bandcamp.com/track/o-feiticeiro-esteve-aqui">O Feiticeiro Esteve Aqui</a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Flores pelo céu<i></i></h3>
                        <iframe style={style} title="Flores pelo céu" src={BandCamp.song2} seamless>
                            <a href="https://pedrobergamo.bandcamp.com/track/flores-pelo-c-u">Flores Pelo Céu</a>
                        </iframe>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Abrahadabra!<i></i></h3>
                        <iframe style={style} title="Abrahadabra!" src={BandCamp.song3} seamless>
                            <a href="https://pedrobergamo.bandcamp.com/track/abrahadabra">Abrahadabra!</a>
                        </iframe>
                    </Col>
                </Row>
            </Container>
        );
    }
}
