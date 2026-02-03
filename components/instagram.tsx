"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Instagram = () => {
  const reels = [
    {
      thumbnail: "/reel/reel3.mp4",
      title: "Lunch with Speaker",
      views: "1.1M",
      link: "https://www.instagram.com/p/DQRFdJMk8LQ/",
    },
    {
      thumbnail: "/reel/reel2.mp4",
      title: "Koenigsegg 46 Cr Car",
      views: "279K",
      link: "https://www.instagram.com/p/DRBa_Eqk0Mn/",
    },
    {
      thumbnail: "/reel/reel1.mp4",
      title: "Kartik Aryan and Ananya Pandey",
      views: "629K",
      link: "https://www.instagram.com/p/DRmdNgAE5kP/",
    },
  ];

  return (
    <section className="w-full bg-linear-to-b from-slate-900 to-slate-800 py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Instagram Reels
          </motion.h2>
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Check out our latest reels and stories
          </motion.p>
        </motion.div>

        {/* Reels Container */}
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {reels.map((reel, index) => (
            <motion.a
              key={index}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-72 h-125 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Reel Image */}
              <div className="relative w-full h-full">
                <video
                  src={reel.thumbnail}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  autoPlay
                  loop
                  muted
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-gray-800 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div> */}

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{reel.title}</h3>
                  <p className="text-sm text-gray-200 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    {reel.views} views
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.836 78.836 0 01-.023 2.188l-.006.194c-.008.225-.018.446-.03.712-.05 1.065-.22 1.79-.466 2.428-.254.66-.598 1.216-1.153 1.772-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.427.465l-.712.03-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.836 78.836 0 01-2.189-.023l-.194-.006a63.462 63.462 0 01-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.896 4.896 0 01-1.771-1.153 4.904 4.904 0 01-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712-.005-.194A79.053 79.053 0 012 13.028v-2.056a78.836 78.836 0 01.022-2.188l.007-.194c.008-.225.018-.446.03-.712.05-1.065.218-1.79.465-2.428A4.88 4.88 0 013.68 3.678a4.897 4.897 0 011.77-1.153c.638-.247 1.363-.415 2.428-.465l.712-.03.194-.006A79.053 79.053 0 0110.972 2h2.056zm-1.028 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm5.25-3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                  </svg>
                </div>
                {/* <Image
                  src={reel.thumbnail}
                  fill
                  alt={reel.title}
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
              */}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
