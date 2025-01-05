"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number; // Optional property for products on sale
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data: Product[] = await response.json();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Store cart items in local storage
    console.log("Cart:", updatedCart);
  };

  return (
    <main>
      <Header />
      <div>
        {/* Our Products */}
        <h2 className="text-[32px] font-semibold mt-[173px] text-center">
          All Products
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-5 mt-10 ml-28 mr-24">
          {products.map((product) => (
            <div key={product.id} className="card group w-80 h-96 relative">
              <div className="img relative">
                <img className="w-[312px] h-[312px]" src={product.imageUrl} alt={product.name} />
                <div className="flex justify-between -mt-[295px] items-center">
                  {product.isNew && (
                    <button className="absolute w-[54px] h-[26px] text-[13px] rounded-md ml-4 bg-green-500 text-white">
                      New
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-[300px]">
                    <h4 className="text-[16px] font-normal text-[#007580]">{product.name}</h4>
                    <h5 className="mt-2 font-bold">${product.price}</h5>
                    
                  </div>
                  <div
                    className="w-[44px] h-[44px] mt-[300px] mr-2 rounded-md relative group overflow-hidden flex flex-col items-center bg-[#F0F2F3] hover:bg-[#007580] transition-colors duration-300 cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
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
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
