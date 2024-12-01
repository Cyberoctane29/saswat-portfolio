import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules"; // Adjusted import

const Testimonials = () => {
  return (
    <section id="credentials" className="testimonial container section">
      <h2 className="section__title">Credentials</h2>
      <span className="section__subtitle">Some of my credentials</span>
      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {Data.map(({ id, image }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="Certificate" className="testimonial__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
