import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class VideoPlayer extends React.Component {
    render() {
        return (
            <Container id="video">
                <Row>
                  <Col xs={12} sm={6}>
                        <h1>Video</h1>
                        <iframe
                        src="https://www.youtube.com/embed/fMm1JMiDnns" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
                         </iframe>
                         <iframe  src="https://www.youtube.com/embed/91Iy7s-69Eg"
                         title="YouTube video player" frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
                         </iframe>
                         <iframe src="https://www.youtube.com/embed/AAyLnz6R04s"
                         title="YouTube video player" frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
                         </iframe>
                         <iframe src="https://www.youtube.com/embed/IFik681CDtM" title="YouTube video player" frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                         </iframe>
                      </Col>
                </Row>
            </Container>
        );
    }
}
