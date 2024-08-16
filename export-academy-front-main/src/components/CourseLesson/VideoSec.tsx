import VideoCard from "../common/VideoCard";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import style from "../../Styles/Lesson.module.css";
import { Lesson } from "@/utils/types/types";
import { useState } from "react";

function VideoSec() {
  const [videoUrl, setVideoUrl] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const lessons: Lesson[] = [
    {
      imgUrl: "/images/Lessons/maxresdefault (1).jpg",
      description:
        "How you can make your own basic webpage with manual HTML coding using simple notepad.",
      duration: 6.45,
      LessonName: "HTML Structure",
      video:
        "https://videos.pexels.com/video-files/3433789/3433789-hd_1920_1080_25fps.mp4",
    },
    {
      imgUrl: "/images/Lessons/maxresdefault.jpg",
      description:
        "How to add images in HTML manually using simple notepad only.",
      duration: 5.33,
      LessonName: "Adding Images",
      video:
        "https://videos.pexels.com/video-files/2915401/2915401-hd_1920_1080_30fps.mp4",
    },
    {
      imgUrl: "/images/Lessons/sddefault.jpg",
      description:
        "Formatting text in HTML. This is a very basic HTML tutorial for newbies.",
      duration: 5.2,
      LessonName: "Formatting Text",
      video:
        "https://videos.pexels.com/video-files/4088836/4088836-hd_1920_1080_25fps.mp4",
    },
    {
      imgUrl: "/images/Lessons/sddefault.jpg",
      description:
        "Formatting text in HTML. This is a very basic HTML tutorial for newbies.",
      duration: 5.2,
      LessonName: "Formatting Text",
      video: "https://youtu.be/8bZ4RPjOPYE?si=wUs9cFLP8WgLXp-h",
    },
    {
      imgUrl: "/images/Lessons/sddefault.jpg",
      description:
        "Formatting text in HTML. This is a very basic HTML tutorial for newbies.",
      duration: 5.2,
      LessonName: "Formatting Text",
      video:
        "https://videos.pexels.com/video-files/4088836/4088836-hd_1920_1080_25fps.mp4",
    },
    {
      imgUrl: "/images/Lessons/sddefault.jpg",
      description:
        "Formatting text in HTML. This is a very basic HTML tutorial for newbies.",
      duration: 5.2,
      LessonName: "Formatting Text",
      video:
        "https://videos.pexels.com/video-files/4089575/4089575-hd_1920_1080_25fps.mp4",
    },
    {
      imgUrl: "/images/Lessons/sddefault.jpg",
      description:
        "Formatting text in HTML. This is a very basic HTML tutorial for newbies.",
      duration: 5.2,
      LessonName: "Formatting Text",
      video: "https://youtu.be/YNSnugnQYiI?si=4VLDDjYDjrb1BvtE",
    },
    {
      imgUrl: "/images/Lessons/sddefault (1).jpg",
      description:
        "How to add background to your web page with simple HTML coding.",
      duration: 5.33,
      LessonName: "Adding Background",
      video: "https://youtu.be/Hwq_Mr12bcI?si=sUd1WZ2FLiQmMLTG",
    },
    // Add more lessons as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="md:col-span-2 lg:col-span-3">
        <Player src={videoUrl} autoPlay>
          <BigPlayButton position="center" />
        </Player>
      </div>

      <div
        className={`grid grid-cols-1 gap-2 my-2 justify-center h-[700px] overflow-y-scroll items-center px-2 ${style.LessonScroll}`}
      >
        {lessons.map((lesson, index) => (
          <div
            onClick={() => {
              setVideoUrl(lesson.video);
              setSelectedVideoIndex(index);
            }}
            key={index}
            className={`video-sec  ${
              selectedVideoIndex === index ? "bg-[#f1f1f1]" : ""
            }`}
          >
            <div className="flex justify-center items-center video cursor-pointer">
              <VideoCard {...lesson} />
            </div>
            <div className="hoverAnimate "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoSec;
