import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Vortex } from "@/components/ui/vortex";
import Hero from "@/components/Hero";

const HomePage = () => {
  const [spotlightPos1, setSpotlightPos1] = useState({ x: 30, y: 70 });
  const [spotlightPos2, setSpotlightPos2] = useState({ x: 60, y: 80 });
  
  useEffect(() => {
    const animateSpotlights = () => {
      // First
      const intervalId1 = setInterval(() => {
        setSpotlightPos1({
          x: 10 + Math.random() * 35,
          y: Math.random() * 30, 
        });
      }, 2000);
      
      // Second spotlight animation
      const intervalId2 = setInterval(() => {
        setSpotlightPos2({
          x: 55 + Math.random() * 35,
          y: Math.random() * 30, 
        });
      }, 2500);
      
      return () => {
        clearInterval(intervalId1);
        clearInterval(intervalId2);
      };
    };
    
    return animateSpotlights();
  }, []);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const section1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  
  return (
    <div className="relative">
      <motion.div 
        className="relative h-screen w-screen overflow-hidden bg-black sticky top-0 z-30"
        style={{ opacity: heroOpacity }}
      >
        <Vortex backgroundColor="black" className="absolute inset-0 w-[100vw] h-screen z-0">
      <div className="flex flex-col justify-center items-center h-full absolute bottom-0 top-10 w-full">
        <img src="/posters/truck.png" alt="Truck" className="h-[40rem] max-w-3xl" />
      </div>
    </Vortex>
        {/* First spotlight with initial animation from top */}
        <motion.div
          className="absolute w-64 h-64 rounded-full z-10 mix-blend-screen pointer-events-none"
          initial={{ left: `15%`, top: "-20%" }}
          animate={{ left: `${spotlightPos1.x}%`, top: `${spotlightPos1.y}%` }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,190,0.8) 0%, transparent 70%)",
            filter: "blur(4px)",
          }}
        />
        
        {/* Second spotlight with initial animation from top */}
        <motion.div
          className="absolute w-64 h-64 rounded-full z-10 mix-blend-screen pointer-events-none"
          initial={{ left: `40%`, top: "-20%" }}
          animate={{ left: `${spotlightPos2.x}%`, top: `${spotlightPos2.y}%` }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(255,255,190,0.8) 0%, transparent 70%)",
            filter: "blur(4px)",
          }}
        />
      <Hero />
      </motion.div>
      
      {/* First Content Section */}
      <motion.div 
        className="h-screen bg-yellow-600 text-black flex justify-center items-center sticky top-0 z-10"
        style={{ opacity: section1Opacity }}
      >
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-bold mb-6">sjj</h1>
          <p className="text-xl max-w-xl mx-auto">
            Experience 
          </p>
        </motion.div>
      </motion.div>
      
      {/* Second Content Section */}
      <motion.div 
        className="h-screen bg-green-600 text-white flex justify-center items-center sticky top-0 z-0"
        style={{ opacity: section2Opacity }}
      >
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-bold mb-6">theme </h1>
          <p>explain abt the theme random quote etc</p>
        </motion.div>
      </motion.div>
      
      <div className="h-screen"></div>
    </div>
  );
};

export default HomePage;