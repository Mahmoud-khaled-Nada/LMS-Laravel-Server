import MyCourses from "@/components/Home/MyCourses";
import AboutUs from "../components/Home/AboutUs";
import Committees from "../components/Home/Committees";
// import CoursesSec from "../components/Home/CoursesSec";
import MainSection from "../components/Home/MainSection";
import Messages from "../components/Home/Messages";
import Partners from "../components/Home/Partners";
import ExecutiveOffice from "../components/trustees/ExecutiveOffice";

const Home = () => {
  return (
    <div>
      <MainSection />
      <div className="w-11/12 lg:w-3/4 m-auto">
        <AboutUs />
        {/* <CoursesSec /> */}
        <MyCourses/>
      </div>
      <Messages />

      <div className="w-11/12 lg:w-3/4 m-auto">
        <Committees />
        <ExecutiveOffice />
      </div>
      <Partners />
    </div>
  );
};

export default Home;
