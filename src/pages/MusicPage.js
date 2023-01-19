import React from 'react';
import MusicList from "./content/MusicList.json"
import {Redirect} from "react-router-dom"
import "../css/pages.css"
import {Col} from "react-bootstrap"

const MusicPage = (props) => {
  const ValidId = parseInt(props.match.params.id)
  if(!ValidId){
    return <Redirect to="/404" />
  }
  const fetchedSong = {}
  MusicList.forEach((item, i) => {
    if(ValidId === item.id){
      fetchedSong.title = item.title ? item.title: "No title given"
      fetchedSong.englishtitle = item.englishtitle ? item.englishtitle: "No title given"
      fetchedSong.lyrics = item.lyrics ? item.lyrics: "No lyrics available"
      fetchedSong.translation = item.translation ? item.translation: "No translation available"
      fetchedSong.video = item.video ? item.video: "No video given"
      fetchedSong.bandcamp = item.bandcamp ? item.bandcamp: "No content given"
    }
  });

  return(
          <div key={fetchedSong.id} className="song">
          <Col xs={8} md={6}>
          <h3>{fetchedSong.title}</h3>
          {fetchedSong.lyrics.map((verse, i) => {
            return <p key={i} className="lyrics">{verse}</p>
          })}
          </Col>
          <Col xs={8} md={6}>
          <h3>{fetchedSong.englishtitle}</h3>
          {fetchedSong.translation.map((verse, i) => {
            return <p key={i} className="lyrics">{verse}</p>
          })}
          </Col>
            <p>&nbsp;</p>
            <p>Composer: Pedro Bergamo</p>
            <p>© Aracnídea Records</p>
            <iframe className="bandcamp" title={fetchedSong.title}
                src={`https://bandcamp.com/EmbeddedPlayer/track=${fetchedSong.bandcamp}/size=small/bgcol=000000/linkcol=999999/tracklist=false/transparent=true/`} seamless>
              <a href={`https://pedrobergamo.bandcamp.com/track/${fetchedSong.title}`}>{fetchedSong.title}</a>
            </iframe>
              <iframe className="video"
              src={fetchedSong.video} title="YouTube video player"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen">
               </iframe>
          </div>
    );
};

export default MusicPage;
