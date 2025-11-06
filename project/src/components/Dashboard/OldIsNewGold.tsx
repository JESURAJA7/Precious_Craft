import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function OldIsNewGold() {
  const bannerImages = [
    'https://res.cloudinary.com/dczicfhcv/image/upload/v1762325794/bgu_v1_xokuxa.webp',
    'https://res.cloudinary.com/dczicfhcv/image/upload/v1762325794/dhome_pagev2_gmyhit.jpg',
    'https://res.cloudinary.com/dczicfhcv/image/upload/v1762325794/dhome_pagev1_bgqfwz.jpg',
  ];

  return (
    <div className="">
      <div className="max-w-8xl mx-auto">
        {/* Hero Banner */}
        <section className="relative overflow-hidden mb-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom'
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {bannerImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                  {/* Optional text overlay */}
                  <div className="absolute bottom-8 left-8 text-white max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      Premium Gold Exchange
                    </h3>
                    <p className="text-white/80">
                      Transform your old jewelry into stunning new pieces
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation */}
            <div className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group">
              <ChevronRight className="w-6 h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
            </div>
            <div className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer group">
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </div>
          </Swiper>
        </section>
      </div>

      {/* Custom CSS for Swiper */}
      <style >{`
        .swiper-pagination-bullet-custom {
          background: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          opacity: 0.7;
          margin: 0 6px;
        }
        .swiper-pagination-bullet-active-custom {
          background: #ffffff;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}