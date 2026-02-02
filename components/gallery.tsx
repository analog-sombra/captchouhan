"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    {
      src: "/images/cap1.jpg",
      title: "Creative Content",
      description:
        "Capturing moments that inspire and engage audiences worldwide",
    },
    {
      src: "/images/cap2.jpg",
      title: "Live Sessions",
      description: "Bringing authentic conversations and experiences to life",
    },
    {
      src: "/images/cap3.jpg",
      title: "Studio Insights",
      description: "Behind the scenes of creating meaningful content",
    },
    {
      src: "/images/cap4.jpg",
      title: "Community Events",
      description: "Building connections through shared experiences",
    },
    {
      src: "/images/cap5.jpg",
      title: "Digital Presence",
      description: "Expanding reach across multiple platforms",
    },
    {
      src: "/images/cap6.jpg",
      title: "Creative Process",
      description: "Transforming ideas into impactful stories",
    },
    {
      src: "/images/cap7.jpg",
      title: "Storytelling",
      description: "Crafting narratives that resonate with audiences",
    },
    {
      src: "/images/cap8.jpg",
      title: "Collaborative Work",
      description: "Working together to create amazing content",
    },
    {
      src: "/images/cap9.jpg",
      title: "Innovation",
      description: "Pushing boundaries in content creation",
    },
    {
      src: "/images/cap10.jpg",
      title: "Engagement",
      description: "Building lasting relationships with the audience",
    },
    {
      src: "/images/cap11.jpg",
      title: "Production",
      description: "Professional content production and editing",
    },
    {
      src: "/images/cap12.jpg",
      title: "Live Events",
      description: "Capturing the energy of live performances",
    },
    {
      src: "/images/cap13.jpg",
      title: "Authenticity",
      description: "Staying true to the core message",
    },
    {
      src: "/images/cap14.jpg",
      title: "Growth",
      description: "Evolving and expanding creative horizons",
    },
    {
      src: "/images/cap15.jpg",
      title: "Impact",
      description: "Making a difference through content",
    },
    {
      src: "/images/cap16.jpg",
      title: "Vision",
      description: "Creating content with purpose and direction",
    },
    {
      src: "/images/cap17.jpg",
      title: "Excellence",
      description: "Striving for the highest quality in every piece",
    },
  ];

  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <section className="w-full bg-[#f8f5e4] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A visual journey through our creative moments and milestones
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 mx-auto">
          {displayedImages.map((item, index) => (
            <div key={index} className="group space-y-3">
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  fill
                  alt={item.title}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
