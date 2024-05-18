import styles from "./Home.module.css";

import { reviews } from "../../utils/Home";
import Review from "./Review.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Reviews() {
  return (
    <Swiper
      autoHeight={true}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      navigation={true}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className={`mySwiper ${styles.swiper}`}
    >
      {reviews.map((review) => {
        return (
          <SwiperSlide key={review.name} className={styles.slide}>
            <Review {...review} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
