import CourseCard, { Courses } from "../common/CourseCard";

function CoursesSec() {
  const courses: Courses[] = [
    {
      name: "Access to regional markets / trade agreements.",
      imageUrl: "/images/image-4-768x512.webp",
    },
    {
      name: "Heading towards exporting.",
      imageUrl: "/images/image-3-768x512.webp",
    },
    {
      name: "Heading towards exporting.",
      imageUrl: "/images/5-768x512.webp",
    },
    {
      name: "Heading towards exporting.",
      imageUrl: "/images/3-768x512.webp",
    },
  ];

  return (
    <div className="flex flex-col gap-4 my-6 items-center">
      <div className="flex  justify-center lg:flex-nowrap flex-wrap gap-4">
        {courses.map((course, index) => (
          <div key={index} className="w-1/4">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-8 border-[1px] border-black hover:bg-[#007682] hover:text-white rounded-lg transition duration-300 ease-in-out">
          Show All Courses
        </button>
      </div>
    </div>
  );
}

export default CoursesSec;
