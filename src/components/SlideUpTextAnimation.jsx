import React, { useRef, useEffect, useState } from "react";

export default function SlideUpTextAnimation({
  children,
  delay = 0,
  duration = "duration-700",
  trigger = "mount", // allow for hover, scroll
  className = "",
  ...props
}) {
  const [isVisible, setIsVisible] = useState(trigger === "mount");
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  // Intersection observer for scroll trigger
  useEffect(() => {
    if (trigger === "scroll") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            setIsVisible(true);
            hasAnimatedRef.current = true;
          }
        },
        { threshold: 0.1 },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  // Mount trigger
  useEffect(() => {
    if (trigger === "mount") {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [trigger, delay]);

  // Hover trigger
  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsVisible(false);
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={`transform transition-all ${duration} ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
