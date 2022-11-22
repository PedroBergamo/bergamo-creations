
import React from 'react';
import MusicPlayer from './MusicPlayer.js';
import VideoPlayer from './VideoPlayer.js';
import About from './About.js';

import { Element } from 'react-scroll';

const style = {
    height: 'auto',
    position: 'relative'
};

export default class Container extends React.Component {
    render(){
        return (
            <div className="container-fluid main" style={style}>

                <About/>
                <MusicPlayer/>
                <Element id='VideoPlayer' name='example-destination'>
                  <VideoPlayer />
                </Element>

            </div>
        );
    }
}
