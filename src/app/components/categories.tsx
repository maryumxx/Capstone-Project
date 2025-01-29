import { useState, useEffect } from "react";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function CategoryComponent() {
  const [categories, setCategories] = useState<string[]>([
    "Desk Chair",
    "Wooden Chair",
    "Wing Chair",
  ]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
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

  return (
    <div className="">
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

      <div className="products-list grid md:grid-cols-4 grid-cols-2 gap-x-2 mr-2 ml-2  md:gap-x-16 md:ml-52 md:mr-52">
        {filteredProducts.map((product) => (
          <div key={product.id} className="">
            <Image width={200} height={200}
              src={product.imageUrl}
              alt={product.name}
              className="md:w-72 md:h-72 "
            />
            <h4 className="font-semibold text-lg mt-3">{product.name}</h4>
            <p className="mb-5 text-green-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
