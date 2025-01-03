import Header from "../components/header";
import Footer from "../components/footer";

export default function OrangeChair() {
  return (
    <main>
      <Header />

      <div className="flex flex-col md:flex-row justify-center md:gap-x-20 mt-32 px-4 md:px-0">
        <div className="flex justify-center mb-10 md:mb-0">
          <img
            className="w-full md:w-[675px] h-auto md:h-auto object-contain"
            src="Image-2.png"
            alt="Library Stool Chair"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-[40px] md:text-[60px] font-bold mb-5">
            Library Stool <br className="hidden md:block" /> Chair
          </h1>
          <p className="text-[20px] font-semibold p-2 bg-[#007580] rounded-full pl-3 w-auto md:w-[144px] text-white mb-10 mx-auto md:mx-0">
            $20.00 USD
          </p>

          <hr />

          <p className="text-[18px] md:text-[22px] font-light text-[#272343] mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
            <br className="hidden md:block" /> Cumque consectetur dolorem
            aspernatur aut, <br className="hidden md:block" /> voluptas quod
            accusamus, praesentium adipisci.
          </p>
          <div  className="md:w-[600px] md:h-[50px] mt-4 mr-2 rounded-md relative group overflow-hidden bg-gray-400 flex justify-center items-center   hover:bg-[#007580] transition-colors duration-300">
          <div className="flex justify-center items-center">
            <img
              className="md:w-7 md:h-7  transition-opacity duration-300 group-hover:opacity-0"
              src="cart.png"
              alt="Black Cart Icon"
            />
            <img
              className="md:w-7 md:h-7  transition-opacity duration-300  opacity-0  group-hover:opacity-100"
              src="cartwhite.png"
              alt="White Cart Icon"
            />
          </div>
          <p className="hover:text-white">ADD TO CART</p>
          </div>


        </div>
      </div>
      <div className="flex items-center justify-between px-4 md:px-20 mt-20">
        <h2 className="text-[24px] md:text-[28px] font-bold text-black mt-10">
          FEATURED PRODUCTS
        </h2>
        <h3 className="font-bold underline underline-offset-4">View All</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10 mb-20 px-4 md:px-0">
        {[
          "Image-1.png",
          "Image-2.png",
          "Image-3.png",
          "Image-4.png",
          "Image-5.png",
        ].map((src, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-auto">
            <img
              className="w-full md:w-[270px] h-auto object-contain md:h-[263px]"
              src={src}
              alt={`Library Stool Chair ${index + 1}`}
            />
            <div className="flex justify-between mt-4">
              <p>Library Stool Chair</p>
              <p className="font-semibold">$99</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
