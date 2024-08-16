import CourseItems from "@/components/Courses/CourseItems";
import MainSection from "@/components/Courses/MainSection";
import CoursePagination from "@/components/Courses/Pagination";

function Courses() {
  return (
    <div>
      <MainSection />
      <div className="w-11/12 md:w-10/12 mx-auto">
        <CourseItems />
        <CoursePagination />
      </div>
    </div>
  );
}

export default Courses;
