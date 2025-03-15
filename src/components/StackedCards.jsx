import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StackedCards = ({ events = [], layout = "slide" }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(events.length / 2));
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const calculateMaxHeight = () => {
      if (containerRef.current) {
        if (!isMobile) { 
          setMaxHeight(500); 
        } else {
          setMaxHeight(100); // Reduced height for mobile
        }
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    setTimeout(calculateMaxHeight, 100);
    window.addEventListener("resize", calculateMaxHeight);
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", calculateMaxHeight);
      window.removeEventListener("resize", checkMobile);
    };
  }, [events]);

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex(prevIndex => {
          return prevIndex === events.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [events.length]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        setActiveIndex(prevIndex => {
          return prevIndex === events.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000);
    }
  };

  const handleCardClick = (index) => {
    resetAutoScroll();
    if (index === activeIndex) {
      window.location.href = events[index].registerLink;
    } else {
      setActiveIndex(index);
    }
  };

  const calculateCardStyle = (index) => {
    const centerPoint = activeIndex;
    const position = index - centerPoint;
    
    let scale = 1;
    let zIndex = events.length - Math.abs(position);
    let translateX = 0;
    let rotate = 0;
    
    if (position !== 0) {
      scale = 0.9 - (0.1 * Math.abs(position));
      scale = Math.max(scale, 0.7);
      
      if (layout === "slide") {
        translateX = position * 25;
        rotate = 0;
      } else if (layout === "fanOut") {
        translateX = position * 30;
        rotate = position * 10;
      }
    }
    
    return {
      zIndex,
      transform: `translateX(${translateX}%) scale(${scale}) rotate(${rotate}deg)`,
    };
  };

  return (
    <div 
      className="relative md:w-[80vw] w-[90vw] mx-auto mb-16 overflow-hidden"
      style={{ height: `${maxHeight + 180}px` }} 
      ref={containerRef}
    >
      <ul className="relative md:w-2/5 w-[95%] mx-auto p-0">
        {events.map((event, index) => (
          <motion.li
            key={event.id || index}
            className={`card-item cursor-pointer rounded-lg shadow-md list-none md:w-4/5 w-full absolute left-1/2 transform -translate-x-1/2 ${
              index === activeIndex ? "active shadow-lg z-50" : ""
            }`}
            style={{
              ...calculateCardStyle(index),
              height: maxHeight > 0 ? `${maxHeight}px` : "auto",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
            }}
            onClick={() => handleCardClick(index)}
            animate={{
              zIndex: index === activeIndex ? events.length + 1 : events.length - Math.abs(index - activeIndex)
            }}
          >
            <div className="relative block w-full h-full bg-gray-900 p-1 rounded-lg z-10 flex flex-col">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={event.image} 
                  alt="Event" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default StackedCards;
