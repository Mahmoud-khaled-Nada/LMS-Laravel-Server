import React from "react";
import { FaStar } from "react-icons/fa";
// import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { Course } from "@/utils/types/types";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const CardOfCourse: React.FC<Course> = ({
  name,
  instructor,
  rating,
  price,
  reviews,
  imageUrl,
  duration,
  DiscountPrice,
  lessons,
}) => {
  const renderStars = () => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {hasHalfStar && <FaStar />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} />
        ))}
      </>
    );
  };
 const truncatedTitle=(fullText:string)=>{
  const truncatedText = fullText.length > 70 ? fullText.slice(0, 70) + '...' : fullText;
  return truncatedText;
 }
  return (
    <Link to="/singleCourse">
      <div className="flex flex-col gap-2">
        <div className="rounded-lg">
          <img src={imageUrl} alt="" className="h-48 w-full border shadow-sm" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <MdVideoLibrary />
            <p className="text-sm font-normal text-[#585D69] font-sans">
              {lessons} Lessons
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaClock />

            <p className="text-sm font-normal text-[#585D69] font-sans">
              {duration} hours
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="lg:text-[16px] font-medium font-sans text-Primary">
          {/* h-14  overflow-hidden line-clamp-2 */}
            {truncatedTitle(name)}
          </div>
          <p className="text-Primary">{`By: ${instructor}`}</p>
          <div className="flex items-center gap-2">
            <div className="text-Primary font-sans font-normal text-[14px]">
              {rating}
            </div>
            <div className="flex flex-row">{renderStars()}</div>
            <p className="text-Primary font-sans font-normal text-[14px]">
              ({reviews})
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2">
          <div>
            <p className="text-lg font-medium text-Secondary">${price}</p>
            <p className="text-sm font-normal text-black line-through">
              ${DiscountPrice}
            </p>
          </div>

          <div>
            <Link
              to={""}
              className="block w-full text-Primary text-[30px] bg text-center py-2 rounded-md"
            >
              <HiOutlineShoppingCart className="text-2xl font-bold text-Primary mt-1 hover:text-Secondary transition-all ease-in-out"/>

            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardOfCourse;
