import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import styles from "./Swiper.module.scss";
import "swiper/css";

export default () => {
  const slides = [
    `${styles.slideZero}`,
    `${styles.slideOne}`,
    `${styles.slideTwo}`,
    `${styles.slideThree}`,
    `${styles.slideFour}`,
    `${styles.slideFive}`,
    `${styles.slideSix}`,
    `${styles.slideSeven}`,
    `${styles.slideEight}`,
    `${styles.slideLast}`,
  ];

  const transition = 1000;
  useEffect(() => {
    const enableScroll = (event) => {
      event.target.swiper.enable();
    };

    const swiperEl = document.querySelector(".swiper");

    swiperEl.addEventListener("mouseenter", enableScroll);

    return () => swiperEl.removeEventListener("mouseenter", enableScroll);
  }, []);

  return (
    <Swiper
      mousewheel
      className={styles.swiper}
      spaceBetween={40}
      slidesPerView={"auto"}
      speed={transition}
      onSlideChange={(swiper) => {
        if (swiper.isEnd || swiper.isBeginning) {
          setTimeout(() => {
            swiper.disable();
          }, transition);
        }
      }}
    >
      {slides.map((item, index) => (
        <SwiperSlide className={item} key={index} />
      ))}
    </Swiper>
  );
};
