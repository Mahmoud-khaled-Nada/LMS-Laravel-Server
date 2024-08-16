import Comunicate from "../components/ContactUs/Comunicate";
import Contact from "../components/ContactUs/Contact";
import MainSection from "../components/ContactUs/MainSection";

function ContactUs() {
  return (
    <div>
      <MainSection />
      <div className="w-11/12 lg:3/4 mx-auto">
        <Contact />
      </div>
      <Comunicate />
    </div>
  );
}

export default ContactUs;
