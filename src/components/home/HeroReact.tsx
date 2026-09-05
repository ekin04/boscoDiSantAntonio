import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Image } from "@unpic/react";
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
              data-aos="fade-in"
              data-aos-delay="1300"
              data-aos-duration="800"
            >
              <svg
                className="w-8 h-8 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0012.04 2z" />
              </svg>
              Contattaci
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
