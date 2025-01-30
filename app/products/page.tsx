import React from "react";
import Link from "next/link";
import ProductList from "../../components/ProductList";

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

      {/* Page-specific content goes here */}
      <div className="max-w-7xl mx-auto">
        <ProductList />
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="text-green-700 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
