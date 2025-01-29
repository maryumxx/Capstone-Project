import { NextResponse } from "next/server";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
  salePrice?: number;
  label?: string;
  labelColor?: string;
  category: string; // Add category field here
};

const products: Product[] = [
  {
    id: 1,
    name: "Old White Chair",
    price: 20,
    imageUrl: "/Image.png",
    isNew: true,
    category: "Desk Chair", // Add category
  },
  {
    id: 2,
    name: "Pink Chair",
    price: 20,
    imageUrl: "/Image-1.png",
    isNew: false,
    salePrice: 30,
    category: "Wing Chair", // Add category
  },
  {
    id: 3,
    name: "Orange Chair",
    price: 20,
    imageUrl: "/Image-2.png",
    isNew: false,
    category: "Wooden Chair", // Add category
  },
  {
    id: 4,
    name: "Offwhite Chair",
    price: 20,
    imageUrl: "/Image-3.png",
    isNew: false,
    category: "Wooden Chair", // Add category
  },
  {
    id: 5,
    imageUrl: "/Image-4.png",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Cozy Seat",
    price: 20,
    isNew: false,
    category: "Wing Chair", // Add category
  },
  {
    id: 6,
    imageUrl: "/Image-5.png",
    label: "New",
    labelColor: "bg-green-500",
    name: "Office Chair",
    price: 40,
    isNew: false,
    category: "Desk Chair", // Add category
  },
  {
    id: 7,
    imageUrl: "/Image-6.png",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Wooden Desk",
    price: 100,
    isNew: false,
    category: "Wooden Chair", // Add category
  },
  {
    id: 8,
    imageUrl: "/deskchair.jpg",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "Desk Chair",
    price: 800,
    isNew: false,
    category: "Desk Chair", // Add category
  },
  {
    id: 9,
    imageUrl: "/enor.jpg",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Ergonomic Chair",
    price: 100,
    isNew: false,
    category: "Wing Chair", // Add category
  },
  {
    id: 10,
    imageUrl: "/Image-6.png",
    label: "New",
    labelColor: "bg-green-500",
    name: "Standing Desk",
    price: 200,
    isNew: false,
    category: "Desk Chair", // Add category
  },
  {
    id: 11,
    imageUrl: "/Image.png",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Coffee Table",
    price: 300,
    isNew: false,
    category: "Wooden Chair", // Add category
  },
  {
    id: 12,
    imageUrl: "/Image-1.png",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "Leather Sofa",
    price: 300,
    isNew: false,
    category: "Wing Chair", // Add category
  },
];

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const query = url.searchParams.get("q")?.toLowerCase() || "";

  // Filter products based on the query
  const filteredProducts = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    : products;

  return NextResponse.json(filteredProducts);
};
