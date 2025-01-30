import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample product data (you can replace this with actual data from a database or API)
const products = [
  {
    id: 1,
    name: "Smart Watch",
    price: 199.99,
    image: "/images/smartwatch.jpg",
    link: "/products/smart-watch",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 89.99,
    image: "/images/earbuds.jpg",
    link: "/products/wireless-earbuds",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    price: 79.99,
    image: "/images/fitness-tracker.jpg",
    link: "/products/fitness-tracker",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "/images/speaker.jpg",
    link: "/products/bluetooth-speaker",
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    price: 249.99,
    image: "/images/headphones.jpg",
    link: "/products/noise-cancelling-headphones",
  },
  {
    id: 6,
    name: "Portable Power Bank",
    price: 39.99,
    image: "/images/powerbank.jpg",
    link: "/products/portable-power-bank",
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={product.link}
          className="bg-white shadow-md rounded-lg overflow-hidden 
            hover:shadow-xl transition-colors"
        >
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold truncate mb-1">
              {product.name}
            </h3>
            <p className="text-base font-bold">${product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
