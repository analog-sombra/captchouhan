"use client";

import Image from "next/image";

const FeaturedOn = () => {
  const leftImages = [
    { src: "/images/channels/1.png", className: "top-10 left-40 w-32 h-32" },
    { src: "/images/channels/2.png", className: "top-30 left-1/5 w-20 h-20" },
    {
      src: "/images/channels/3.jpg",
      className: "bottom-40 left-1/4 w-24 h-24",
    },
    { src: "/images/channels/4.png", className: "bottom-10 left-38 w-22 h-22" },
    { src: "/images/channels/5.png", className: "top-20 left-10 w-28 h-28" },
    { src: "/images/channels/6.png", className: "bottom-10 left-10 w-26 h-26" },
  ];

  const rightImages = [
    { src: "/images/channels/7.png", className: "top-10 right-50 w-32 h-32" },
    { src: "/images/channels/8.png", className: "top-50 right-1/4 w-20 h-20" },
    {
      src: "/images/channels/9.jpg",
      className: "bottom-40 right-40 w-24 h-24",
    },
    {
      src: "/images/channels/10.png",
      className: "bottom-10 right-1/5 w-22 h-22",
    },
    { src: "/images/channels/11.png", className: "top-20 right-10 w-28 h-28" },
    {
      src: "/images/channels/12.png",
      className: "bottom-20 right-20 w-26 h-26",
    },
    { src: "/images/channels/13.png", className: "top-40 right-10 w-24 h-24" },
  ];

  const allImages = [...leftImages, ...rightImages];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured On</h2>
          <p className="text-xl text-gray-700 mb-3">
            Making a lasting impact, together.
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here&apos;s a collection of sharables that you can send to people
            and connect with them on this journey of nourishing mind and
            enriching lives.
          </p>
        </div>

        {/* Desktop Layout - Floating Images */}
        <div className="hidden lg:block relative min-h-150">
          <div className="relative flex items-center justify-center">
            {/* Left Floating Images */}
            {leftImages.map((img, index) => (
              <div
                key={`left-${index}`}
                className={`absolute ${img.className} opacity-60 hover:opacity-100 transition-opacity duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <Image
                  src={img.src}
                  width={100}
                  height={100}
                  alt={`Featured logo ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Main Person Image */}
            <div className="relative w-60 h-120 z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                fill
                alt="Featured Person"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Right Floating Images */}
            {rightImages.map((img, index) => (
              <div
                key={`right-${index}`}
                className={`absolute ${img.className} opacity-60 hover:opacity-100 transition-opacity duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.5 + 0.25}s` }}
              >
                <Image
                  src={img.src}
                  width={100}
                  height={100}
                  alt={`Featured logo ${index + 5}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {/* Main Image */}
          <div className="relative w-full max-w-md mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/profile.jpg"
              fill
              alt="Featured Person"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Grid of All Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-4">
            {allImages.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={img.src}
                  fill
                  alt={`Featured logo ${index + 1}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturedOn;
