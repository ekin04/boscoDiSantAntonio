import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Image } from "@unpic/react";
import { openContactModal } from "@assets/js/contact";
import autunnoJson from "@content/homeHero/autunno.json";
import primaveraJson from "@content/homeHero/primavera.json";
import invernoJson from "@content/homeHero/inverno.json";
import "swiper/css";
import "swiper/css/effect-fade";

const images = import.meta.glob<{ default: { src: string } }>(
  "/src/assets/img/cms/heroSlide/**/*.{jpeg,jpg,png,gif,webp}",
  { eager: true }
);

const seasonImagesMap: Record<string, { Immagini: Array<{ src: string; alt: string }> }> = {
  spring: primaveraJson,
  summer: primaveraJson,
  autumn: autunnoJson,
  winter: invernoJson,
};

const getSeason = () => {
  const now = new Date();
  const month = now.getMonth(); // 0 = Gennaio, 11 = Dicembre
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
};

export default function HeroReact() {
  const [season, setSeason] = useState<string>("spring");

  useEffect(() => {
    setSeason(getSeason());
  }, []);

  const currentData = seasonImagesMap[season] || primaveraJson;

  return (
    <div className="w-full h-dvh bg-neutral-900">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        allowTouchMove={false}
        className="w-full h-full bg-neutral-900 p-0 m-0 relative overflow-x-hidden"
        data-aos-delay="400"
        data-aos-duration="300"
        data-aos="fade-in"
      >
        {currentData.Immagini.map((img, idx) => {
          const imgObj = images[img.src]?.default;
          const imgSrc = imgObj?.src || img.src;

          return (
            <SwiperSlide key={img.src + idx} className="min-h-dvh relative flex justify-center items-center w-full">
              <Image
                src={imgSrc}
                alt={img.alt}
                layout="fullWidth"
                priority={idx === 0}
                className="absolute top-0 left-0 object-center w-full h-full object-cover zoom"
              />
            </SwiperSlide>
          );
        })}
        <div className="title absolute inset-0 z-10 w-full h-full flex justify-center items-center bg-black/40 flex-col text-center p-4">
          <span
            className="text-2xl font-bold text-white uppercase md:text-2xl lg:text-3xl"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Benvenuti nel
          </span>
          <h1
            className="text-4xl text-white mt-2 uppercase font-extrabold text-pretty md:text-5xl lg:text-7xl"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Bosco di Sant'Antonio
          </h1>
          <h2
            className="text-white text-pretty font-medium text-xl md:text-3xl mt-5"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            "Un tesoro naturalistico nel cuore dell’Abruzzo"
          </h2>
          <div className="mt-5">
            <button
              className="contactButton flex flex-row justify-center items-center gap-2 text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none transition focus:ring-primary/30 font-medium rounded-lg text-center px-3 py-3 md:px-5 md:py-3.5 mt-3 text-xl md:text-xl"
              type="button"
              onClick={openContactModal}
              data-modal-target="authentication-modal"
              data-aos="fade-in"
              data-aos-delay="1300"
              data-aos-duration="800"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01" />
              </svg>
              Contattaci
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
