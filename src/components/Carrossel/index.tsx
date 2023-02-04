import React, { useEffect, useRef } from "react";
import Swiper from "swiper";

import Image from "next/image";

import lmsolution from "../../assets/logos/lmsolution.png";

export function Carrossel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log("useEffect is running");
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      autoplay: {
        delay: 1500,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div className="swiper-container w-full h-auto" ref={swiperRef}>
        <div className="swiper-wrapper flex items-center justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((swipers) => {
            return (
              <Image
                key={swipers}
                className="swiper-slide"
                src={lmsolution}
                width={60}
                height={60}
                alt="logo lmsolution"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
