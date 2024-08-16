import MainHeader from "../common/MainHeader";

function MainSection() {
  return (
    <MainHeader>
      <div className="py-10 flex flex-col items-center gap-8">
        <h3 className="text-4xl font-bold text-white ">Contact Us</h3>
        <p className="text-lg text-white ">
          Our team is ready to answer your inquiries.
        </p>
      </div>
    </MainHeader>
  );
}

export default MainSection;
