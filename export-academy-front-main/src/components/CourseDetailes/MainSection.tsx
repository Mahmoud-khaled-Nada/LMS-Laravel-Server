import { FaRegStar, FaStar } from "react-icons/fa";
import MainHeader from "../common/MainHeader";
import { MdPlayLesson } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
import { FaBeer } from "react-icons/fa";
function MainSection() {
  const renderStars = () => {
    const filledStars = Math.floor(4.5);
    const hasHalfStar = 4.5 % 1 !== 0;
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

  return (
    <MainHeader>
      <div className="w-11/12 lg:3/4 mx-auto flex py-20  flex-col gap-4">
        <h1 className="text-white text-[36px] font-bold ">
          Learn HTML – Full Tutorial for Beginners (2022)
        </h1>
        <div className=" text-white gap-8 text-md flex flex-wrap ">
          <div className="gap-2 text-md flex flex-wrap ">
            <div>4.5</div>
            <div className="flex flex-row items-center">{renderStars()}</div>
            <div>{`${300} rating`}</div>
          </div>
          <div className="gap-6 flex flex-wrap ">
            <div className="gap-1 flex items-center ">
              <MdPlayLesson />
              <p>{`10 Lessons`}</p>
            </div>
            <div className="gap-1 flex  ">
              <RiGroupLine />

              <p>200 Students</p>
            </div>
            <div className="gap-1 flex  ">
              <FaBeer />
              <p>last Updated</p>
            </div>
          </div>
        </div>
      </div>
    </MainHeader>
  );
}

export default MainSection;
