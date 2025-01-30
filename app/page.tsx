"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Promo Banner Data - Now just images
const promoBanners = [
  {
    id: 1,
    image: "/images/banner/banner1.svg",
  },
  {
    id: 2,
    image: "/images/banner/banner2.svg",
  },
  {
    id: 3,
    image: "/images/banner/banner3.svg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Promo Slider Section */}
      <section className="mb-12 px-4 md:px-8 lg:px-16 bg-gray-100 py-4">
        <Swiper
          effect="slide"
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          loop={true}
          modules={[Autoplay]}
          className="w-full max-w-6xl mx-auto h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          {promoBanners.map((banner) => (
            <SwiperSlide
              key={banner.id}
              className="transition-opacity duration-500 ease-in-out"
            >
              <Image
                src={banner.image}
                alt={`Banner ${banner.id}`}
                fill
                priority
                className="object-cover object-center brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Categories Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Featured Categories
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                id: 1,
                name: "Electronics",
                icon: "💻",
                link: "/products?category=electronics",
                bgColor: "bg-green-100",
                textColor: "text-green-800",
              },
              {
                id: 2,
                name: "Fashion",
                icon: "👗",
                link: "/products?category=fashion",
                bgColor: "bg-emerald-100",
                textColor: "text-emerald-800",
              },
              {
                id: 3,
                name: "Home",
                icon: "🏠",
                link: "/products?category=home",
                bgColor: "bg-lime-100",
                textColor: "text-lime-800",
              },
              {
                id: 4,
                name: "Sports",
                icon: "⚽",
                link: "/products?category=sports",
                bgColor: "bg-teal-100",
                textColor: "text-teal-800",
              },
            ].map((category) => (
              <Link
                key={category.id}
                href={category.link}
                className={`${category.bgColor} shadow-md rounded-lg p-4 text-center 
                  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                  flex flex-col items-center justify-center`}
              >
                <div className="text-4xl mb-2 opacity-80">{category.icon}</div>
                <h3 className={`text-sm font-semibold ${category.textColor}`}>
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                id: 1,
                name: "Wireless Headphones",
                price: 129.99,
                image: "/images/product/headphones.jpg",
                link: "/products/wireless-headphones",
              },
              {
                id: 2,
                name: "Smart Watch",
                price: 199.99,
                image: "/images/product/smartwatch.jpg",
                link: "/products/smart-watch",
              },
              {
                id: 3,
                name: "Speaker",
                price: 79.99,
                image: "/images/product/speaker.jpg",
                link: "/products/bluetooth-speaker",
              },
              {
                id: 4,
                name: "Fitness Tracker",
                price: 89.99,
                image: "/images/product/fitness-tracker.jpg",
                link: "/products/fitness-tracker",
              },
            ].map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="bg-white shadow-md rounded-lg overflow-hidden 
                  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="absolute top-0 left-0 object-cover 
                      brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold truncate mb-1">
                    {product.name}
                  </h3>
                  <p className="text-base font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-green-600 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Deals
          </h2>
          <p className="text-base mb-6">
            Subscribe to our newsletter and get the latest offers!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full max-w-md border-2 border-white 
                rounded-lg text-gray-800 focus:outline-none focus:ring-2 
                focus:ring-white transition-all duration-300"
            />
            <button
              className="bg-white text-green-600 px-6 py-3 
              rounded-lg hover:bg-green-50 transition-colors 
              font-semibold shadow-md hover:shadow-xl"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
