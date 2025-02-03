"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import { Suspense } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  category: string;
  salePrice?: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([
    "Desk Chair",
    "Wooden Chair",
    "Wing Chair",
  ]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (response.ok) {
          const data: Product[] = await response.json();
          setProducts(data);
          setFilteredProducts(data);
        } else {
          console.error(`Failed to fetch: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main>
      <Header />
      <h2 className="text-[32px] font-semibold mt-10 md:mt-[70px] text-center">
        All Products
      </h2>
      <div className="category-filter ml-2 md:ml-[270px] mt-10 mb-10 flex gap-x-5">
        <h3 className="font-bold text-lg">Filter by Category</h3>
        <select
          className="border-none"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory || ""}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

     <Suspense>
      <div className="ml-2 mb-10 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-1 md:ml-28 md:mr-24">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <div className="card group md:w-80 md:h-96 h-56 w-56  relative cursor-pointer mt-10">
              <div className="img relative">
                <Image width={200} height={200}
                  className="md:w-[312px] md:h-[312px] h-[240px] w-[240px]"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="flex justify-between md:-mt-[295px] -mt-52 items-center">
                  {product.isNew && (
                    <button className="absolute w-[54px] h-[26px] text-[13px] rounded-md ml-4 mt-7 bg-green-500 text-white">
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
                    data-id="add-to-cart-button"
                      className="w-7 h-7 mt-1 ml-1 md:mt-2 md:ml-2"
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
      </Suspense>
      <Footer />
    </main>
  );
}
