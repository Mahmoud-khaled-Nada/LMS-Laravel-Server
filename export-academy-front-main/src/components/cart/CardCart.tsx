import { Link } from "react-router-dom"

// import RankStars from "../common/RankStars"
import { MdVideoLibrary } from "react-icons/md"
import { FaClock } from "react-icons/fa"
import { Course } from "@/utils/types/types"

const CardCart: React.FC<Course> = (
  {name,
    instructor,
    rating,
    price,
    reviews,
    imageUrl,
    duration,
    DiscountPrice,
    lessons,
    }) => {
  return (
    <Link 
    to='/SingleCourse'
    className="grid gap-4 grid-cols-6 border-t-2 pt-2 mt-2"
  >
    <div className="rounded-lg col-span-6 md:col-span-1">
      <img src={imageUrl} alt=""  />
    </div>
    <div className="col-span-4">

    <div className="flex flex-col gap-2 ">
      <div className="lg:text-[16px] font-medium font-sans text-Primary ">
        {name}
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">


        
        <MdVideoLibrary className="text-Secondary" />
        <p className="text-sm font-normal text-[#585D69] font-sans">
          {lessons} Lessons
        </p>
      </div>
      <div className="flex items-center gap-1">
         <FaClock className="text-Secondary"/>
        <p className="text-sm font-normal text-[#585D69] font-sans">
          {duration} hours
        </p>
      </div>
    </div>
      <p className="text-Primary">{`By: ${instructor}`}</p>
      <div className="flex items-center gap-2">
        <div className="text-Primary font-sans font-normal text-[14px]">
          {rating}
        </div>
         {/* <RankStars starNumber={rating} /> */}
        <p className="text-Primary font-sans font-normal text-[14px]">
          ({reviews})
        </p>
      </div>
    </div>
    </div>
    <div className="flex flex-col items-end col-span-2 sm:col-span-1 justify-end gap-1 ">
     
        <p className="text-lg font-medium text-Secondary">${price}</p>
        <p className="text-sm font-normal text-black line-through">
          ${DiscountPrice}
        </p>
    

      <div>
        <Link
          to={""}
          className="block w-full text-Primary text-[30px] bg text-center py-2 rounded-md"
        >
     
        </Link>
      </div>
    </div>
  </Link>
  )
}

export default CardCart