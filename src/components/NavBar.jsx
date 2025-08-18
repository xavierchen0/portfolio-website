import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// TODO: change sidebar to top bar
export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const isManualNavigate = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Intersection Observer to detect active sessions
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (isManualNavigate.current) return;

        if (entry.isIntersecting) {
          const correspondingItem = items.find(
            (item) => item.url === `#${entry.target.id}`,
          );
          if (correspondingItem) {
            setActiveTab(correspondingItem.name);
          }
        }
      });
    }, observerOptions);

    items.forEach((item) => {
      const sectionId = item.url.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleItemClick = (item) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    setActiveTab(item.name);
    isManualNavigate.current = true;

    const element = document.querySelector(item.url);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    clickTimeoutRef.current = setTimeout(() => {
      isManualNavigate.current = false;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // 1. create the outer navbar container for positioning and layout of the container
  // 2. create the inner navbar container for visual presentation of the navitems
  // 3. create each item's button
  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 transition-all duration-500 ease-out md:top-0 md:mt-6`}
    >
      <div
        className={`pointer-events-auto flex items-center gap-3 rounded-full bg-gray-100/5 px-3 py-1 shadow-lg backdrop-blur-lg transition-all duration-300 ease-out`}
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
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
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
                  <div className="bg-rosepinelove absolute -top-2 left-1/2 h-1 w-4 -translate-x-1/2 rounded-t-full">
                    <div className="bg-rosepinelove/20 absolute -top-2 -left-2 h-6 w-8 rounded-full blur-md">
                      <div className="bg-rosepinelove/20 absolute -top-1 h-6 w-8 rounded-full blur-md">
                        <div className="bg-rosepinelove/20 absolute top-0 h-4 w-4 rounded-full"></div>
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
