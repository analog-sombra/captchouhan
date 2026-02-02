import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Darker Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/home_bg.jpg"
          fill
          alt="Hero Background"
          className="object-cover object-center"
          priority
        />
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-left lg:pl-8 pt-20 lg:pt-0">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Capt. M. Chouhan
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Content Creator • Live Streamer • Digital Storyteller
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
              Creating meaningful connections through authentic content and engaging stories
              that inspire, educate, and entertain audiences worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Side - Person Image */}
          <div className="relative h-full flex items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[80vh] lg:h-full">
              <Image
                src="/images/person.png"
                fill
                alt="Capt. M. Chouhan"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
