"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FeaturedSection from "@/app/components/featured";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
};

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products`);
          if (response.ok) {
            const products: Product[] = await response.json();
            const foundProduct = products.find((p) => p.id.toString() === id);
            setProduct(foundProduct || null);
          } else {
            console.error(`Error: ${response.status}`);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return (
      <main>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl">Loading product details...</p>
        </div>
        <Footer />
      </main>
    );
  }

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main>
      <Header />

      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row justify-center md:gap-20 mt-20 px-4 md:px-0">
        {/* Product Image */}
        <div className="flex justify-center mb-10 md:mb-0">
          <Image width={200} height={200}
            className="w-full md:w-[600px] h-auto object-contain"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        {/* Product Information */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-lg font-semibold bg-[#005f63] text-white py-2 px-4 rounded-full inline-block">
            ${product.salePrice || product.price}.00 USD
          </p>
          <hr className="my-6" />

          <p className="text-sm md:text-lg text-gray-700 font-bold flex items-center">
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                product.isNew ? "bg-green-500" : "bg-blue-400"
              }`}
            ></span>
            {product.isNew ? "NEW ARRIVAL" : "AVAILABLE"}
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Upgrade your living space with the ${product.name}, a perfect <br />{" "}
            blend of comfort and style. Ideal for any modern home, this product{" "}
            <br /> ensures luxury and functionality with a sleek design.
          </p>

          {/* Color Options */}
          <div className="flex gap-x-5 mt-5 mb-3">
            <div className="w-10 h-10 bg-pink-200 rounded-full "></div>
            <div className="w-10 h-10 bg-sky-200 rounded-full "></div>
            <div className="w-10 h-10 bg-emerald-200 rounded-full "></div>
            <div className="w-10 h-10 bg-rose-300 rounded-full "></div>
            <div className="w-10 h-10 bg-blue-400 rounded-full "></div>
            <div className="w-10 h-10 bg-slate-500 rounded-full "></div>
            <div className="w-10 h-10 bg-black rounded-full "></div>
            <div className="w-10 h-10 bg-violet-200 rounded-full "></div>
          </div>

          {/* Sold */}

          <p className="text-lg mt-5">⭐ 500+ Products Sold</p>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full md:w-1/2 flex items-center justify-center gap-2 py-3 bg-[#005f63] hover:bg-[#006063de] text-white font-semibold rounded-md transition" 
          onClick={() => addToCart(product)}>
            <Image width={200} height={200}className="w-6 h-6" src="/cartwhite.png" alt="Cart Icon" />
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      
          
        
        <FeaturedSection/>
        

      <Footer />
    </main>
  );
}
