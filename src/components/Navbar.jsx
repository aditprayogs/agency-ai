import { useState, useEffect } from "react";
import asset from "../assets/assets";
import ThemeToogle from "./ThemeToogle";
import { easeOut, motion } from 'motion/react';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

 
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    
    <motion.div
    initial={{opacity: 0, y:-50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease: easeOut}}
    
      className="
        flex justify-between items-center
        px-4 sm:px-12 lg:px-24 xl:px-40
        py-4
        sticky top-0
        z-50
        backdrop-blur-xl
        font-medium

        bg-white/80
        dark:bg-[#0b0f19]/85

        border-b
        border-gray-200/70
        dark:border-white/10

        transition-colors
        duration-500
      "
    >
      {/* LOGO */}
      <img
        src={theme === "dark" ? asset.logo_dark : asset.logo}
        alt="Logo"
        className="w-32"
      />

      

      {/* MENU */}
      <div
        className={`
          text-gray-700
          dark:text-white
          sm:text-sm

          max-sm:w-60
          max-sm:pl-10
          max-sm:fixed
          max-sm:top-0
          max-sm:bottom-0
          max-sm:right-0
          max-sm:min-h-screen
          max-sm:h-full
          max-sm:flex-col
          max-sm:bg-white
          max-sm:text-gray-700
          dark:max-sm:bg-[#0b0f19]
          dark:max-sm:text-white
          max-sm:pt-20

          flex
          sm:items-center
          gap-5

          transition-all
          duration-500

          ${sidebarOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <img
          src={asset.close_icon}
          alt="Close"
          className="absolute right-5 top-5 w-6 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          href="#"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Home
        </a>

        <a
          href="#services"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Services
        </a>

        <a
          href="#our-work"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Our Work
        </a>

        <a
          href="#contact-us"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      


      {/* CONNECT BUTTON */}
      <div className="flex items-center gap-4">

      {/* BUTTON DARK */}
      <ThemeToogle
        theme={theme}
        setTheme={setTheme}
      />
      
        <a
          href="#contact-us"
          className="
            text-sm
            max-sm:hidden
            flex
            items-center
            gap-2
            bg-primary
            text-white
            px-6
            py-2
            rounded-full
            cursor-pointer
            hover:scale-103
            transition-all
          "
        >
          Connect
          <img
            src={asset.arrow_icon}
            width={14}
            alt="Arrow"
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <img
          src={
            theme === "dark"
              ? asset.menu_icon_dark
              : asset.menu_icon
          }
          alt="Menu"
          className="w-6 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </motion.div>
  );
};

export default Navbar;