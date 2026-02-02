import Image from "next/image";

const Expertise = () => {
  return (
    <section className="w-full bg-[#f8f5e4] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            My Expertise
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into engaging content through creative
            storytelling, live streaming, and digital innovation. With years of
            experience in content creation and audience engagement, I bring
            authenticity and passion to every project.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Side - Main Image */}
          <div className="relative h-125 rounded-3xl overflow-hidden">
            <Image
              src="/images/about2.jpg"
              fill
              alt="Expertise"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Right Side - Content & Secondary Image */}
          <div className="space-y-8">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Creating Impact Through Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Specializing in multi-platform content creation, live streaming,
                and digital storytelling that resonates with audiences and
                builds meaningful connections.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                From concept to execution, I focus on delivering high-quality
                content that not only entertains but also inspires and educates,
                creating lasting impressions in the digital space.
              </p>
            </div>

            {/* Secondary Image */}
            <div className="relative h-64 rounded-3xl overflow-hidden">
              <Image
                src="/images/about1.jpg"
                fill
                alt="Behind the scenes"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Stats or Highlights */}
        <div className="flex flex-wrap justify-center gap-12 mt-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-800 mb-2">500+</div>
            <p className="text-gray-700 text-lg">Content Created</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-800 mb-2">1M+</div>
            <p className="text-gray-700 text-lg">Total Reach</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-800 mb-2">10+</div>
            <p className="text-gray-700 text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
