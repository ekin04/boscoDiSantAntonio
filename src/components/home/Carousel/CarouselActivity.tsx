// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@unpic/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CarouselWrapper = ({ cards }: { cards: any}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
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
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{ delay: 5000 }}
      className="max-w-screen-2xl"
    >
      {cards.map((card: any) => (
        <SwiperSlide key={card.id}>

          <a
            href={card.data.link}
            className="group relative block h-96 rounded-2xl w-full overflow-hidden shadow-xl"
            aria-label={card.data.title + " external url"}
            target="_blank"
          >
            <Image
                title={card.data.title}
                src={card.data.image.src}
                alt={card.data.title}
                width={600}
                height={600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-12 right-4 p-4 w-5/6">
              <h2 className="mb-2 text-2xl text-pretty text-right font-bold text-white transition-transform duration-500 group-hover:translate-x-2">
                {card.data.title}
              </h2>
            </div>
          </a>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev font-bold backdrop-blur-lg bg-stone-900/80 rounded-full p-6 mr-5 after:!text-[25px] after:text-green-600 hover:bg-stone-700/80 transition"></div>
      <div className="swiper-button-next font-bold backdrop-blur-lg bg-stone-900/80 rounded-full p-6 mr-5 after:!text-[25px] after:text-green-600 hover:bg-stone-700/80 transition"></div>
    </Swiper>
  );
};
export default CarouselWrapper;
