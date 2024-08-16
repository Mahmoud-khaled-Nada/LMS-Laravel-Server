import MainHeader from "../common/MainHeader";
import YouTube from "react-youtube";

function MainSection() {
  const opts = {
    height: "290",
    width: "512",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <MainHeader>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-11/12 lg:w-3/4 m-auto py-10">
        <div className="flex flex-col gap-4  text-left">
          <h1 className="text-[36px] text-Secondary font-bold">
            Get to know us
          </h1>
          <p className="text-[18px] text-white">
            The Export Academy was established in partnership between the
            Egyptian Exporters Association - Expolink and the Foreign Trade
            Training Center - Ministry of Trade and Industry as an independent
            entity to work at the local and regional levels (Arab region and
            Africa).
          </p>
          <p className="text-[18px] text-white">
            The academy aims, through its specialized training programs in
            exports, to increase Egyptian exports, enhance economic integration
            and intra-Arab and intra-African trade, as well as promote national
            trade efforts and find new markets for commercial and industrial
            entities, thereby contributing to economic growth. The academy
            functions as a business platform in Egypt and Arab and African
            countries by exchanging information and experiences to create an
            effective regional business environment.
          </p>
        </div>
        <YouTube videoId="M4nelpDLwH0" opts={opts} />
      </div>
    </MainHeader>
  );
}

export default MainSection;
