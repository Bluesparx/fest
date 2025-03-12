import React, { useState, useEffect } from "react";

const Gallery = () => {
  const images = [
    { id: 1, src: "/gallery/1.jpg", alt: "Gallery image 1", title: "Event 2024", rotation: -2, marginTop: "10px" },
    { id: 2, src: "/gallery/2.png", alt: "Gallery image 2", title: "Performance", rotation: 3, marginTop: "20px" },
    { id: 3, src: "/gallery/3.png", alt: "Gallery image 3", title: "Workshop", rotation: -1, marginTop: "5px" },
    { id: 4, src: "/gallery/4.png", alt: "Gallery image 4", title: "Competition", rotation: 2, marginTop: "15px" },
    { id: 5, src: "/gallery/5.jpg", alt: "Gallery image 5", title: "Cultural Night", rotation: -3, marginTop: "8px" },
    { id: 6, src: "/gallery/6.jpg", alt: "Gallery image 6", title: "Tech Exhibition", rotation: 1, marginTop: "12px" },
    { id: 7, src: "/gallery/7.jpg", alt: "Gallery image 7", title: "Tech Exhibition", rotation: 1, marginTop: "12px" },
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 1) % (images.length * 220)); 
    }, 50);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[90vw] overflow-hidden relative mx-auto">
      {/* Carousel container */}
      <div className="w-full pt-12 pb-20 overflow-hidden">
        <div
          className="flex items-start gap-6 transition-transform duration-200"
          style={{ transform: `translateX(${position}px)` }}
        >
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="relative transform transition-all duration-300 ease-out"
              style={{ transform: `rotate(${image.rotation}deg)`, marginTop: image.marginTop }}
            >
              <div className="w-52 h-64 p-3 bg-white shadow-xl group hover:bg-white/40 transition-all  duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover md:hover:blur-xs md:hover:opacity-70 blur-none"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 py-2 text-md font-semibold font-serif text-white whitespace-nowrap md:opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity duration-300">
                  {image.title}
                </div>
              </div>
               
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default Gallery;
