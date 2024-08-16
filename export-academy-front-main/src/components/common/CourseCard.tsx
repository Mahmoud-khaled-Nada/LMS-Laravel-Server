import React from "react";

export interface Courses {
  name: string;
  imageUrl: string;
}

const CourseCard: React.FC<Courses> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="">
        <img src={imageUrl} alt={name} />
      </div>
      <h1 className="text-Primary text-20 text-wrap font-semibold h-10">
        {name}
      </h1>
      <button className="text-Secondary text-16 font-semibold mt-2">
        Start Learn
      </button>
    </div>
  );
};

export default CourseCard;
