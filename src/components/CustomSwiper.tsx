import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Trailer } from "../types/trailer";
import { useVideoPopupContext } from "../context/VideoPopupContext";

export default function TrailersCarousel({
  trailers,
}: {
  trailers: Trailer[];
}) {
  const { openPopup } = useVideoPopupContext();
  return (
    <div className="z-50 flex h-full items-center justify-center">
      <Swiper
        modules={[EffectCreative, Navigation, Pagination]}
        effect="creative"
        centeredSlides
        loop
        slidesPerView={3}
        navigation
        creativeEffect={{
          prev: {
            translate: ["-100%", 0, -400],
            rotate: [0, 0, 0],
            scale: 0.8,
            opacity: 1,
          },
          next: {
            translate: ["100%", 0, -400],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          },
        }}
        className="my-swiper"
      >
        {trailers.map((trailer, i) => (
          <SwiperSlide
            key={i}
            onClick={() => {
              console.log("ddfa");

              openPopup(trailer.data.max);
            }}
          >
            <div className="relative h-45 overflow-hidden rounded-2xl shadow-2xl">
              <img
                loading="lazy"
                src={trailer.preview || "/"}
                alt={trailer.name}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
