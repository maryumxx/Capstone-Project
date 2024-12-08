import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

export default function Cart() {
  return (
    <main>
      <Header />
      <div className="p-6 flex flex-col lg:flex-row justify-center gap-x-44 mt-20">
        <div className="space-y-6">
          <h1 className="text-[22px] font-bold mb-4">Bag</h1>
          {/* First item */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
            <div className="flex items-center w-full">
              <img
                src="Image-5.png"
                alt="Library Stool Chair"
                className="w-[150px] h-[150px] object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold mb-4">Library Stool Chair</h2>
                <p className="text-sm text-gray-500 mb-3">Ashen Slate/Cobalt Bliss</p>
                <div className="flex gap-x-12 mt-2">
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <div className="flex space-x-4 mt-5">
                  <img className="w-5 h-5" src="heart.png" alt="" />
                  <img className="w-5 h-5" src="delete.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <p className="text-[15px] font-semibold ml-80">MRP: $99</p>
            </div>
          </div>

          {/* Second item */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4">
            <div className="flex items-center w-full">
              <img
                src="Image-2.png"
                alt="Library Stool Chair"
                className="w-[150px] h-[150px] object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold mb-4">Library Stool Chair</h2>
                <p className="text-sm text-gray-500 mb-3">Ashen Slate/Cobalt Bliss</p>
                <div className="flex gap-x-12 mt-2">
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <div className="flex space-x-4 mt-5">
                  <img className="w-5 h-5" src="heart.png" alt="" />
                  <img className="w-5 h-5" src="delete.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <p className="text-[15px] font-semibold ml-80">MRP: $99</p>
            </div>
          </div>
        </div>

        <div className="rounded-md w-full lg:w-96 mt-10 lg:mt-0">
          <h2 className="font-bold mb-6 text-[22px]">Summary</h2>
          <div className="flex justify-between mb-5">
            <p className="text-gray-700">Subtotal</p>
            <p className="font-semibold">$198.00</p>
          </div>
          <div className="flex justify-between mb-5">
            <p className="text-gray-700">Estimated Delivery & Handling</p>
            <p className="font-semibold">Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-7">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">$198.00</p>
          </div>
          <button className="w-full py-4 text-white bg-[#029FAE] rounded-full font-semibold hover:bg-teal-600">
            Member Checkout
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
