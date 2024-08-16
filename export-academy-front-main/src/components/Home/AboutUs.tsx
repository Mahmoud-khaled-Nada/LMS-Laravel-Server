function AboutUs() {
  return (
    <div className="flex lg:flex-row  flex-col-reverse items-center justify-center gap-10 my-10">
      <div className="flex flex-col gap-8 basis-1/2">
        <h1 className=" text-Primary text-[48px] font-semi-bold">About us</h1>
        <div className="flex flex-col gap-4">
          <p className="text-[16px] text-[#666] font-normal ">
            e Export Academy Foundation was established through a partnership
            between the Egyptian Exporters Association – Expolink and the
            Foreign Trade Training Center – Ministry of Trade and Industry, with
            support from the International Islamic Trade Finance Corporation. It
            operates as a non-profit organization working at both local and
            regional levels (Arab and African) under the patronage of Dr. Hala
            El Said, Minister of Planning and Economic Development
          </p>
          <p className="text-[16px] text-[#666] font-normal">
            The academy aims through its specialized training programs in export
            to increase Egyptian exports, enhance economic integration and
            intra-trade among Arab and targeted African countries, promote
            national trade efforts, and create new markets for commercial and
            industrial enterprises, thereby contributing to economic growth. The
            academy serves as a business platform in Egypt, Arab countries, and
            Africa by exchanging information and expertise to create an
            effective regional business environment.
          </p>
        </div>
      </div>
      <div className="basis-1/2">
        <img src="/images/image-5.webp" className="w-full" />
      </div>
    </div>
  );
}

export default AboutUs;
