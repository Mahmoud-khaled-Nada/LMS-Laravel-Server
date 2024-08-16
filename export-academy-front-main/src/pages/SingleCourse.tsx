import CourseContent from "@/components/CourseDetailes/CourseContent";
import CourseTrailer from "@/components/CourseDetailes/CourseTrailler";
import MainSection from "@/components/CourseDetailes/MainSection";

function SingleCourse() {
  return (
    <div>
      <MainSection />
      <CourseTrailer />
      <div className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-5">
        <div className="col-span-5 lg:col-span-3">
          <CourseContent />
        </div>
      </div>
    </div>
  );
}

export default SingleCourse;
