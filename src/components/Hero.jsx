import React from "react";
import asset from "../assets/assets";
import TrustedBy from "./TrustedBy";
import Title from "./Title";

const Hero = () => {
  return (
    
    <div
      id="hero"
      className="
        relative
        flex flex-col items-center gap-6
        py-20 px-4 sm:px-12 lg:px-24 xl:px-40
        text-center
        w-full
        overflow-hidden

        bg-white
        dark:bg-[#0b0f19]

        text-gray-700
        dark:text-white

        transition-colors
        duration-500
      "
    >

      {/* TRUSTED */}
      <div
        className="
          inline-flex
          items-center
          gap-2

          border
          border-gray-300
          dark:border-gray-700

          bg-white/70
          dark:bg-white/5

          p-1.5
          pr-4
          rounded-full

          shadow-sm
          dark:shadow-none

          transition-all
          duration-500
        "
      >
        <img
          className="w-20"
          src={asset.group_profile}
          alt=""
        />

        <p
          className="
            text-xs
            font-medium
            text-gray-600
            dark:text-gray-300
          "
        >
          Trusted by 10k+ people
        </p>
      </div>


      {/* TITLE */}
      <div
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-[72px]
          2xl:text-[80px]

          font-medium
          leading-tight
          xl:leading-[1.1]

          max-w-5xl
          mx-auto

          text-gray-800
          dark:text-white

          transition-colors
          duration-500
        "
      >
        Turning imagination into{" "}
        
        <span
          className="
            bg-linear-to-r
            from-primary
            to-[#4d8cea]
            bg-clip-text
            text-transparent
          "
        >
          digital
        </span>{" "}
        
        impact.
      </div>


      {/* DESCRIPTION */}
      <div
        className="
          text-sm
          sm:text-lg

          font-medium

          text-gray-500
          dark:text-gray-400

          max-w-2xl
          px-2
          pb-3

          transition-colors
          duration-500
        "
      >
        Creating meaningful connections and turning big ideas into
        interactive digital experiences.
      </div>


      {/* HERO IMAGE */}
      <div className="relative w-full flex justify-center">

        <img
          src={asset.hero_img}
          alt=""
          className="
            w-full
            max-w-6xl
            relative
            z-10
          "
        />


        {/* BACKGROUND DECORATION - LIGHT ONLY */}
        <img
          src={asset.bgImage1}
          alt=""
          className="
            absolute

            -top-40
            -right-40

            sm:-top-100
            sm:-right-70

            -z-0

            dark:hidden
          "
        />

      </div>

     


    </div>
  );
};

export default Hero;