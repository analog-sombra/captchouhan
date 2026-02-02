import Image from "next/image";

const Expertise = () => {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with modern styling */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            About Me
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Stories That
            <span className="block text-blue-600">Inspire & Engage</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming ideas into compelling content through creative
            storytelling, live streaming, and digital innovation.
          </p>
        </div>

        {/* Content Layout - Side by Side with overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          {/* Left Side - Main Image with frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about2.jpg"
                  fill
                  alt="Expertise"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content Card with overlap */}
          <div className="lg:col-span-5 lg:-ml-12 z-10">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Creating Impact Through Content
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Specializing in multi-platform content creation, live streaming,
                  and digital storytelling that resonates with audiences and
                  builds meaningful connections.
                </p>
                <p>
                  From concept to execution, delivering high-quality content
                  that entertains, inspires, and educates.
                </p>
              </div>
              
              {/* Mini image */}
              <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/images/about1.jpg"
                  fill
                  alt="Behind the scenes"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats with modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center border border-blue-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700 font-medium">Content Created</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center border border-purple-100">
            <div className="text-5xl font-bold text-purple-600 mb-2">1M+</div>
            <p className="text-gray-700 font-medium">Total Reach</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center border border-green-100">
            <div className="text-5xl font-bold text-green-600 mb-2">10+</div>
            <p className="text-gray-700 font-medium">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
