import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import Image from "next/image";

import lmsolution from "../../assets/logos/lmsolution.png";
import logo from "../../assets/logos/logocpb.png";
import cordel from "../../assets/images/Cordel.png";
import estrela from "../../assets/images/Estrelas.png";
import sanfona from "../../assets/images/Sanfona.png";

export function Carrossel() {
  const [slides, setSlides] = useState([
    { id: 1, src: lmsolution },
    { id: 2, src: logo },
    { id: 3, src: cordel },
    { id: 4, src: estrela },
    { id: 5, src: sanfona },
    { id: 6, src: sanfona },
    { id: 7, src: sanfona },
    { id: 8, src: sanfona },
    { id: 9, src: sanfona },
  ]);

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
      className="mySwiper flex items-center justify-center w-full ease-out"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide
            key={slide.id}
            className="swiper-wrapper flex items-center justify-center"
          >
            <div className="swiper-slide">
              <Image
                src={slide.src}
                width={60}
                height={60}
                alt="logo lmsolution"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
