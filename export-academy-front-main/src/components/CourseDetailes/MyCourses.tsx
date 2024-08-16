import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { courses } from "../Courses/db";
import CardOfCourse from "../common/CardOfCourse";

const MyCourses = () => {
  const card = courses;

  return (
    <div className="mb-8 pb-8 border-b">
      <h3 className="text-primary mb-4 font-Outfit font-medium text-xl">
        My courses (29)
      </h3>
      <div className="relative ">
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".js-top-desti-next_active1",
            prevEl: ".js-top-desti-prev_active1",
          }}
          // pagination={{
          //   el: ".swiper-pagination",
          //   clickable: true ,

          //   renderBullet: (_, className) => {
          //     return '<SwiperSlide class="' + className + '"></SwiperSlide>' ;
          //   },
          //   type:'bullets'
          // }}

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
              slidesPerView: 3,
            },
          }}
        >
          {card.map((item, index) => {
            console.log(item);

            return (
              <SwiperSlide key={index}>
                <CardOfCourse {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="text-black  py-2 px-4 hover:bg-main hover:rounded-full hover:text-white  transition-all duration-300 js-top-desti-prev_active1  hidden lg:flex  ">
          <FaChevronLeft />
        </button>
        <button className="  text-black py-2 px-4 hidden  hover:text-white hover:bg-main hover:rounded-full  transition-all duration-300  lg:flex  js-top-desti-next_active1 ">
          <FaChevronRight />
        </button>
        <div className="mt-8 pb-3 flex justify-center">
          <div className="swiper-pagination "></div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
