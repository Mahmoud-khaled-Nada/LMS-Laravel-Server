import { AiFillMessage } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

function Communicate() {
  return (
    <div className="bg-[#F4F4F4] py-10 my-10">
      <div className="flex md:flex-row w-10/12 lg:w-3/4 mx-auto flex-col  justify-center gap-x-96 gap-y-10">
        <div className="flex flex-col  items-center text-center gap-10">
          <AiFillMessage className="text-[48px] text-Secondary" />
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] text-Secondary font-bold">Contact Us</h1>
            <p>Telephone: +20225271010</p>
            <p>Fax: +20225271015</p>
            <p>Email: info@exportacademy.org</p>
          </div>
        </div>
        <div className="flex flex-col  items-center text-center gap-12">
          <FaLocationDot className="text-[48px] text-Secondary" />
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] text-Secondary font-bold">Location</h1>
            <p className="">90 Street, El Maadi, Cairo Governorate - Egypt</p>
            <button className="text-[20px] font-semibold text-Secondary hover:text-Primary transition duration-300">
              Show the map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communicate;
