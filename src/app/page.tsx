import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Content */}
      <div className="flex justify-center items-center">
  <img className="w-full h-auto max-w-[1321px] md:max-h-[850px] object-cover" src="heroimg.png" alt="Hero Image" />
</div>

<div className="flex justify-center items-center flex-wrap gap-8 mt-8 md:gap-x-24 md:mt-0">
  <img className="w-[85px] h-[87px]" src="zapier.png" alt="Zapier" />
  <img className="w-[107px] h-[109px]" src="pipedrive.png" alt="Pipedrive" />
  <img className="w-[135px] h-[139px]" src="cibbank.png" alt="CibBank" />
  <img className="w-[63px] h-[65px]" src="z.png" alt="Z" />
  <img className="w-[98px] h-[101px]" src="burn.png" alt="Burn" />
  <img className="w-[113px] h-[115px]" src="panda.png" alt="Panda" />
  <img className="w-[84px] h-[87px]" src="moz.png" alt="Moz" />
</div>


     {/* Top Categories */}
     <h2 className="text-[32px] font-semibold  mt-10 text-center">
        Top Categories
      </h2>
      <div className="flex justify-center items-center  md:gap-x-5 mt-10 ">
      {/* Card 1 */}
      <div className="card group  relative">
        <div className="img relative ">
          <img className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 " src="category.png" alt="" />
         
         </div>
         </div>
      {/* Card 2 */}
      <div className="card group  relative">
        <div className="img relative ">
          <img className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3 " src="category-1.png" alt="" />
         
         </div>
         </div>
     {/* Card 3*/}
     <div className="card group  relative">
        <div className="img relative ">
          <img className="md:w-[424px] md:h-[424px] w-[400px] h-[170px] px-3" src="category-2.png" alt="" />
         
         </div>
         </div>
</div>

{/* Explore */}
<div className="flex justify-center items-center mt-16 md:mt-32 md:gap-x-5 ">
<h3 className="md:text-[34px] font-normal -rotate-90 w-[642px] h-[52px] absolute lg:-ml-[1400px] -ml-[420px] -mt-80 md:mt-0 text-base">EXPLORE NEW AND POPULAR STYLES</h3>
  <div>
 
    <img className="md:w-[648px] md:h-[648px] w-[180px] h-[280px] rounded-lg p-1  ml-7" src="Image-2.png" alt="" />
  </div>
  <div className="">
    <img className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  md:mb-5 rounded-lg" src="Image-3.png" alt="" />
    <img className="md:w-[312px] md:h-[312px] w-[140px] h-[140px]  p-[1px] rounded-lg " src="card.png" alt="" />
  </div>
  <div className="">
    <img className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  md:mb-5 rounded-lg" src="Image.png" alt="" />
    <img className="md:w-[312px] md:h-[312px] w-[140px] h-[140px] p-[1px]  rounded-lg" src="Image.png" alt="" />
  </div>
  
</div>

{/* Our Products */}
<h2 className="text-[32px] font-semibold text-center md:mt-[173px] mt-20 mb-5 ">
        Our Products
      </h2>
      <div className="flex justify-center items-center md:gap-x-5 md:mt-10  md:mb-52 gap-x-1 ml-2 mr-2 ">
        {/* Card 1 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image.png" alt="" />
          <div className="md:flex justify-between -mt-[295px]  items-center hidden">
            <button className="w-[54px] h-[26px] text-[13px] rounded-md md:ml-4 bg-green-500 text-white">
              New
            </button>
          </div>
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="md:mt-[280px] mt-3 ">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 md:mt-[280px] mt-4 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 2 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image-1.png" alt="" />
          <div className="hidden md:flex justify-between -mt-[295px] items-center">
            <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-orange-500 text-white ">
              Sales
            </button>
          </div>
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="md:mt-[280px] mt-3 ">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                <span className="text-gray-300 font-medium line-through text-sm">
                  $30
                </span>
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 md:mt-[280px] mt-4 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 3 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image-2.png" alt="" />
          
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="mt-3">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 mt-3  mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 4 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image-3.png" alt="" />
          
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="mt-3">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
               
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 mt-3 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <div className="flex justify-center items-center md:gap-x-5 md:-mt-28  md:mb-52 gap-x-1 ml-2 mr-2">
 {/* Card 5 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image-5.png" alt="" />
          <div className="md:flex justify-between md:-mt-[295px] items-center hidden">
            <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-green-500 text-white ">
              New
            </button>
          </div>
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="md:mt-[280px] mt-4 ">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 md:mt-[280px] mt-4 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 6 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px]" src="card.png" alt="" />
          <div className="md:flex justify-between -mt-[295px] items-center hidden">
            <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-orange-500 text-white">
              Sales
            </button>
          </div>
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="md:mt-[280px] mt-4 ">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                <span className="text-gray-300 font-medium line-through text-sm">
                  $30
                </span>
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 md:mt-[280px] mt-4 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 7 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px] " src="Image-4.png" alt="" />
          
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="mt-3">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
                
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 mt-3  mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Card 8 */}
      <div className="card group  w-80 h-96 relative">
        <div className="img relative ">
          <img className="md:w-[312px] md:h-[312px] w-[200px] h-[150px]" src="Image.png" alt="" />
          
          {/* Price n Title */}
          <div className="flex justify-between items-center">
            <div className="mt-3">
              <h4 className="text-[16px] font-normal text-[#007580]">
                Library Stool Chair
              </h4>
              <h5 className=" mt-2 font-bold">
                $20{" "}
               
              </h5>
            </div>
            <div className="md:w-[44px] md:h-[44px] w-12 mt-3 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-gray-400 hover:bg-[#007580] transition-colors duration-300">
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 transition-opacity duration-300 group-hover:opacity-0"
                src="cart.png"
                alt="Black Cart Icon"
              />
              <img
                className="md:w-7 md:h-7 p-1  md:mt-2 md:ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src="cartwhite.png"
                alt="White Cart Icon"
              />
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </main>
  );
}
