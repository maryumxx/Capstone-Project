import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row justify-center gap-y-5 md:gap-x-5 mt-20 px-4 md:px-0">
        <img
          className="w-full md:w-[672px] h-auto md:h-[478px] rounded-lg"
          src="textblock.png"
          alt=""
        />
        <img
          className="w-full md:w-[619px] h-auto md:h-[478px] rounded-lg"
          src="Image.png"
          alt=""
        />
      </div>

      <h5 className="font-semibold text-[32px] text-center mt-28">
        What Makes Our Brand Different
      </h5>
      <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10 px-4 sm:px-0">
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <img className="w-[24px] h-[24px] mb-3" src="delivery.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Next day as standard
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br /> standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <img className="w-[24px] h-[24px] mb-3" src="check.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Made by the artisans
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br /> standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <img className="w-[24px] h-[24px] mb-3" src="Purchase.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Unbeatable Price
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br /> standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <img className="w-[24px] h-[24px] mb-3" src="Sprout.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Recycled packaging
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br /> standard
          </p>
        </div>
      </div>

      <h3 className="text-[32px] font-semibold ml-4 md:ml-[180px] mt-44">
        Our Popular Products
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-10 mt-10 mb-10 px-4 md:px-0">
        <img
          className="w-full md:w-[630px] h-auto md:h-[462px]"
          src="greensofa.png"
          alt=""
        />
        <img
          className="w-full md:w-[305px] h-auto md:h-[462px]"
          src="blackchair.png"
          alt=""
        />
        <img
          className="w-full md:w-[305px] h-auto md:h-[462px]"
          src="bwchair.png"
          alt=""
        />
      </div>
      <Footer />
    </main>
  );
}
