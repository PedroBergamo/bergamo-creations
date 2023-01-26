
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import "../index.css"

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import Vimma1 from "../images/clients/vimma/vimma_01.jpg"
import Vimma2 from "../images/clients/vimma/vimma_02.jpg"
import Vimma3 from "../images/clients/vimma/vimma_03.jpg"

import Elias1 from "../images/clients/elias/Elias-1.jpg"
import Elias2 from "../images/clients/elias/Elias-2.jpg"
import Elias3 from "../images/clients/elias/Elias-3.jpg"

import Inke1 from "../images/clients/inke/Inke-1.jpg"
import Inke2 from "../images/clients/inke/Inke-2.jpg"
import Inke3 from "../images/clients/inke/Inke-5.jpg"

import Everfrost1 from "../images/clients/everfrost/everfrost-1.jpg"
import Everfrost2 from "../images/clients/everfrost/everfrost-2.jpg"
import Everfrost3 from "../images/clients/everfrost/everfrost-3.jpg"
import Minfloat1 from "../images/clients/minfloat/MinFloat-1.jpg"
var MinfloatSite = "http://flotation-simulator.com";

var VimmaSite = "https://www.vimmaband.com";
var EliasSite = "https://www.behance.net/gallery/138157413/Elias-Nieminen-Ensemble-Brand-Book";
var EverFrostSite = "https://www.behance.net/gallery/138884997/Everfrost-Brand-Book";
var EverfrostDescription ="Everfrost is a modern power metal band from Finland. For their re-branding, the band was looking for something powerful but psychologically intriguing."
var InkeSite = "https://www.inkelauni.com";
var InkeDescription = "Inke Launi is a Finnish alternative rock band led by the singer-songwriter Elina Launimaa. Her nature-inspired brand aims to be a voice for melancholic souls."

function Client(props){
  return(
    <div
      className="client">
      <h3>{props.service}</h3>
      <h1>{props.name}</h1>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={props.p1} width="100%" alt=""/></SwiperSlide>
      <SwiperSlide><img src={props.p2} width="100%" alt=""/></SwiperSlide>
      <SwiperSlide> <img src={props.p3} width="100%" alt=""/></SwiperSlide>
    </Swiper>
    <h3>{props.description}</h3>
    <h3>Link: <a className="text_link" href={props.link} target="_blank" rel="noreferrer">{props.name}</a></h3>
  </div>
  );
};

const Clients = () => {
  return (
    <div className="client">
    <h1>Portfolio</h1>
    <Client
      service="Brand Design"
      name="Vimma"
      description=
      "For their new album, Vimma wanted a more modern and accessible representation of their Helsinki-based folk band, which takes high inspiration in climate activism and community building to write their emotional lyrics and captivating violin riffs. "
      link= {VimmaSite}
      p1={Vimma1} p2={Vimma2} p3={Vimma3}/>

      <Client
        service="Brand Design"
        name="Elias Nieminen Ensemble"
        description="Elias Nieminen Ensemble is a genre-crossing project led by the young Finnish drummer-composer Elias Nieminen. For his brand, the composer wanted a sober, sensitive yet energetic visual representation."
        link= {EliasSite}
        p1={Elias1} p2={Elias2} p3={Elias3}/>

      <Client
        service="Brand Design"
        name="Inke Launi"
        description= {InkeDescription}
        link= {InkeSite}
        p1={Inke1} p2={Inke2} p3={Inke3}/>


      <Client
        service="Brand Design"
        name="Everfrost"
        description={EverfrostDescription}
        link= {EverFrostSite}
        p1={Everfrost1} p2={Everfrost2} p3={Everfrost3}/>

      <div className="client">
        <h3>UX/UI Design/WebGL</h3>
        <h1>MinFloat</h1>
        <div >
          <img src={Minfloat1} width="100%" alt=""/>
        </div>


        <h3> Minfloat is an educational game which teaches performance calculations related to Froth Flotation.
            For their UI, I created a futuristic user interface with patent-resembling elements.</h3>
            <h3>Link: <a className="text_link" href={MinfloatSite} target="_blank" rel="noreferrer">Minfloat</a></h3>
      </div>

      <div className="client">
        <h3>Music Video </h3>
        <h1>Pedro Bergamo - Imigrante</h1>

        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OgFXGCQHIac"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"></iframe>

        <h3> Music video made using Premiere Pro's mirror effects.</h3>
      </div>
    </div>
    );
};

export default Clients;
