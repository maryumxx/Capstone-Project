import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Old White Chair",
    price: 20,
    imageUrl: "Image.png",
    isNew: true,
  },
  {
    id: 2,
    name: "Pink Chair",
    price: 20,
    imageUrl: "Image-1.png",
    isNew: false,
    salePrice: 30,
  },
  {
    id: 3,
    name: "Orange Chair",
    price: 20,
    imageUrl: "Image-2.png",
    isNew: false,
  },
  {
    id: 4,
    name: "Offwhite Chair",
    price: 20,
    imageUrl: "Image-3.png",
    isNew: false,
  },
  {
    id: 5,
    imageUrl: "Image-4.png",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Cozy Seat",
    price: "20",

  },
  {
    id: 6,
    imageUrl: "Image-5.png",
    label: "New",
    labelColor: "bg-green-500",
    name: "Office Chair",
    price: "40",

  },
  {
    id: 7,
    imageUrl: "Image-6.png",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Wooden Desk",
    price: "100",
  
  },
  {
    id: 8,
    imageUrl: "deskchair.jpg",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "Desk Chair",
    price: "800",
    
  },
  {
    id: 9,
    imageUrl: "enor.jpg",
    label: "Sale",
    labelColor: "bg-red-500",
    name: "Ergonomic Chair",
    price: "150",
  
  },
  {
    id: 10,
    imageUrl: "Image-6.png",
    label: "New",
    labelColor: "bg-green-500",
    name: "Standing Desk",
    price: "250",
  
  },
  {
    id: 11,
    imageUrl: "Image.png",
    label: "Sales",
    labelColor: "bg-orange-500",
    name: "Coffee Table",
    price: "60",

  },
  {
    id: 12,
    imageUrl: "Image-1.png",
    label: "Best Seller",
    labelColor: "bg-blue-500",
    name: "Leather Sofa",
    price: "500",
  
  },
];

export const GET = () => {
  return NextResponse.json(products);
};
