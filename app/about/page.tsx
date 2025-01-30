import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Store</h1>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-4">
          Welcome to our Simple Commerce platform – your go-to destination for
          quality products and seamless online shopping.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md">
            We are dedicated to providing an exceptional shopping experience
            with carefully curated products, user-friendly interface, and
            top-notch customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-2">Quality</h3>
            <p>We ensure every product meets high-quality standards.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-2">Variety</h3>
            <p>Explore a wide range of products to suit your needs.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="font-bold mb-2">Support</h3>
            <p>Our customer support team is always ready to help.</p>
          </div>
        </div>

        <p className="text-md mb-6">
          Built with modern web technologies, our platform offers a smooth and
          responsive shopping experience across all devices.
        </p>
      </div>

      <div className="text-center mt-8">
        <Link href="/" className="text-green-700 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
