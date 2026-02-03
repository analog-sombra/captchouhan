"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    {
      src: "/images/cap12.jpg",
      title: "Lok Shabha Speaker Meeting",
      description:
        "Hon. Lok Sabha Speaker Shri Om Birla ji invited me for Lunch to discuss development of  tourism in his hometown.",
    },
    {
      src: "/images/cap8.jpg",
      title: "Haryana CM Flight",
      description:
        "Had the privilege of flying Hon'ble CM Shri. Manohar Lal Khattar  and Hon. Speaker of Legislative Assembly Haryana Shri. Gian Chand Gupta.",
    },
    {
      src: "/images/cap7.jpg",
      title: "Telangana Hot Air Balloon Festival",
      description:
        "With Chief Secretary of Telangana Shri. Ramkrishna Rao and DG Fire Telangana. Reviewing test flight of Telangana international hot air balloon festival.",
    },
    {
      src: "/images/cap13.jpg",
      title: "Rajasthan Rising Speaker",
      description:
        "Honoured to be invited as a speaker at “Rajasthan Rising: Building India’s Premier Adventure Tourism Destination” in the presence of Hon’ble Chief Minister Shri Bhajan Lal Sharma Ji",
    },
    {
      src: "/images/cap14.jpg",
      title: "Tourism Development",
      description: "Honored to share my views on how can tourism be promoted",
    },
    {
      src: "/images/cap5.jpg",
      title: "India Delegation at ITB Berlin",
      description:
        "H.E Ambassador of India, Tourism Ministerof Andhra Pradesh & Chief Secretaries",
    },
    {
      src: "/images/cap15.jpg",
      title: "Shri. Umar Abdullah",
      description: "Chief Minister - J & K,India",
    },
    {
      src: "/images/cap9.jpg",
      title: "Shri. Gajendra Singh Shekhawat",
      description: "Minister of Culture & Tourism,India.",
    },

    {
      src: "/images/cap6.jpg",
      title: "Shri.Bandaru Dattatreya",
      description: "Governor of Haryana",
    },
    {
      src: "/images/cap17.jpg",
      title: "Shri. Gajendra Singh Shekhawat",
      description: "Minister of Culture & Tourism,India.",
    },
    {
      src: "/images/cap16.jpg",
      title: "Leading Complex Missions",
      description: "Aligning teams, solving complexities, driving results",
    },
  ];

  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <section className="w-full bg-[#eef2ff] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gallery
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A visual journey through our creative moments and milestones
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-4/5 mx-auto">
          {displayedImages.map((item, index) => (
            <motion.div
              key={index}
              className="group space-y-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
