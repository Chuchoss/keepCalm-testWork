import Swiper from "../Swiper/Swiper";
import SwiperCore, { Mousewheel } from "swiper/core";
import styles from "./SectionSwiper.module.scss";

SwiperCore.use([Mousewheel]);

export default function SectionSwiper() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <h2 className='title' id='swiper-title'>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <Swiper el={true} />
    </section>
  );
}
