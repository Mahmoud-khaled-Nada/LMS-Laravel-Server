function Uniqueness() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl font-bold">What makes us unique?</h1>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="bg-[#F4F4F4] rounded-lg shadow-md">
          <img
            src="/images/image-1.webp"
            alt="Image 1"
            className="rounded-lg shadow-md  h-auto"
          />
          <div className="p-6 flex flex-col">
            <h2 className="text-lg font-semibold mt-4 mb-2">
              The Academy's Vision
            </h2>
            <p className="text-gray-800">
              To be a local and regional hub for training and enhancing the
              capabilities of exporters and those interested in foreign trade,
              supporting trainees with necessary information and experiences and
              preparing them to access markets in a sustainable and competitive
              manner in accordance with global trade rules and preferential
              agreements.
            </p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] rounded-lg shadow-md">
          <img
            src="/images/image-2.webp"
            alt="Image 2"
            className="rounded-lg shadow-md h-auto"
          />
          <div className="p-6 flex flex-col">
            <h2 className="text-lg font-semibold mt-4 mb-2">Academy Message</h2>
            <p className="text-gray-600">
              Training and qualifying current and potential exporters locally
              and regionally. Enhancing the skills of employees in export
              institutions and all entities involved in export activities,
              whether governmental, private sector, or civil society. Providing
              technical expertise and consultancy to those working in the field
              of export.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uniqueness;
