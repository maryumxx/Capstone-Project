"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data: Product[] = await response.json();
          setProducts(data);
        } else {
          console.error(`Failed to fetch: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main>
     
      <div>
        <h2 className="text-[32px] font-semibold mt-10 md:mt-[173px] text-center">
          All Products
        </h2>

        <div className="ml-2 mb-10 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-1 md:mt-10 md:ml-28 md:mr-24">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <div className="card group md:w-80 md:h-96 h-56 w-56  relative cursor-pointer mt-24">
                <div className="img relative">
                  <Image width={200} height={200}
                    className="md:w-[312px] md:h-[312px] h-[240px] w-[240px]"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className="flex justify-between md:-mt-[295px] -mt-52 items-center">
                    {product.isNew && (
                      <button className="absolute w-[54px] h-[26px] text-[13px] rounded-md ml-4 bg-green-500 text-white md:mt-5">
                        New
                      </button>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="md:mt-[300px] mt-56">
                      <h4 className="text-[16px] font-normal text-[#007580]">
                        {product.name}
                      </h4>
                      <h5 className="mt-2 font-bold">
                        ${product.salePrice || product.price}
                      </h5>
                    </div>
                    <div
                      className="md:w-[44px] md:h-[44px] h-10 w-10 md:mt-[300px] mt-52 md:mr-2 rounded-md  bg-[#007580] cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      
                      <Image width={200} height={200}
                        className="w-7 h-7 mt-1 ml-1  md:mt-2 md:ml-2"
                        src="/cartwhite.png"
                        alt="White Cart Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
     
    </main>
  );
}
