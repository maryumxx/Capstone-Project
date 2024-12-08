import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Products() {
  return (
    <main>
      <Header />
      <div>
        {/* Our Products */}
        <h2 className="text-[32px] font-semibold ml-[170px] mt-[173px] ">
          All Products
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-5 mt-10 ml-28 mr-24">
          {/* Card 1 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-[312px] h-[312px] " src="Image.png" alt="" />
              <div className="flex justify-between -mt-[295px] items-center">
                <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-green-500 text-white ">
                  New
                </button>
              </div>
              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-[280px] ">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="cartwhite.png"
                    alt="White Cart Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <Link href="/pinkchair">
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-[312px] h-[312px] " src="Image-1.png" alt="Pink Chair" />
              <div className="flex justify-between -mt-[295px] items-center">
                <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-orange-500 text-white ">
                  Sales
                </button>
              </div>
              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-[280px] ">
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
                <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="cartwhite.png"
                    alt="White Cart Icon"
                  />
                </div>
              </div>
            </div>
          </div>
          </Link>
          {/* Card 3 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-[312px] h-[312px] " src="Image-2.png" alt="" />

              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className="w-[44px] h-[44px] mt-3  mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
              <img className="w-[312px] h-[312px] " src="Image-3.png" alt="" />

              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className="w-[44px] h-[44px] mt-3 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="cartwhite.png"
                    alt="White Cart Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-28 mr-24 justify-center items-center gap-x-5 mt-10">
          {/* Card 5 */}
          <div className="card group  w-80 h-96 relative">
            <div className="img relative ">
              <img className="w-[312px] h-[312px] " src="Image-5.png" alt="" />
              <div className="flex justify-between -mt-[295px] items-center">
                <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-green-500 text-white ">
                  New
                </button>
              </div>
              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-[280px] ">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
              <img className="w-[312px] h-[312px] " src="card.png" alt="" />
              <div className="flex justify-between -mt-[295px] items-center">
                <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-orange-500 text-white ">
                  Sales
                </button>
              </div>
              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-[280px] ">
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
                <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
              <img className="w-[312px] h-[312px] " src="Image-4.png" alt="" />

              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className="w-[44px] h-[44px] mt-3  mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
              <img className="w-[312px] h-[312px] " src="Image.png" alt="" />

              {/* Price n Title */}
              <div className="flex justify-between items-center">
                <div className="mt-3">
                  <h4 className="text-[16px] font-normal text-[#007580]">
                    Library Stool Chair
                  </h4>
                  <h5 className=" mt-2 font-bold">$20 </h5>
                </div>
                <div className=" w-[44px] h-[44px] mt-3 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                  <img
                    className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                    src="cart.png"
                    alt="Black Cart Icon"
                  />
                  <img
                    className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    src="cartwhite.png"
                    alt="White Cart Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-5 mt-10 ml-28 mr-24 mb-32" >

        {/* Card 1 */}
        <div className="card group  w-80 h-96 relative">
          <div className="img relative ">
            <img className="w-[312px] h-[312px] " src="Image.png" alt="" />
            <div className="flex justify-between -mt-[295px] items-center">
              <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-green-500 text-white ">
                New
              </button>
            </div>
            {/* Price n Title */}
            <div className="flex justify-between items-center">
              <div className="mt-[280px] ">
                <h4 className="text-[16px] font-normal text-[#007580]">
                  Library Stool Chair
                </h4>
                <h5 className=" mt-2 font-bold">$20 </h5>
              </div>
              <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                <img
                  className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                  src="cart.png"
                  alt="Black Cart Icon"
                />
                <img
                  className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
            <img className="w-[312px] h-[312px] " src="Image-1.png" alt="Pink Chair" />
            <div className="flex justify-between -mt-[295px] items-center">
              <button className="w-[54px] h-[26px] text-[13px] rounded-md  ml-4 bg-orange-500 text-white ">
                Sales
              </button>
            </div>
            {/* Price n Title */}
            <div className="flex justify-between items-center">
              <div className="mt-[280px] ">
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
              <div className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                <img
                  className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                  src="cart.png"
                  alt="Black Cart Icon"
                />
                <img
                  className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
            <img className="w-[312px] h-[312px] " src="Image-2.png" alt="" />

            {/* Price n Title */}
            <div className="flex justify-between items-center">
              <div className="mt-3">
                <h4 className="text-[16px] font-normal text-[#007580]">
                  Library Stool Chair
                </h4>
                <h5 className=" mt-2 font-bold">$20 </h5>
              </div>
              <div className="w-[44px] h-[44px] mt-3  mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                <img
                  className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                  src="cart.png"
                  alt="Black Cart Icon"
                />
                <img
                  className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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
            <img className="w-[312px] h-[312px] " src="Image-3.png" alt="" />

            {/* Price n Title */}
            <div className="flex justify-between items-center">
              <div className="mt-3">
                <h4 className="text-[16px] font-normal text-[#007580]">
                  Library Stool Chair
                </h4>
                <h5 className=" mt-2 font-bold">$20 </h5>
              </div>
              <div className="w-[44px] h-[44px] mt-3 mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
                <img
                  className="w-7 h-7 mt-2 transition-opacity duration-300 group-hover:opacity-0"
                  src="cart.png"
                  alt="Black Cart Icon"
                />
                <img
                  className="w-7 h-7 mt-2 ml-2 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  src="cartwhite.png"
                  alt="White Cart Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className=" h-[754px] flex flex-col justify-center bg-[#1E2832] bg-opacity-5 sm:mt-32">
      <h2 className="text-[50px] font-medium text-center">
        Or Subscribe To Our Newsletter
      </h2>
      <div className="flex items-center space-x-4 p-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Email Address..."
          className="flex-1 bg-transparent border-b border-gray-700 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-black transition"
        />

        <button
          type="submit"
          className="uppercase text-gray-700 border-b border-gray-700 hover:border-black transition"
        >
          Submit
        </button>
      </div>
      <h3 className=" text-[45px] font-medium text-center mt-20">Follow Products And Discounts On Instagram</h3>
      <div className="grid sm:grid-cols-2 ml-20 md:grid-cols-3 lg:grid-cols-6 justify-center  mt-16 mb-5">
        <img className="w-[186px] h-[186px]" src="Image-6.png" alt="" />
        <img className="w-[186px] h-[186px]" src="Image-1.png" alt="" />
        <img className="w-[186px] h-[186px]" src="Image-5.png" alt="" />
        <img className="w-[186px] h-[186px]" src="Image.png" alt="" />
        <img className="w-[186px] h-[186px]" src="Image-2.png" alt="" />
        <img className="w-[186px] h-[186px]" src="deskchair.jpg" alt="" />
      </div>
      </div>
     
      <hr />
      <Footer />
    </main>
  );
}
