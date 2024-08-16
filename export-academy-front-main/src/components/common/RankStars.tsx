import { RankStarsProps } from "@/utils/types/types";
import { FC } from "react";

const RankStars: FC<RankStarsProps> = ({ starNumber, color = "black" }) => {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          {index < starNumber ? (
            color === "white" ? (
              <img src="/images/icons/stare-fill-white.svg" />
            ) : (
              <img src="/images/icons/star.svg" />
            )
          ) : color === "white" ? (
            <img src="/images/icons/star-white.svg" />
          ) : (
            <img src="/images/icons/NoneFillstar.svg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default RankStars;
