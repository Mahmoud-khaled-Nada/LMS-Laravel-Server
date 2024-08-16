import React, { useRef } from "react";
import styles from "../../Styles/Courses.module.css";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdPlayLesson } from "react-icons/md";
import { RiGroupLine } from "react-icons/ri";
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import RankStars from "../common/RankStars";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Review from "../common/Review";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MyCourses from "./MyCourses";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CurriculumItem } from "@/utils/types/types";
import { Player } from "video-react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CourseContent() {
  const curriculumData: CurriculumItem[] = [
    { text: "Prepare for Industry Certification Exam" },
    { text: "Hours and Hours of Video Instruction" },
    { text: "Over 25 Engaging Lab Exercises" },
    { text: "Instructor Available by Email or on the Forums" },
    { text: "Comprehensive Coverage of HTML and CSS" },
    { text: "Server Side Development with PHP" },
    { text: "Earn Certification that is Proof of your Competence" },
    { text: "Dozens of Code Examples to Download and Study" },
    { text: "All Lab Solutions" },
    { text: "All Free Tools" },
    { text: "Client Side Programming with Javascript" },
    { text: "Learn Database Development with mySQL" },
  ];
  const reviews = [
    {
      id: 1,
      name: "Theresa Edin",
      rank: 4,
      date: "2 months ago",
      image: "/images/instractor/review.svg",
      description:
        "Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. ",
    },
    {
      id: 1,
      name: "Carolyn Welbron",
      rank: 4,
      date: "2 months ago",
      image: "/images/instractor/review.svg",
      description:
        "Lorem ipsum dolor sit amet. Qui incidunt dolores non similique ducimus et debitis molestiae. Et autem quia eum reprehenderit voluptates est reprehenderit illo est enim perferendis est neque sunt. ",
    },
  ];

  const [expanded, setExpanded] = React.useState<string | boolean>("panel1");
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const commonStyles = {
    border: "1px solid #ccc",
  };

  const summaryStyles = {
    bgcolor: "white",
    p: "15px",
    ...commonStyles,
  };

  const detailsStyles = {
    ...commonStyles,
  };

  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const instructorRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <section className="  flex flex-col gap-8">
        <div className="lg:hidden md:flex md:flex-col  mt-2">
          <Player
            autoPlay={true}
            poster="../../../public/images/Export-academy-banner-scaled.jpg"
            width={300}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
          <div className="w-full ">
            <div className="flex  md:flex-row md:gap-10 my-2 items-center justify-between">
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
            <div className="flex flex-col md:flex-row w-full gap-4">
              <button className="flex gap-2 items-center w-full justify-center py-4 text-lg font-semibold rounded-md bg-Primary text-white hover:border-2 hover:border-secondary hover:bg-main hover:text-white border-2 border-Primary transition duration-300 ease-in-out">
                <p>Add To Cart</p>
              </button>
              <button className="flex gap-2 w-full items-center justify-center py-4 text-lg font-semibold rounded-md border-2 border-Primary text-Primary hover:bg-main hover:border-Primary transition duration-300 ease-in-out hover:text-white">
                <p>Buy Now</p>
              </button>
            </div>
          </div>
        </div>

        <div className={`flex gap-x-5  capitalize my-5  border-b py-5   `}>
          <div>
            <button
              className={`${styles.coursebutton} hover:text-Primary focus:text-Primary`}
              onClick={() => scrollToRef(overviewRef)}
            >
              Overview
            </button>
          </div>
          <div>
            <button
              className={`${styles.coursebutton} hover:text-Secondary focus:text-Secondary`}
              onClick={() => scrollToRef(curriculumRef)}
            >
              Curriculum
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToRef(instructorRef)}
              className={`${styles.coursebutton} hover:text-Secondary focus:text-Secondary`}
            >
              Instructor
            </button>
          </div>
          <div>
            <button
              onClick={() => scrollToRef(reviewRef)}
              className={`${styles.coursebutton} hover:text-Secondary focus:text-Secondary`}
            >
              Review
            </button>
          </div>
        </div>
        <div ref={overviewRef}>
          <div className=" border-b pb-6">
            <h1 className="mb-4 font-sans font-semibold text-[22px]">
              What you'll learn
            </h1>
            <ul className="grid grid-cols-2 gap-4">
              {curriculumData.map((item, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <IoMdCheckboxOutline />
                  <p className="text-Primary font-sans text-[15px] font-normal">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b pb-4">
            <p className="mb-4 font-sans font-semibold text-[22px]">
              Requirements
            </p>
            <ul className="flex flex-col gap-4 list-disc font-normal text-[15px] font-sans text-Primary">
              <li>
                There are no skill prerequisites for this course although it's
                helpful if you are familiar with operating your computer and
                using the internet.
              </li>
              <li>
                You can take this course using a Mac, PC or LInux machine.
              </li>
              <li>
                It is recommended that you download the free Komodo text editor.
              </li>
            </ul>
          </div>

          <div ref={curriculumRef}>
            <h1 className="mb-4 font-sans font-semibold text-[22px]">
              About This Course
            </h1>
            {/* <ShowMoreText
              lines={2}
              more={
                <div className="flex gap-2 items-center">
                  <p> Show More</p>

                  <MdKeyboardArrowDown />
                </div>
              }
              less={
                <div className="flex gap-2 items-center">
                  <p> Show Less</p>

                  <MdKeyboardArrowUp />
                </div>
              }
              className="w-full"
              anchorClass="text-Secondary cursor-pointer"
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </ShowMoreText> */}
          </div>
        </div>

        <div>
          <p className="mb-4 font-sans font-semibold text-[22px]">
            Course content
          </p>
          <div className="flex flex-col gap-6">
            <Accordion
              defaultExpanded
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={summaryStyles}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium lg:text-[18px] md:text-[15px] sm:text-[12px] text-Primary">
                    Program Information 2023/2024 Edition
                  </p>
                  <div className="hidden lg:flex items-center gap-2">
                    <span>3 lectures</span>
                    <span className="font-bold text-lg">.</span>
                    <span>9 min</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={detailsStyles}>
                <ul className="flex flex-col gap-3 m-2">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>About The Course</p>
                    </div>
                    <div className="hidden  lg:flex gap-2">
                      <p>01:20</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[rgb(255,239,234)]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Tools Introduction</p>
                    </div>
                    <div className="flex gap-2">
                      <p>07:50</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Basic Document Structure</p>
                    </div>
                    <div className="flex gap-2">
                      <p>06:30</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary />{" "}
                      <p>HTML5 Foundations Certification Final Project</p>
                    </div>
                    <div className="flex gap-2">
                      <p>02:40</p>
                    </div>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                sx={summaryStyles}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[18px] text-Primary">
                    Certified HTML5 Foundations 2023/2024
                  </p>
                  <div className="flex items-center gap-2">
                    <span>3 lectures</span>
                    <span className="font-bold text-lg">.</span>
                    <span>9 min</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={detailsStyles}>
                <ul className="flex flex-col gap-3 m-2">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Introduction to HTML5</p>
                    </div>
                    <div className="flex gap-2">
                      <p>01:20</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>HTML5 Elements</p>
                    </div>
                    <div className="flex gap-2">
                      <p>07:50</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>HTML5 Semantic Elements</p>
                    </div>
                    <div className="flex gap-2">
                      <p>06:30</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>HTML5 Project</p>
                    </div>
                    <div className="flex gap-2">
                      <p>02:40</p>
                    </div>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                sx={summaryStyles}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[18px] text-Primary">
                    Your Development Toolbox
                  </p>
                  <div className="flex items-center gap-2">
                    <span>3 lectures</span>
                    <span className="font-bold text-lg">.</span>
                    <span>9 min</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={detailsStyles}>
                <ul className="flex flex-col gap-3 m-2">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary />{" "}
                      <p>Setting Up Your Environment</p>
                    </div>
                    <div className="flex gap-2">
                      <p>01:20</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Version Control with Git</p>
                    </div>
                    <div className="flex gap-2">
                      <p>07:50</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Using IDEs Effectively</p>
                    </div>
                    <div className="flex gap-2">
                      <p>06:30</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Toolbox Project</p>
                    </div>
                    <div className="flex gap-2">
                      <p>02:40</p>
                    </div>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                sx={summaryStyles}
              >
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium text-[18px] text-Primary">
                    JavaScript Specialist
                  </p>
                  <div className="flex items-center gap-2">
                    <span>3 lectures</span>
                    <span className="font-bold text-lg">.</span>
                    <span>9 min</span>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails sx={detailsStyles}>
                <ul className="flex flex-col gap-3 m-2">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>JavaScript Basics</p>
                    </div>
                    <div className="flex gap-2">
                      <p>01:20</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Advanced JavaScript</p>
                    </div>
                    <div className="flex gap-2">
                      <p>07:50</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>JavaScript Projects</p>
                    </div>
                    <div className="flex gap-2">
                      <p>06:30</p>
                      <button className="block border-1 text-[14px] font-sans font-normal border-Secondary px-2 rounded-sm text-Secondary bg-[#FFEFEA]">
                        Preview
                      </button>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MdOutlineVideoLibrary /> <p>Final JavaScript Project</p>
                    </div>
                    <div className="flex gap-2">
                      <p>02:40</p>
                    </div>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <div>
              <button className="flex gap-2 items-center text-center w-full justify-center transition delay-30 duration-300 ease-in-out py-[10px] text-[16px] font-sans font-semibold rounded-md border-2 border-Primary text-Primary hover:text-Primary hover:border-Primary ">
                <p>78 More Sections</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4" ref={instructorRef}>
          <p className="mb-4 font-sans font-semibold text-[22px]">Instructor</p>
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/images/inst.jpg" />
            <div className="flex flex-col gap-4">
              <h2 className="text-[18px] text-Primary font-sans font-medium">
                Theresa Edin
              </h2>
              <p className="font-sans font-normal text-[15px] text-[#585D69]">
                Professional Web Developer
              </p>
              <div className=" text-primary gap-8 text-md flex flex-wrap">
                <div className="gap-2 text-md flex flex-wrap">
                  <div>4.9</div>
                  <RankStars starNumber={4} />
                  <div>315,475 rating</div>
                </div>
                <div className="gap-6 flex flex-wrap">
                  <div className="gap-1 flex items-center ">
                    <MdPlayLesson />
                    <p>11 Lessons</p>
                  </div>
                  <div className="gap-1 flex items-center ">
                    <RiGroupLine />
                    <p>200 Students</p>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet. Qui incidunt dolores non similique
                ducimus et debitis molestiae. Et autem quia eum reprehenderit
                voluptates est reprehenderit illo est enim perferendis est neque
                sunt.
              </p>

              <div className=" flex gap-2">
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
          <MyCourses />

          <div ref={reviewRef}>
            <Review Reviews={reviews} />
          </div>

          <div className="flex flex-col gap-8 w-full  border-2 px-10 py-20">
            <div className="mb-4 ">
              <h1 className="text-[22px] font-medium font-sans text-Primary mb-4">
                Leave A Reply
              </h1>
              <p className="text-[15px] font-normal text-[#585D69]">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <form className="flex flex-col gap-8  ">
              <div className="grid lg:grid-cols-2 grid-col gap-4">
                {" "}
                <div className="flex flex-col ">
                  <label htmlFor="">Frist Name</label>
                  <input
                    style={{ backgroundColor: "transparent", outline: "none" }}
                    className="w-full border-b border-borderInbut focus:border-primary focus:border-b-2 pb-2 text-primary "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">phone</label>
                  <input
                    style={{ backgroundColor: "transparent", outline: "none" }}
                    className="w-full border-b border-borderInbut  focus:border-primary focus:border-b-2 pb-2 text-primary "
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    style={{ backgroundColor: "transparent", outline: "none" }}
                    className="w-full border-b border-borderInbut  focus:border-primary focus:border-b-2 pb-2 text-primary "
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Title</label>
                  <input
                    style={{ backgroundColor: "transparent", outline: "none" }}
                    className="w-full border-b border-borderInbut  focus:border-primary focus:border-b-2 pb-2 text-primary "
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">text area</label>
                <textarea
                  cols={10}
                  rows={5}
                  name=""
                  id=""
                  className="w-full border-b border-borderInbut  focus:border-primary focus:border-b-2 pb-2 text-primary focus:mt-2"
                ></textarea>
              </div>
              <div className="flex items-center ">
                <input
                  id="default-checkbox"
                  name="category"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  style={{
                    accentColor: "black",
                  }}
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-base font-normal font-sans text-Primary dark:text-gray-300"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <button className=" flex justify-center bg-Primary text-white hover:bg-Secondary transition-all duration-400 items-center gap-3 rounded-sm py-3">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseContent;
