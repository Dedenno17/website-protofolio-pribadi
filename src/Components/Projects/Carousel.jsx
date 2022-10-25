import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import styles from "../../styles/Carousel.module.css";
import angleRight from "../../images/angle-right-solid.svg";
import angleLeft from "../../images/angle-left-solid.svg";

export default function Carousel(props) {
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  return (
    <div className={styles.carousel}>
      <span ref={prevBtnRef}>
        <img src={angleLeft} alt="left"></img>
      </span>
      <Swiper
        modules={[Autoplay, Navigation]}
        speed={800}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{
          prevEl: prevBtnRef.current,
          nextEl: nextBtnRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevBtnRef.current;
          swiper.params.navigation.nextEl = nextBtnRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop
        autoplay={{
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {props.dataProjects.map((item, i) => (
          <SwiperSlide
            key={Math.random() + i + ""}
            className={styles.swiperSlider}
          >
            <div>
              <a href={item.slug}>
                <img src={item.image} alt="projects" loading="lazy" />
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
      <span ref={nextBtnRef}>
        <img src={angleRight} alt="right"></img>
      </span>
    </div>
  );
}
