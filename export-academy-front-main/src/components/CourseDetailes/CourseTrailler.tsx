import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { IoInfinite } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { Player } from "video-react";
import { useNavigate } from "react-router-dom";

const CourseTrailer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:absolute hidden lg:flex justify-center mt-8 end-10 xl:end-24 2xl:end-48 top-48">
        <div className="border shadow-xl  bg-white rounded-md w-80">
          <div className="p-3 border-b">
            <Player
              autoPlay={true}
              poster="../../../public/images/Export-academy-banner-scaled.jpg"
              width={300}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div className=" mt-4 lg:mt-0">
              <div className="flex flex-col md:flex-row md:gap-20 my-2 items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-Secondary font-medium text-[26px]">$40</p>
                  <p className="text-[#585D69] font-normal text-[15px] line-through">
                    $20
                  </p>
                </div>
                <p className="text-Secondary text-[14px] font-normal border-2 border-Secondary text-center p-2">
                  39% OFF
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="flex gap-2 items-center justify-center py-[20px] text-[16px] font-semibold rounded-md bg-Primary text-white hover:bg-main  transition duration-300 ease-in-out">
                  <p>Add To Cart</p>
                </button>
                <button
                  onClick={() => {
                    navigate("/lesson");
                  }}
                  className="flex gap-2 items-center justify-center  py-[20px] text-[16px] font-semibold rounded-md border-2  border-Primary text-Primary hover:bg-main hover:border-Primary transition duration-300 ease-in-out hover:text-white "
                >
                  <p>Buy Now</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-3">
              <h4 className="text-xl font-medium text-Primary mb-4">
                this course includes:
              </h4>
              <div className=" flex gap-2  items-center">
                <FaRegPlayCircle />

                <p className="text-primary text-md">
                  54.5 hours on-demand video
                </p>
              </div>
              <div className=" flex gap-2  items-center">
                <FaRegFileAlt />

                <p className="text-primary text-md">3 articles</p>
              </div>
              <div className=" flex gap-2  items-center">
                <FaRegArrowAltCircleDown />

                <p className="text-primary text-md">
                  249 downloadable resources
                </p>
              </div>
              <div className=" flex gap-2  items-center">
                <CiMobile2 />

                <p className="text-primary text-md">Access on mobile and TV</p>
              </div>
              <div className=" flex gap-2  items-center">
                <IoInfinite />

                <p className="text-primary text-md">Full lifetime access</p>
              </div>
              <div className=" flex gap-2  items-center">
                <LiaCertificateSolid />

                <p className="text-primary text-md">
                  Certificate of completion
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center py-8 ">
            <h4 className="text-primary font-medium text-lg">Follow me</h4>
            <div className=" flex gap-4">
              <div className="instructor-sosial-link">
                <FaFacebookF />
              </div>
              <div className="instructor-sosial-link">
                <FaXTwitter />
              </div>
              <div className="instructor-sosial-link">
                <FaInstagram />
              </div>
              <div className="instructor-sosial-link">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTrailer;
