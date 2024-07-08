"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Image from "next/image";
import { Work1, Work2, Work3, Work4, Work5, Work6 } from "@/assets";
const Slider = () => {
  const width = 200;
  const height = 200;
  return (
    <div className="py-2 my-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
        className="myswiper"
      >
        <SwiperSlide>
          <Image src={Work1} alt="work1" width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Work2} alt="work2" width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Work3} alt="work3" width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Work4} alt="work4" width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Work5} alt="work5" width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Work6} alt="work6" width={width} height={height} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
