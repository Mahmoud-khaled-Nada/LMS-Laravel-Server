function Contact() {
  return (
    <div className="flex-flex-col gap-8">
      <div className="lg:w-1/2 md:1/3 mx-auto flex items-center justify-center">
        <h1 className="text-center text-[30px]  text-Primary font-bold">
          Fill out the form below so we can get to know you and your needs
          better.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
        <div className="w-full lg:w-1/2">
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Road9%20Coworking%20Space+(Road9%20Coworking%20Space)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="rounded-lg shadow-md"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>

        <div className="w-full lg:w-1/2">
          <form className=" p-8 rounded-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="bg-gray-50 border border-gray-300 text-Primary text-sm rounded-lg focus:ring-Secondary focus:border-Secondary block w-full p-2.5"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="bg-gray-50 border border-gray-300 text-Primary text-sm rounded-lg focus:ring-Secondary focus:border-Secondary block w-full p-2.5"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-Primary text-sm rounded-lg focus:ring-Secondary focus:border-Secondary block w-full p-2.5"
                  placeholder="name@flowbite.com"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your phone"
                  className="bg-gray-50 border border-gray-300 text-Primary text-sm rounded-lg focus:ring-Secondary focus:border-Secondary block w-full p-2.5"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="bg-gray-50 border border-gray-300 text-Primary text-sm rounded-lg focus:ring-Secondary focus:border-Secondary block w-full p-2.5"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-Primary hover:bg-Secondary focus:ring-4 focus:outline-none focus:ring-Secondary font-medium rounded-lg text-sm w-full lg:w-full sm:w-auto px-5 py-2.5 text-center transition-all duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
