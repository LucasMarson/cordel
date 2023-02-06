import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import Image from "next/image";

import lmsolution from "../../assets/logos/lmsolution.png";
import bio from "../../assets/logos/BIO.png";
import benditta from "../../assets/logos/BENDITTA.png";
import studio from "../../assets/logos/Studio.png";
import koziplast from "../../assets/logos/KoziPlast.png";
import mudde from "../../assets/logos/Mudde.png";
import padoquinha from "../../assets/logos/padoquinha.jpg";
import dentistas from "../../assets/logos/Dentistas.jpg";
import guada from "../../assets/logos/Guada.jpeg";
import lindaRosa from "../../assets/logos/lindarosa.png";
import prancheta from "../../assets/logos/Prancheta.jpg";
import cinthia from "../../assets/logos/Cinthia.jpg";

export function Carrossel() {

  const slidesLogos = [
    { id: 1, src: lmsolution, alt: "logo LM Solution"},
    { id: 2, src: bio },
    { id: 3, src: studio, className: "" },
    { id: 4, src: benditta },
    { id: 5, src: koziplast },
    { id: 6, src: mudde },
    { id: 7, src: padoquinha },
    { id: 8, src: dentistas },
    { id: 9, src: guada },
    { id: 10, src: lindaRosa },
    { id: 11, src: prancheta },
    { id: 12, src: cinthia },
  ]

  const [slides, setSlides] = useState(slidesLogos);

  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper flex items-center justify-center w-full h-full ease-out"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={slide.id}
            className="swiper-wrapper flex items-center justify-center"
          >
            <div className="swiper-slide">
              <Image
              className="w-[70px] h-[70px]"
                src={slide.src}
                width={0}
                height={0}
                alt={slide.alt || 'Imagem sem descricao'}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
