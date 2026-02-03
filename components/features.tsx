"use client";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: "📝",
      title: "Content Creation",
      description:
        "Create and manage your content effortlessly with our intuitive tools designed for creators.",
    },
    {
      icon: "📡",
      title: "Live Streaming",
      description:
        "Go live and connect with your audience in real-time with seamless streaming capabilities.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Track your performance and gain insights with comprehensive analytics and reporting tools.",
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
          Features
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Empowering creators with tools and insights to grow and connect
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center space-y-4 hover:transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
            >
              <motion.div 
                className="text-6xl mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: "spring", stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-800">
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
