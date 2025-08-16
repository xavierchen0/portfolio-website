import DecryptedText from "./TextAnimations/DecryptedText/DecryptedText.jsx";
import React, { useState, useEffect } from "react";
import PixelTransitionProfile from "./PixelTransitionProfile.jsx";
import SlideUpTextAnimation from "./SlideUpTextAnimation.jsx";

const greetings = [
  { lang: "EN", text: "Hello!" },
  { lang: "ZH", text: "你好!" },
  { lang: "ES", text: "Hola!" },
  { lang: "JA", text: "こんにちは!" },
  { lang: "FR", text: "Bonjour!" },
  { lang: "KO", text: "안녕하세요!" },
  { lang: "DE", text: "Hallo!" },
  { lang: "RU", text: "Привет!" },
  { lang: "IT", text: "Ciao!" },
  { lang: "PT", text: "Olá!" },
];

export default function HeroSection({ id }) {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Typing and deleting text
  useEffect(() => {
    const targetText = greetings[currentGreeting].text;
    let currentIndex = isTyping ? 0 : displayText.length - 1;

    // Two states: typing Hello, deleting Hello
    if (isTyping) {
      // typing Hello
      const typingInterval = setInterval(() => {
        if (currentIndex < targetText.length) {
          // moving through the current Hello
          setDisplayText(targetText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // finished with the current Hello
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      }, 150);

      // cleanup
      return () => clearInterval(typingInterval);
    } else {
      // deleting Hello
      const deletingInterval = setInterval(() => {
        if (currentIndex > 0) {
          // deleting the current Hello
          setDisplayText(targetText.slice(0, currentIndex));
          currentIndex--;
        } else {
          // finished with deleting the current Hello
          clearInterval(deletingInterval);
          setCurrentGreeting((prev) => (prev + 1) % greetings.length);
          setIsTyping(true);
        }
      }, 100);

      // cleanup
      return () => clearInterval(deletingInterval);
    }
  }, [currentGreeting, isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // cleanup
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id={id}
      className="flex min-h-screen items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-6xl md:px-16">
        {/* Mobile: stack vertically; Desktop: side-by-side */}
        <div className="flex flex-col items-center md:flex-row md:gap-20">
          {/* Profile Image - Mobile: Top; Desktop: left */}
          <div className="order-1 flex-shrink-0">
            <PixelTransitionProfile pixelColor="#eb6f92" />
          </div>

          {/* Content - Mobile: Bottom, Desktop right */}
          <div className="order-2 text-center md:flex-1">
            {/* Greeting with typewriter effect */}
            <div className="mt-6 text-lg md:text-xl">
              <span className="inline-flex">
                {displayText}
                <span
                  className={`bg-rosepinefoam mx-1 h-6 w-0.5 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                ></span>
              </span>
              <span className="opacity-50">
                [{greetings[currentGreeting].lang}]
              </span>

              {/* Introduction */}
              <h1 className="text-2xl md:text-3xl">
                I'm{" "}
                <span className="text-rosepinelove font-bold">
                  <DecryptedText
                    text="Xavier Chen"
                    animateOn="view"
                    revealDirection="start"
                    speed={150}
                  />
                </span>
              </h1>

              {/* Brief Description */}

              <SlideUpTextAnimation className="mt-6" trigger="scroll">
                <p>
                  I'm a{" "}
                  <span className="text-rosepinefoam">
                    Quantitative Finance
                  </span>{" "}
                  student passionate about{" "}
                  <span className="text-rosepinefoam">Computer Science</span>,
                  with{" "}
                  <span className="text-rosepinefoam">
                    ML/AI internship experiences
                  </span>{" "}
                  and an unhealthy obsession with{" "}
                  <code className="text-rosepinepine">Neovim</code>.
                </p>
              </SlideUpTextAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
