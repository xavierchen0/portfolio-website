import { TypeOutline } from "lucide-react";
import DecryptedText from "./TextAnimations/DecryptedText/DecryptedText.jsx";
import React, { useState, useEffect } from "react";

const greetings = [
  { lang: "EN", text: "Hello!" },
  { lang: "ES", text: "Hola!" },
  { lang: "FR", text: "Bonjour!" },
  { lang: "DE", text: "Hallo!" },
  { lang: "IT", text: "Ciao!" },
  { lang: "PT", text: "Olá!" },
  { lang: "JA", text: "こんにちは!" },
  { lang: "KO", text: "안녕하세요!" },
  { lang: "ZH", text: "你好!" },
  { lang: "RU", text: "Привет!" },
];

export default function HeroSection() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [sparks, setSparks] = useState([]);

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

  // Generate sparks on profile pic click
  const generateSparks = () => {
    const newSparks = Array.from({ length: 8 });
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Mobile: stack vertically; Desktop: side-by-side */}
        <div className="item-center grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Profile Image - Mobile: Top; Desktop: left */}
          <div className="order-1 flex justify-center md:justify-start">
            <div className="ring-rosepinefoam h-48 w-48 rounded-full ring-4 md:h-80 md:w-80">
              <img src="/ProfilePic1.jpg" className="rounded-full" />
            </div>
          </div>

          {/* Content - Mobile: Bottom, Desktop right */}
          <div className="order-2 text-center md:text-right">
            {/* Greeting with typewriter effect */}
            <div className="text-lg md:text-xl">
              <span className="inline-flex items-center">
                {displayText}
                <span
                  className={`bg-rosepinefoam mx-1 h-6 w-0.5 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                ></span>
              </span>
              <span className="opacity-50">
                [{greetings[currentGreeting].lang}]
              </span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
