import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const guests = [
  { name: "Adeniyi Pagiel", role: "Motivator", image: "/pagiel.svg" },
  { name: "Oratio", role: "Music Artist", image: "/oratio.svg" },
  { name: "Dora", role: "Music Artist", image: "/dora.svg" },
  { name: "Oyeleke Joel", role: "Poet", image: "/joel.svg" },
  { name: "Dynamic Hajja", role: "Spoken word poet", image: "/hajia.svg" },
  { name: "FOJ", role: "Panelist", image: "/foj.svg" },
  { name: "Joy", role: "Spoken word artist", image: "/joy.svg" },
  { name: "Cezie", role: "Panelist", image: "/cezie.svg" },
];

const GuestSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="px-6 lg:px-16 py-10 w-full bg-[#F9F9FB]">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2">Meet Our Guests</h2>
      <p className="text-[#62636C] mb-6 lg:w-[26.75rem]">
        8 incredible guest artists, poets, and creators will join us to speak,
        perform, and inspire.
      </p>

      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={2}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiperInstance}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {guests.map((guest, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden bg-black transition-all">
              <img
                src={guest.image}
                alt={guest.name}
                className="h-[300px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">{guest.name}</h3>
                <p className="text-sm text-white">{guest.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <div className="flex justify-end items-center mt-6 gap-4">
            <button
                ref={prevRef}
                className="swiper-button-prev-custom lg:p-[1.0625rem] border border-black rounded-[0.375rem] shadow-[8px_8px_0px_0px_#33353D] hover:shadow-[2px_2px_0px_0px_#33353D] transition lg:w-[4.5rem] lg:h-[4.5rem]"
                aria-label="Previous"
            >
              <div>
                <img src='/left-arrow.svg' alt='left-side' />
              </div>
            </button>
            <div className="flex justify-center mt-4 gap-2">
                {guests.map((_, index) => (
                <button
                    key={index}
                    onClick={() => swiperInstance?.slideToLoop(index)} // Loop-safe navigation
                    className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-[#008300]" : "bg-[#CDCED7]"
                    } transition duration-300`}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
            <button
                ref={nextRef}
                className="swiper-button-next-custom p[0.625rem] lg:p-[1.0625rem] border border-black rounded-[0.375rem] shadow-[8px_8px_0px_0px_#33353D] hover:shadow-[2px_2px_0px_0px_#33353D] transition w-[2.75rem] h-[2.75rem] lg:w-[4.5rem] lg:h-[4.5rem]"
                aria-label="Next"
            >
              <div>
                <img src='/right-arrow.svg' alt='left-side' />
              </div>
            </button>
        </div>
        </div>
    </div>
  );
};

export default GuestSlider;
