import MainSection from "../components/AboutUs/MainSection";
import Uniqueness from "../components/AboutUs/Uniqueness";
import Partners from "../components/Home/Partners";
import BoardTrustees from "../components/trustees/BoardTrustees";

function AboutUs() {
  return (
    <>
      <MainSection />
      <div className="w-11/12 lg:w-3/4 m-auto my-10">
        <Uniqueness />
        <BoardTrustees />
      </div>
      <Partners />
    </>
  );
}

export default AboutUs;
