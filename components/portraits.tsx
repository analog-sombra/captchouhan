"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Portraits = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portraits = [
    {
      src: "/images/long1.jpg",
      title: "Creative Vision",
      description: "Exploring the Sky",
      category: "Photography",
    },
    {
      src: "/images/long2.jpg",
      title: "Shri. Praful K. Patel",
      description: "Administrator of DNH and Daman and Diu and Lakshwadeep",
      category: "Portrait",
    },
    {
      src: "/images/long3.jpg",
      title: "Shri. Vikram Oberoi",
      description: "CEO & MD , Oberoi Group",
      category: "Lifestyle",
    },
    {
      src: "/images/long4.jpg",
      title: "Shri. Ritesh Agarwal",
      description: "CEO , OYO Hotels & Homes",
      category: "Photography",
    },
   
    {
      src: "/images/long6.jpg",
      title: "Mr.Kai Wegner",
      description: "Governing Mayor of Berlin.",
      category: "Lifestyle",
    },
    {
      src: "/images/long7.jpg",
      title: "Rajasthan Rising: Building India’s Premier Adventure Tourism Destination",
      description: "in the presence of Hon’ble Chief Minister Shri Bhajan Lal Sharma Ji",
      category: "Guest Speaker",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portrait Gallery
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A collection of portraits and moments that capture the essence of
            storytelling
          </motion.p>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex gap-6 animate-scroll-left hover:pause-animation">
          {/* Duplicate the array to create seamless loop */}
          {[...portraits, ...portraits].map((portrait, index) => (
            <div
              key={index}
              className="relative shrink-0 w-80 h-96 group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={portrait.src}
                  fill
                  alt={portrait.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Info Card - Always visible at bottom, expands on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
                  hoveredIndex === index
                    ? "bg-black/90 backdrop-blur-sm"
                    : "bg-transparent"
                }`}
              >
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {portrait.category}
                </span>
                <h3 className="text-xl font-bold mt-1 mb-2">
                  {portrait.title}
                </h3>

                {/* Description - Only shown on hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredIndex === index
                      ? "max-h-20 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {portrait.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Portraits;
