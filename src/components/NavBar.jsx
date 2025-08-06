import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add Event listener to detect scroll when it goes past viewport
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > window.innerHeight);
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveTab(item.name);
    // TODO: add functionality to jump to section
  };

  // 1. create the outer navbar container for positioning and layout of the container
  // 2. create the inner navbar container for visual presentation of the navitems
  // 3. create each item's button
  return (
    // TODO: Fix scaling for mobile
    <div
      className={`fixed ${
        isScrolled
          ? "md:top-1/2 md:left-6 md:flex md:-translate-y-1/2 md:flex-col"
          : "bottom-0 left-1/2 z-50 -translate-x-1/2 sm:top-0"
      } mb-6 transition-all duration-500 sm:pt-6 ease-out${className || ""}`}
    >
      <div
        className={`${isScrolled ? "sm:flex-col sm:px-2 sm:py-2" : "gap-3 px-3 py-2"} border-border flex items-center rounded-full border bg-gray-100/5 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out`}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={`${isScrolled ? "sm:px-3 sm:py-3" : "px-6 py-2"} text-foreground/80 hover:text-rosepinelove relative cursor-pointer rounded-full text-sm font-semibold transition-all transition-colors duration-300 ease-out ${isActive ? "bg-rosepinehighlight-high" : ""} `}
            >
              <span className={`hidden ${isScrolled ? "" : "md:inline"}`}>
                {item.name}
              </span>
              <span className={`${isScrolled ? "" : "md:hidden"}`}>
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="navItem"
                  className="bg-rosepinehighlight-high/20 absolute inset-0 -z-10 w-full rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                  }}
                >
                  <div
                    className={`${isScrolled ? "sm:-left-4 sm:h-8 sm:w-1 sm:translate-y-1 sm:rounded-l-full" : "-top-4 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"} bg-rosepinelove absolute`}
                  >
                    <div
                      className={`${isScrolled ? "sm: w-6 sm:h-12" : "w-12 sm:h-6"} bg-rosepinelove/20 absolute -top-2 -left-2 rounded-full blur-md`}
                    />
                    <div
                      className={`${isScrolled ? "sm:-left-1 sm:h-8 sm:w-6" : "-top-1 h-6 w-8"} bg-rosepinelove/20 absolute rounded-full blur-md`}
                    />
                    <div
                      className={`${isScrolled ? "sm:left-0" : "top-0"} bg-rosepinelove/20 absolute h-4 w-4 rounded-full blur-md`}
                    />
                  </div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
