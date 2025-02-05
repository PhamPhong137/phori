import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Carousel from "react-bootstrap/Carousel";

const banners = [
  "https://gaubongonline.vn/wp-content/uploads/2023/07/thang-7-blackpink_Banner.jpg",
  "https://gaubongonline.com.vn/wp-content/uploads/2021/06/gaubong5.png",
  "https://sanxuatthubonghoangthu.vn/wp-content/uploads/2024/11/cover_.png",
];

export default function HeroSection() {
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Carousel
            className="w-full md:w-2/3 relative h-[400px]  bg-slate-800"
            interval={2000}
            fade
          >
            {banners.map((banner, index) => (
              <Carousel.Item key={index} className="w-full">
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className="object-cover w-full rounded-lg"
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative h-[180px]">
                <img
                  src={`/placeholder.svg?height=180&width=180&text=Product+${
                    index + 1
                  }`}
                  alt={`Product ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
