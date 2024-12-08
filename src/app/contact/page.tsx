import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <main>
      <Header />
      <h1 className="mt-20 text-[36px] font-bold text-center">
        Get In Touch With Us!
      </h1>
      <p className="text-center mb-28">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
        Not Hesitate!
      </p>
      <div className="flex flex-col md:flex-row justify-around mt-20 px-4">
        <div className="flex flex-col md:flex-row md:gap-x-72 p-6">
          <div className="space-y-12">
            <div className="flex space-x-4">
              <span className="text-xl text-teal-500">
                <img className="w-7 h-7" src="map.png" alt="Address" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New <br /> York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <span className="text-xl text-teal-500">
                <img className="w-7 h-7" src="phone.png" alt="Phone" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Phone</h3>
                <p className="text-gray-600">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex space-x-4">
              <span className="text-xl text-teal-500">
                <img className="w-7 h-7" src="clock.png" alt="Working Time" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Working Time</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="w-full md:w-[528px] mt-10 md:mt-0">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium p-3"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-3 border border-black h-[75px] rounded-lg"
                  placeholder="Abc"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-3 border border-black h-[75px] rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Abc@def.com"
                />
              </div>
              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full mt-1 p-3 border border-black h-[75px] rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="This is optional"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full mt-1 p-3 border border-black h-[120px] rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Hi! I'd like to ask about"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-[237px] h-[55px] py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-28 h-auto md:h-[270px] bg-[#F4F4F4] items-center mx-4 md:ml-36 md:mr-36 mt-20 p-4 md:p-0">
        <div className="flex items-center">
          <div>
            <img className="w-[60px] h-[60px]" src="trophy.png" alt="High Quality" />
          </div>
          <div>
            <h4 className="text-[25px] font-semibold font-['Poppins'] mb-1 ml-1">
              High Quality
            </h4>
            <p className="text-[20px] font-medium text-[#898989]">
              Crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-[60px] h-[60px]" src="guarantee.png" alt="Warranty Protection" />
          </div>
          <div>
            <h4 className="text-[25px] font-semibold font-['Poppins'] mb-1 ml-1">
              Warranty Protection
            </h4>
            <p className="text-[20px] font-medium text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-[60px] h-[60px]" src="customer-support.png" alt="24/7 Support" />
          </div>
          <div>
            <h4 className="text-[25px] font-semibold font-['Poppins'] mb-1 ml-1">
              24/7 Support
            </h4>
            <p className="text-[20px] font-medium text-[#898989]">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
