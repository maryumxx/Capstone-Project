import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row justify-center md:gap-x-8 mt-20 px-4 md:px-0">
        <div>
         
          <div className="">
            <h1 className=" text-[#007580] text-4xl md:text-7xl font-bold ">
              About Us - Comforty
            </h1>
            <p className="text-[#007580] w-[400px] md:w-[600px] text-lg mt-3 md:mt-10">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <Link href="/products">
            <button className="text-white hover:shadow-2xl bg-[#007580] p-4 px-8 rounded-md mt-3 md:mt-5">
              View Collection
            </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="w-full md:w-[619px] h-auto md:h-[619px] rounded-lg mt-5 md:mt-0"
            src="Image.png"
            alt="chair"
            width={200} height={200}
          />
        </div>
      </div>

      <h5 className="font-semibold text-[32px] text-center mt-28">
        What Makes Our Brand Different
      </h5>
      <div className="flex flex-col sm:flex-row justify-center gap-8 mt-10 px-4 sm:px-0">
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <Image width={10} height={10} className="w-[24px] h-[24px] mb-3" src="delivery.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Next day as standard
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br />{" "}
            standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <Image width={200} height={200} className="w-[24px] h-[24px] mb-3" src="check.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Made by the artisans
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br />{" "}
            standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <Image width={200} height={200} className="w-[24px] h-[24px] mb-3" src="Purchase.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Unbeatable Price
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br />{" "}
            standard
          </p>
        </div>
        <div className="bg-[#F9F9F9] p-10 flex-1 max-w-[300px] mx-auto sm:mx-0">
          <Image width={200} height={200} className="w-[24px] h-[24px] mb-3" src="Sprout.png" alt="" />
          <h6 className="text-[20px] font-normal text-[#007580] mb-3">
            Recycled packaging
          </h6>
          <p className="text-[16px] font-normal text-[#007580]">
            Order before 3pm and get <br /> your order the next day as <br />{" "}
            standard
          </p>
        </div>
      </div>

      <h3 className="text-[32px] font-semibold ml-4 md:ml-[180px] mt-44">
        Our Popular Products
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-x-10 mt-10 mb-10 px-4 md:px-0">
        <Image width={200} height={200}
          className="w-full md:w-[630px] h-auto md:h-[462px]"
          src="greensofa.png"
          alt=""
        />
        <Image width={200} height={200}
          className="w-full md:w-[305px] h-auto md:h-[462px]"
          src="blackchair.png"
          alt=""
        />
        <Image width={200} height={200}
          className="w-full md:w-[305px] h-auto md:h-[462px]"
          src="bwchair.png"
          alt=""
        />
      </div>
      <Footer />
    </main>
  );
}
