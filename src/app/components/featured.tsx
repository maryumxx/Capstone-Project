"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient"; // Import your Sanity client configuration
import Image from "next/image";

interface Product {
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  image: string;
  category: {
    title: string;
    image: string;
  };
  description: string;
}

const FeaturedSection: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "products" && "featured" in tags]{
          title,
          price,
          priceWithoutDiscount,
          badge,
          "image": image.asset->url,
          category->{
            title,
            "image": image.asset->url
          },
          description
        }
      `;
      try {
        const data = await sanityClient.fetch(query);
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading featured products...</div>;

  return (
    <div className="">
      <h2 className="text-[32px] font-semibold text-center md:mt-[100px] mt-10 mb-5 ">Featured Products</h2>
      <div className="grid md:ml-20 justify-center items-center md:mt-10 mb-[300px]s  grid-cols-2 md:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-lg p-4 card group  md:w-80 md:h-96 relative"
          >
            <Image width={200} height={200}
              src={product.image}
              alt={product.title}
              className="md:w-[312px] md:h-[312px] w-[300px] h-[300px]"
            />
            <h3 className="text-[16px] font-normal mt-3 text-[#007580]">{product.title}</h3>
            <div className="flex gap-x-3">
            <p className="text-black ">
              ${product.price}
            </p>

            <p className="text-gray-400 line-through">
              {product.priceWithoutDiscount !== null
                ? `$${product.priceWithoutDiscount.toFixed(2)}`
                : null}
            </p>
            </div>

            <p className="w-[54px] h-[26px] text-[13px] rounded-md text-green-500 font-bold md:text-lg">
              {product.badge !== null ? `${product.badge}` : null}
            </p>
            <p className="description text-gray-600 mt-2 hidden md:block">
              {product.description}
            </p>
            <p className="category text-sm text-gray-500 ">
              Category: {product.category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

