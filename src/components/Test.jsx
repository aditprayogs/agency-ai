import { useState } from "react";
import asset from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
        flex justify-between items-center
        px-4 sm:px-12 lg:px-24 xl:px-40
        py-4
        sticky top-0
        z-50
        backdrop-blur-xl
        font-medium
        bg-white/50
        dark:bg-gray-500/70
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
          max-sm:bg-primary
          max-sm:text-white
          max-sm:pt-20

          flex
          sm:items-center
          gap-5

          transition-all
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
          <img src={asset.arrow_icon} width={14} alt="Arrow" />
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
    </div>
  );
};

export default Navbar;



{/* SERVICES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="
              border
              border-gray-200
              dark:border-gray-700

              bg-white
              dark:bg-white/5

              rounded-2xl
              p-6

              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-10 h-10 mb-5"
            />

            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>