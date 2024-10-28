import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./style.css";
import "swiper/css";
import 'swiper/css/navigation';

import { cards } from "./attivita";
const Carousel = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-10 ">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide className=" p-5 " key={card.title}>
            <a
              href={card.link}
              className="group relative block h-96 rounded-2xl w-full overflow-hidden shadow-xl"
              aria-label={card.title + " external url"}
              target="_blank"
            >
              <img
                title={card.title}
                src={card.image.src}
                alt={card.title}
                width={600}
                height={400}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-12 right-4 p-4 w-5/6">
                <h2 className="mb-2 text-2xl text-pretty text-right font-bold text-white transition-transform duration-500 group-hover:translate-x-2">
                  {card.title}
                </h2>
              </div>
            </a>
          </SwiperSlide>
        ))}
        <button className="swiper-button-next font-bold backdrop-blur-lg bg-stone-900/80 rounded-full p-6 mr-5 hover:scale-110 transition hover:bg-stone-800/80 duration-500"></button>
        <div className="swiper-button-prev font-bold backdrop-blur-lg bg-stone-900/80 rounded-full p-6 ml-5 hover:scale-110 transition hover:bg-stone-800/80 duration-500"></div>
      </Swiper>
    </div>
  );
};

export default Carousel;
