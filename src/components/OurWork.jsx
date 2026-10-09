import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile App Marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage, and inspire.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard Manajemen",
      description:
        "We help you execute your plan and deliver measurable results.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness App Promotion",
      description:
        "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="our-work"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="
        flex flex-col items-center gap-7
        px-4 sm:px-12 xl:px-40
        pt-30
        bg-white dark:bg-[#0b0f19]
        text-gray-700 dark:text-white
        transition-colors duration-500
      "
    >
      <Title
        title="Our Latest Work"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            key={work.title}
            variants={itemVariants}
            className="
              group cursor-pointer
              transition-transform duration-500
              hover:-translate-y-2
            "
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="
                  w-full aspect-[4/3] object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <h3 className="mt-3 mb-2 text-lg font-semibold">
              {work.title}
            </h3>

            <p className="text-sm opacity-70">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurWork;