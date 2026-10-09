import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl
      border border-gray-200 dark:border-gray-700
      shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Efek cahaya mengikuti mouse */}
      <div
        className={`pointer-events-none blur-2xl rounded-full
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        w-75 h-75 absolute z-0 transition-opacity duration-500
        mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* Konten kartu */}
      <div className="flex items-center gap-6 sm:gap-10 p-6 sm:p-8
      rounded-[10px] bg-white dark:bg-gray-900 relative z-10">
        <div className="shrink-0 bg-gray-100 dark:bg-gray-700 rounded-full">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 sm:w-24 sm:h-24 object-contain
            bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;