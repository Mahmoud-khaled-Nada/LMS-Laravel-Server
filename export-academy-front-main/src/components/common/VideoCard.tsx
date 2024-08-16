import { Lesson } from "@/utils/types/types";

const VideoCard: React.FC<Lesson> = ({
  imgUrl,
  LessonName,
  duration,
  description,
}) => {
  return (
    <div className="grid grid-cols-2  gap-2">
      <div className="relative">
        <img src={imgUrl} className="h-24 w-full " />
        <div className="absolute top-0 right-0 px-2 bg-Secondary text-white">
          <p>{duration}</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-[20px]">{LessonName}</h2>
        <p className="text-sm text-[#666]">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
