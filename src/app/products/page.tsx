import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";


export default function Products() {



  return (
    <main>
      <Header />
      <div>
        {/* Our Products */}
        <h2 className="text-[32px] font-semibold  mt-[173px] text-center ">
          All Products
        </h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-5 mt-10 ml-28 mr-24">
        <Link href="/whitechair">
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
                  <h5 className=" mt-2 font-bold">$20</h5>
                </div>
                <div  className="w-[44px] h-[44px] mt-[280px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300">
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
          <Link href="/orangechair">
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
          </Link>
          {/* Card 4 */}
          <Link href="/offwhite">
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
          </Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-28 mr-24 justify-center items-center gap-x-5 mt-10">
          {/* Card 5 */}
          <Link href="/brownchair">
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
          </Link>
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
      <div className=" h-[754px] md:flex flex-col justify-center bg-[#1E2832] bg-opacity-5 mt-32 md:pb-10">
      <h2 className="md:text-[50px] font-medium text-center pt-10 text-xl mb-5 md:mb-10 ">
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
      <h3 className="text-2xl md:text-[45px] font-medium text-center mt-20">Follow Products And Discounts On Instagram</h3>
      <div className="flex justify-center mt-16 mb-5">
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="Image-6.png" alt="" />
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="Image-1.png" alt="" />
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="Image-5.png" alt="" />
        </div>
        <div className="flex justify-center">
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="Image.png" alt="" />
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="Image-2.png" alt="" />
        <img className="md:w-[186px] md:h-[186px] w-36 p-1" src="deskchair.jpg" alt="" />
      </div>
      </div>
     
      <hr />
      <Footer />
    </main>
  );
}

