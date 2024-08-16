import { FC } from "react";
import RankStars from "./RankStars";
import { ReviewProps } from "@/utils/types/types";

const Review: FC<ReviewProps> = ({ Reviews }) => {
  return (
    <div>
      <div className="flex flex-col mb-8 md:flex-row justify-between">
        <h4 className="text-xl font-medium">Review</h4>
      </div>
      <div className="flex flex-col gap-8">
        {Reviews.map((review) => (
          <div
            key={review.id}
            className="border-b flex pb-8 flex-col lg:flex-row gap-4"
          >
            <img
              src="/images/inst.jpg"
              className="w-16 h-16 p-1 rounded-full border border-Secondary"
            />
            <div className="flex flex-col gap-3">
              <h5 className="text-lg text-primary font-medium">
                {review.name}
              </h5>
              <div className="flex items-center flex-wrap gap-4">
                <RankStars starNumber={review.rank} />
                <div className="text-primary text-sm">{review.date}</div>
                <div className="text-primary text-sm">{review.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <button className=" flex justify-center mb-8 text-primary font-medium w-full border border-primary hover:text-Secondary hover:bg-primary transition-all duration-500 items-center gap-3 rounded-sm py-3">
          View More Reviews
        </button>
      </div>
    </div>
  );
};

export default Review;
