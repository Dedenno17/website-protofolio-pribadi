import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import styles from "../../styles/Carousel.module.css";
import angleRight from "../../images/angle-right-solid.svg";
import angleLeft from "../../images/angle-left-solid.svg";

export default function Carousel(props) {
  return (
    <div className={styles.carousel}>
      <span>
        <img src={angleLeft} alt="left"></img>
      </span>
      <Swiper
        modules={[Autoplay]}
        speed={800}
        spaceBetween={30}
        slidesPerView={2}
        loop
        autoplay
        className={styles.swiper}
      >
        {props.dataProjects.map((item, i) => (
          <SwiperSlide
            key={Math.random() + i + ""}
            className={styles.swiperSlider}
          >
            <div>
              <a href={item.slug}>
                <img src={item.image} alt="projects" />
              </a>
            </div>
            <div>
              <h3>
                <a href={item.slug}>{item.title}</a>
              </h3>
              <span>
                <a href={item.slug} target="__blank">
                  View details
                </a>
                <img src={angleRight} alt="angle right" />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <span>
        <img src={angleRight} alt="right"></img>
      </span>
    </div>
  );
}
