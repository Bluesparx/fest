import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StackedCards = ({ events = [], layout = "slide" }) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(events.length / 2));
  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const calculateMaxHeight = () => {
      if (containerRef.current) {
        const cardElements = containerRef.current.querySelectorAll(".card-item");
        let max = 0;
        cardElements.forEach(card => {
          if (card.scrollHeight > max) max = card.scrollHeight;
        });
        setMaxHeight(max > 0 ? max : 400); // Fallback height
      }
    };
    
    setTimeout(calculateMaxHeight, 100);
    window.addEventListener("resize", calculateMaxHeight);
    
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, [events]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
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
        // Position cards to the left or right
        translateX = position * -25; // Percentage offset
        rotate = 0;
      } else if (layout === "fanOut") {
        // Fan out cards with rotation
        translateX = position * -20;
        rotate = position * 10; // Degrees of rotation
      }
    }
    
    return {
      zIndex,
      transform: `translateX(${translateX}%) scale(${scale}) rotate(${-rotate}deg)`,
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
      <ul className="relative md:w-1/3 w-4/5 mx-auto p-0">
        {events.map((event, index) => (
          <motion.li
            key={event.id}
            className={`card-item cursor-pointer rounded-lg shadow-md list-none md:w-4/5 w-3/4 absolute left-1/2 transform -translate-x-1/2 ${
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
            <div className="relative block w-full h-full bg-[#E6E6FA] p-6 rounded-lg z-10 flex flex-col">
              <div className="w-full overflow-hidden rounded-lg mb-4">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-40 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
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
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StackedCards;