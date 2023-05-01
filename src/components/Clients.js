
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import {Row, Col} from "react-bootstrap"
import "../css/components.css"

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import Vimma1 from "../images/clients/vimma/vimma_01.jpg"
import Vimma2 from "../images/clients/vimma/vimma_02.jpg"
import Vimma3 from "../images/clients/vimma/vimma_03.jpg"
import Vimma4 from "../images/clients/vimma/vimma_04.jpg"
import Vimma5 from "../images/clients/vimma/vimma_05.jpg"

import Halophones1 from "../images/clients/halophones/halo-1.jpg"
import Halophones2 from "../images/clients/halophones/halo-2.jpg"
import Halophones3 from "../images/clients/halophones/halo-3.jpg"
import Halophones4 from "../images/clients/halophones/halo-4.jpg"
import Halophones5 from "../images/clients/halophones/halo-5.jpg"
import Halophones6 from "../images/clients/halophones/halo-6.jpg"
import Halophones7 from "../images/clients/halophones/halo-7.jpg"
import Halophones8 from "../images/clients/halophones/halo-8.jpg"
import Halophones9 from "../images/clients/halophones/halo-9.jpg"

import Elias1 from "../images/clients/elias/Elias-1.jpg"
import Elias2 from "../images/clients/elias/Elias-2.jpg"
import Elias3 from "../images/clients/elias/Elias-3.jpg"
import Elias4 from "../images/clients/elias/Elias-4.jpg"

import Inke1 from "../images/clients/inke/Inke-1.jpg"
import Inke2 from "../images/clients/inke/Inke-2.jpg"

import Inke3 from "../images/clients/inke/Inke-3.jpg"
import Inke4 from "../images/clients/inke/Inke-4.jpg"
import Inke5 from "../images/clients/inke/Inke-5.jpg"

var HalophonesLink = "https://www.instagram.com/thehalophones/";
var VimmaSite = "https://www.vimmaband.com";
var EliasSite = "https://www.behance.net/gallery/138157413/Elias-Nieminen-Ensemble-Brand-Book";
var InkeSite = "https://www.inkelauni.com";
var InkeDescription = "Inke Launi is a Finnish alternative rock band led by the singer-songwriter Elina Launimaa. Her nature-inspired brand aims to be a voice for melancholic souls."

const Clients = () => {
  return (
    <div className="content">
    <h1 style={{textAlign:"center"}}>Portfolio</h1>

    <Row
      className="client">
      <Col xs={12} sm={6}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={Halophones1} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide><img src={Halophones2} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones3} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones4} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones5} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones6} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones7} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones8} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Halophones9} width="100%" alt=""/></SwiperSlide>
      </Swiper>
      </Col>
      <Col xs={12} sm={6}>
      <h3>Rebranding</h3>
      <h1>The Halophones</h1>
      <p>
       On October of 2022 I was commissioned to rethink the identity of
       the rock band “The Halophones” for their new upcoming release. The
       re-branding aimed to speak straight to Indie music appreciators but
       also with the more wreckless members of their fanbase.
       </p>

        <p><a className="text_link" href={HalophonesLink} target="_blank"
        rel="noreferrer">The Halophones IG</a></p>
       </Col>

    </Row>

    <Row
      className="client">
      <Col xs={12} sm={6}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={Vimma1} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide><img src={Vimma2} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Vimma3} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Vimma4} width="100%" alt=""/></SwiperSlide>
        <SwiperSlide> <img src={Vimma5} width="100%" alt=""/></SwiperSlide>
      </Swiper>

      </Col>
      <Col xs={12} sm={6}>
        <h3>Rebranding / Cover Arts</h3>
        <h1>Vimma</h1>
        <p>
        For their new album, Vimma wanted a more modern and accessible representation of their Helsinki-based folk band, which takes high inspiration in climate activism and community building to write their emotional lyrics and captivating violin riffs.
        </p>
        <p><a className="text_link" href={VimmaSite} target="_blank"
        rel="noreferrer">Vimma website</a></p>

      </Col>
      </Row>

    <Row
      className="client elias">
      <Col xs={12} sm={6}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={Elias1} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide><img src={Elias2} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide><img src={Elias3} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide><img src={Elias4} width="100%" alt=""/></SwiperSlide>
        </Swiper>


      </Col>
      <Col xs={12} sm={6}>
        <h3>Brand / Cover Arts</h3>
        <h1>Elias Nieminen Ensemble</h1>
        <p>
        Elias Nieminen Ensemble is a genre-crossing project led by the young Finnish drummer-composer Elias Nieminen. For his brand, the composer wanted a sober, sensitive yet energetic visual representation.
        </p>
        <p><a className="text_link" href={EliasSite} target="_blank"
        rel="noreferrer">Elias website</a></p>
      </Col>
    </Row>

    <Row
      className="client">

      <Col xs={12} sm={6}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={Inke1} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide> <img src={Inke3} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide> <img src={Inke4} width="100%" alt=""/></SwiperSlide>
          <SwiperSlide> <img src={Inke5} width="100%" alt=""/></SwiperSlide>
        </Swiper>


      </Col>
      <Col xs={12} sm={6}>
        <h3>Brand / Website</h3>
        <h1>Inke Launi</h1>
              <p>{InkeDescription}</p>
        <p><a className="text_link" href={InkeSite} target="_blank"
        rel="noreferrer">Inke Launi website</a></p>
      </Col>
      </Row>
    </div>
    );
};

export default Clients;
