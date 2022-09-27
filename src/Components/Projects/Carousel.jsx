import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "../../styles/Carousel.module.css";
import angleRight from "../../images/angle-right-solid.svg";

export default function Carousel(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      speed={800}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      pagination
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
  );
}
