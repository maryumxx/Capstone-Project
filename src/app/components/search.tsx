import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";
type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
  label?: string;
  labelColor?: string;
  category: string;
};

const Search = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults([]); 
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/products?q=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="relative hidden md:flex items-center p-2 px-4 gap-x-5 text-gray-700 text-sm focus:outline-none border-none">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border rounded-full focus:outline-none md:w-72 p-3 bg-gray-100"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Image width={200} height={200} src="/search.png" className="w-7 h-7" alt="" />
      {loading && <div className="absolute top-full mt-2">Loading...</div>}
      {results.length > 0 && (
        <ul className="absolute top-full mt-2 bg-white border shadow-lg z-50 p-2 px-2 w-52">
          {results.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <li
                className="p-3 hover:bg-gray-100 cursor-pointer z-10 text-[14px]"
              >
                {product.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
