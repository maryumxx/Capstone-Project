'use client'
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number; // Optional property for products on sale
};

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const deleteProduct = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main>
     
      <Header />
      
      <div className="p-6 flex flex-col lg:flex-row justify-center gap-x-44 mt-20">
        <div className="space-y-6">
          <h1 className="text-[22px] font-bold mb-4">Bag</h1>
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4" data-id="addtocart-visibility">
                <div className="flex items-center w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-[150px] h-[150px] object-cover rounded"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold mb-4">{product.name}</h2>
                    <div className="flex gap-x-12 mt-2">
                      <p className="text-sm text-gray-500">Size: L</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <div className="flex space-x-4 mt-5">
                      <Image className="w-5 h-5" src="heart.png" alt="/favorite" />
                      <Image className="w-5 h-5 cursor-pointer" src="/delete.png" alt=""
                      onClick={() => deleteProduct(product.id)} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                  <p className="text-[15px] font-semibold ml-80">MRP: ${product.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="rounded-md w-full lg:w-96 mt-10 lg:mt-0">
          <h2 className="font-bold mb-6 text-[22px]">Summary</h2>
          <div className="flex justify-between mb-5">
            <p className="text-gray-700">Subtotal</p>
            <p className="font-semibold">${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-5">
            <p className="text-gray-700">Estimated Delivery & Handling</p>
            <p className="font-semibold">Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-7">
            <p className="text-lg font-bold">Total</p>
            <p className="text-lg font-bold">${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
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
