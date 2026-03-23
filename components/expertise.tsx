"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <section className="w-full bg-linear-to-b from-slate-50 to-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with modern styling */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Strategic Government Initiatives
            {/* <span className="block text-blue-600">Inspire & Engage</span> */}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I lead high-stakes programs at the intersection of public policy,
            regulatory complexity, and large-scale engagement. My expertise lies
            in conceptualizing and securing sovereign approvals for flagship
            projects, transforming government intent into globally visible,
            revenue-generating outcomes.
          </motion.p>
        </motion.div>

        {/* Content Layout - Side by Side with overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          {/* Left Side - Main Image with frame */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative h-125 lg:h-150">
              <motion.div
                className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/images/about2.jpg"
                  fill
                  alt="Expertise"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content Card with overlap */}
          <motion.div
            className="lg:col-span-5 lg:-ml-12 z-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                High-Complexity Execution
              </motion.h2>
              <motion.div
                className="space-y-4 text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p>
                  I am specialized in unlocking stalled projects by navigating
                  political and multi-agency friction. From structuring
                  Viability Gap Funding (VGF) to managing time-critical missions
                  involving international stakeholders, I excel in owning
                  institutional risk and delivering results where conventional
                  structures fail.
                </p>
              </motion.div>

              {/* Mini image */}
              <motion.div
                className="relative h-48 rounded-xl overflow-hidden mt-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/images/about1.jpg"
                  fill
                  alt="Behind the scenes"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats with modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center border border-blue-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700 font-medium">Content Created</p>
          </motion.div>
          <motion.div
            className="bg-linear-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center border border-purple-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-purple-600 mb-2">10M+</div>
            <p className="text-gray-700 font-medium">Total Reach</p>
          </motion.div>
          <motion.div
            className="bg-linear-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center border border-green-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-5xl font-bold text-green-600 mb-2">17+</div>
            <p className="text-gray-700 font-medium">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
