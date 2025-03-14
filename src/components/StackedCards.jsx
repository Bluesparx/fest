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
          setMaxHeight(340); 
        }
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    setTimeout(calculateMaxHeight, 100);
    window.addEventListener("resize", calculateMaxHeight);
    
    // Initial check and add listener for responsive behavior
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", calculateMaxHeight);
      window.removeEventListener("resize", checkMobile);
    };
  }, [events]);

  // Auto-scroll effect
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setActiveIndex(prevIndex => {
          // Move to the next card or loop back to the first
          return prevIndex === events.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000); // 3 seconds interval
    };

    // Start auto-scroll
    startAutoScroll();

    // Cleanup function
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [events.length]);

  // Reset auto-scroll when user interacts
  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      
      // Restart auto-scroll after user interaction
      autoScrollRef.current = setInterval(() => {
        setActiveIndex(prevIndex => {
          return prevIndex === events.length - 1 ? 0 : prevIndex + 1;
        });
      }, 3000);
    }
  };

  const handleCardClick = (index) => {
    resetAutoScroll(); // Reset auto-scroll timer

    if (index === activeIndex) {
      window.location.href = events[index].registerLink;
    } else {
      setActiveIndex(index);
    }
  };

  const handleTouchStart = (e) => {
    resetAutoScroll(); // Reset auto-scroll timer
    
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: new Date().getTime()
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
      time: new Date().getTime()
    };
    
    const distX = touchEnd.x - touchStart.x;
    const distY = touchEnd.y - touchStart.y;
    const elapsedTime = touchEnd.time - touchStart.time;
    
    const threshold = 75;
    const restraint = 100;
    const allowedTime = 300;
    
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        // Horizontal swipe
        if (distX < 0 && activeIndex < events.length - 1) {
          // Left swipe, show next card
          setActiveIndex(activeIndex + 1);
        } else if (distX > 0 && activeIndex > 0) {
          // Right swipe, show previous card
          setActiveIndex(activeIndex - 1);
        }
      }
    }
  };

  const calculateCardStyle = (index) => {
    const centerPoint = activeIndex;
    const position = index - centerPoint;
    
    // Base scaling and z-index
    let scale = 1;
    let zIndex = events.length - Math.abs(position);
    let translateX = 0;
    let rotate = 0;
    
    if (position !== 0) {
      // Card is not active
      scale = 0.9 - (0.1 * Math.abs(position));
      scale = Math.max(scale, 0.7); // Don't go below 0.7 scale
      
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
      className="relative md:w-[80vw] w-[100vw] mx-auto mb-16 overflow-hidden"
      style={{ height: `${maxHeight + 180}px` }} 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="relative md:w-2/5 w-2/3 mx-auto p-0">
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
            {index !== activeIndex && (
              <div 
                className="absolute inset-0 bg-transparent"
                style={{ zIndex: 5 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
      
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-1">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-[10px] rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => {
              resetAutoScroll();
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedCards;