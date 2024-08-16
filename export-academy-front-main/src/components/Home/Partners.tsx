import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

interface Partner {
  img: string;
}

function Partners() {
  const imgs: Partner[] = [
    { img: "/images/logo-1.png" },
    { img: "/images/Logo-2.png" },
    { img: "/images/Logo-3.png" },
    { img: "/images/Logo-4.png" },
  ];

  return (
    <div className="bg-[#F4F4F4] mt-8">
      <div className="flex flex-col gap-6 w-11/12 lg:w-3/4 m-auto p-2">
        <h1 className="text-[25px] text-Primary font-semibold">
          Success partners
        </h1>
        <div>
          <div className="flex my-10 items-center justify-center">
            <Swiper
              spaceBetween={5}
              modules={[Navigation, Pagination]}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {imgs.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={`Partner logo ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
