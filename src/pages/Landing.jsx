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
        <Vortex
          backgroundColor="black"
          className="absolute inset-0 w-[100vw] h-screen z-0"
        >
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <img src="/public/title.png" style={{ width: "40%", height: "auto", margin: "10px auto" }} />
            <p className="text-xl font-imenglish text-yellow-100 mb-8 max-w-lg mx-auto">28-29 March '25</p>
            
          </div>

          <div className="carousel absolute bottom-2 w-[35vw] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="absolute bottom-[-60%] w-[30vw]  bg-yellow-300 rounded-full opacity-10 blur-xl"></div>

          <div className="relative flex justify-center items-center">
            <motion.img
              src="/public/caricatures/1.png"
              className="carousel-item"
              style={{ width: '45%', height: 'auto',  marginBottom: '-3rem' }}
              animate={{ 
                scale: [0.9, 0.96, 0.9],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <motion.img
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: 'auto', height: '100%', marginBottom: '6rem' }}
              animate={{ 
                scale: [1.1, 1.18, 1.1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.7
              }}
            />
            
            <motion.img
              src="/public/caricatures/5.png"
              className="carousel-item"
              style={{ width: '40%', height: 'auto', marginBottom: '-2rem' }}
              animate={{ 
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
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