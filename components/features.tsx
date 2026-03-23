"use client";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "📝",
      title: "Experiential Project Design",
      description:
        "Conceptualising large-scale tourism, hospitality, and public-engagement initiatives aligned with government and brand objectives.",
    },
    {
      icon: "🤝",
      title: "Government & Institutional Liaison",
      description:
        "Securing approvals, structuring partnerships, and navigating multi-agency coordination for complex, high-visibility projects.",
    },
    {
      icon: "📊",
      title: "Execution & Mission Delivery",
      description:
        "End-to-end leadership of time-critical projects involving international teams, public events, and multi-stakeholder environments.",
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Capabilities
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Delivering high-impact projects through government partnerships,
          strategic execution, and complex mission leadership
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4 hover:transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="text-6xl mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
