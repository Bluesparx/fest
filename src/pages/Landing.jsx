import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";

const aboutText =
  "Immerse yourself in a whirlwind of music, dance, art, and innovation as we bring together students from across the country. From thrilling competitions and mesmerizing performances to insightful workshops and celebrity appearances, this fest is packed with excitement! \n Unleash your creativity, showcase your talent, and make unforgettable memories. Join us as we celebrate passion, culture, and innovation like never before!";
  const Typewriter = ({ text, speed = 50 }) => {
    const [visibleCharCount, setVisibleCharCount] = useState(0);
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setVisibleCharCount((prev) => prev + 1);
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);
  
    // Split the text by newline characters
    const paragraphs = text.split("\n");
    let charCounter = 0;
  
    return (
      <span className="relative font-playful">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <React.Fragment key={paragraphIndex}>
            {paragraph.split("").map((char, charIndex) => {
              const currentCharIndex = charCounter;
              charCounter++;
              return (
                <span
                  key={`${paragraphIndex}-${charIndex}`}
                  className={`relative ${currentCharIndex < visibleCharCount ? "text-white" : "text-gray-500/30"}`}
                >
                  {char}
                </span>
              );
            })}
            {/* Add break after each paragraph except the last one */}
            {paragraphIndex < paragraphs.length - 1 && (
              <>
                <br />
                {/* Count the newline character in the typing animation */}
                <span className="hidden">{charCounter++}</span>
              </>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  };

const HomePage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div
        className="relative h-screen w-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-vortex.png')" }}
      >
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <img
            src="/title.png"
            alt="Title"
            className="w-[40%] h-auto mb-4"
          />
          <p className="text-xl font-imenglish text-gray-300 mb-8 max-w-lg mx-auto">
            28-29 March '25
          </p>
        </div>

        <div className="carousel absolute bottom-2 w-[35vw] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="absolute bottom-[-60%] w-[30vw] bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
          <div className="relative flex justify-center items-center">
            <motion.img
              src="/caricatures/1.png"
              className="carousel-item"
              style={{ width: "45%", height: "auto", marginBottom: "-3rem" }}
              animate={{ scale: [0.9, 0.96, 0.9] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: "auto", height: "100%", marginBottom: "6rem" }}
              animate={{ scale: [1.1, 1.18, 1.1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
            <motion.img
              src="/caricatures/5.png"
              className="carousel-item"
              style={{ width: "40%", height: "auto", marginBottom: "-2rem" }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <Hero />
      </div>

      <div
        className="h-[78vh] bg-yellow-600 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('image.png')" }}
      >
        <div className="text-center px-16 bg-black/40 p-8 rounded-lg backdrop-blur-xl">
          <h1 className="text-5xl font-bold mb-6 text-white font-imenglish">
            IGDTUW's Cultural Fest
          </h1>
          <p className="text-xl max-w-xl mx-auto text-white">
            <Typewriter text={aboutText} speed={30} />
          </p>
        </div>
      </div>

      {/* Performances Section */}
      <div className="bg-black text-white pt-16 pb-10">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold mb-6 font-imenglish">
            Unforgettable Performances
          </h1>
          <FocusCardsDemo />
        </div>
      </div>

      <div className="h-screen"></div>
    </div>
  );
};

export default HomePage;
