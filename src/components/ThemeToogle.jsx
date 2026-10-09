import React from "react";
import asset from "../assets/assets";

const ThemeToogle = ({ theme, setTheme }) => {
  return (
    <>
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={asset.sun_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt=""
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={asset.moon_icon}
          className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer"
          alt=""
        />
      )}
    </>
  );
};

export default ThemeToogle;