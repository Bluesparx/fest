import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Vortex } from "@/components/ui/vortex";
import Hero from "@/components/Hero";

const HomePage = () => {
  const [spotlightPos1, setSpotlightPos1] = useState({ x: 20, y: 30 });
  const [spotlightPos2, setSpotlightPos2] = useState({ x: 50, y: 40 });

  // Animate spotlights
  useEffect(() => {
    const animateSpotlights = () => {
      // Random movement for spotlight 1
      const intervalId1 = setInterval(() => {
        setSpotlightPos1({
          x: 10 + Math.random() * 35,
          y: 20 + Math.random() * 30,
        });
      }, 2000);

      // Random movement for spotlight 2
      const intervalId2 = setInterval(() => {
        setSpotlightPos2({
          x: 55 + Math.random() * 35,
          y: 20 + Math.random() * 30,
        });
      }, 2500);

      return () => {
        clearInterval(intervalId1);
        clearInterval(intervalId2);
      };
    };

    return animateSpotlights();
  }, []);

  return (
    <div>
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <Vortex
        backgroundColor="black"
        className="absolute inset-0 w-[100vw] h-screen z-0"
      >
        <div className="flex flex-col justify-center align-center h-full">
        <img src="/public/title.png" style={{width: "40%", height:"auto", margin:"10px auto "}}/>
        <p className="text-xl text-yellow-100 mb-8 max-w-lg mx-auto">
          28-29 March '25
        </p>

          <button className="px-6 py-3 mx-auto bg-transparent border-2 border-yellow-400 text-yellow-300 font-bold rounded-md hover:bg-yellow-900/30 transition-all transform hover:scale-105 shadow-lg">
            Explore Events
          </button>
        </div>
      </Vortex>

      {/* Spotlights */}
      <motion.div
        className="absolute w-64 h-64 rounded-full z-10 mix-blend-screen pointer-events-none"
        animate={{
          left: `${spotlightPos1.x}%`,
          top: `${spotlightPos1.y}%`,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,190,0.8) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full z-10 mix-blend-screen pointer-events-none"
        animate={{
          left: `${spotlightPos2.x}%`,
          top: `${spotlightPos2.y}%`,
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(255,255,190,0.8) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />

    </div>
    <Hero/>
    </div>
  );
};

export default HomePage;
