import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

const HomePage = () => {
  const [spotlightPos1, setSpotlightPos1] = useState({ x: 30, y: 70 });
  const [spotlightPos2, setSpotlightPos2] = useState({ x: 60, y: 80 });
  
  useEffect(() => {
    const animateSpotlights = () => {
      const intervalId1 = setInterval(() => {
        setSpotlightPos1({
          x: 10 + Math.random() * 35,
          y: Math.random() * 30, 
        });
      }, 2000);
      
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
  
  return (
    <div className="relative">
      <div className="relative h-screen w-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/bg-vortex.png')" }}>
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <img src="/title.png" style={{ width: "40%", height: "auto", margin: "10px auto" }} />
          <p className="text-xl font-imenglish text-yellow-100 mb-8 max-w-lg mx-auto">28-29 March '25</p>
        </div>

        <div className="carousel absolute bottom-2 w-[35vw] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="absolute bottom-[-60%] w-[30vw] bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
          <div className="relative flex justify-center items-center">
            <motion.img
              src="/caricatures/1.png"
              className="carousel-item"
              style={{ width: '45%', height: 'auto', marginBottom: '-3rem' }}
              animate={{ scale: [0.9, 0.96, 0.9] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.img
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: 'auto', height: '100%', marginBottom: '6rem' }}
              animate={{ scale: [1.1, 1.18, 1.1] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 }}
            />
            <motion.img
              src="/caricatures/5.png"
              className="carousel-item"
              style={{ width: '40%', height: 'auto', marginBottom: '-2rem' }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>
        </div>
      
        <Hero />
      </div>
      
      <div className="h-screen bg-yellow-600 text-black flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('image.png')" }}>
        <div className="text-center px-6 bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-xl">
          <h1 className="text-5xl font-bold mb-6 text-white">About</h1>
          <p className="text-xl max-w-xl mx-auto text-white">
            Get ready for an electrifying experience at Taarangana, the most awaited cultural and technical extravaganza of the year! Immerse yourself in a whirlwind of music, dance, art, and innovation as we bring together students from across the country. From thrilling competitions and mesmerizing performances to insightful workshops and celebrity appearances, this fest is packed with excitement! Unleash your creativity, showcase your talent, and make unforgettable memories. Join us as we celebrate passion, culture, and innovation like never before!
          </p>
        </div>
      </div>
      
      <div className="h-screen bg-black text-white flex justify-center items-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold mb-6">Theme</h1>
          <p>Explain about the theme, random quote, etc.</p>
        </div>
      </div>
      
      <div className="h-screen"></div>
    </div>
  );
};

export default HomePage;
