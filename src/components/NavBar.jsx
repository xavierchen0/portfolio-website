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
    const element = document.querySelector(item.url);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // 1. create the outer navbar container for positioning and layout of the container
  // 2. create the inner navbar container for visual presentation of the navitems
  // 3. create each item's button
  return (
    <div
      className={`fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 transition-all duration-500 ease-out md:top-0 md:mt-6 ${
        isScrolled
          ? "ml-9 md:top-1/2 md:left-6 md:-translate-y-1/2 md:flex-col"
          : "md:top-0 md:mt-6"
      }`}
    >
      <div
        className={`flex items-center gap-3 rounded-full bg-gray-100/5 px-3 py-1 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out ${
          isScrolled ? "md:flex-col md:gap-3 md:px-1 md:py-3" : ""
        }`}
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
              className={`text-foreground/80 hover:text-rosepinelove relative cursor-pointer rounded-full px-3 py-2 text-sm font-semibold ${
                isActive ? "bg-rosepinehighlight-high" : ""
              }`}
            >
              <span className={`hidden ${isScrolled ? "" : "md:inline"} `}>
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
                    bounce: 0.2,
                    duration: 0.1,
                  }}
                >
                  <div
                    className={`bg-rosepinelove absolute -top-2 left-1/2 h-1 w-4 -translate-x-1/2 rounded-t-full ${
                      isScrolled
                        ? "md:top-1/2 md:-left-2 md:h-4 md:w-1 md:-translate-y-1/2 md:rounded-full"
                        : ""
                    }`}
                  >
                    <div
                      className={`bg-rosepinelove/20 absolute -top-2 -left-2 h-6 w-8 rounded-full blur-md ${
                        isScrolled ? "md:h-8 md:w-6" : ""
                      }`}
                    >
                      <div
                        className={`bg-rosepinelove/20 absolute -top-1 h-6 w-8 rounded-full blur-md ${
                          isScrolled ? "md:-left-1 md:h-8 md:w-6" : ""
                        }`}
                      >
                        <div
                          className={`bg-rosepinelove/20 absolute top-0 h-4 w-4 rounded-full ${
                            isScrolled ? "md:left-0" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
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
