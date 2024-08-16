import CardOfCourse from "../common/CardOfCourse";
import { courses } from "./db";
import CourceLoader from "../CourseDetailes/CourceLoader";

function CourseItems() {
 
  return (
    <div className="grid  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-8 my-8">
      {courses.map((course, index) => (
        <div
        >
          <CardOfCourse key={index} {...course} />
        </div>
        
      ))}
      <CourceLoader/>
    </div>
  );
}

export default CourseItems;
