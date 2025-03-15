import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function HorizontalTimeline({ events }) {
  const [autoPosition, setAutoPosition] = useState(0);
  const [flipped, setFlipped] = useState(Array(events.length).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoPosition((prev) => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center p-10">
      <div className="relative w-full max-w-5xl flex items-center justify-between mt-10">
        <motion.img
          src="/auto.png"
          alt="Auto-Rickshaw"
          className="w-32 h-32 absolute z-100 -top-25"
          animate={{ left: `${autoPosition}%` }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        />

        <div className="w-full flex gap-8 justify-between items-center border-t-4 border-yellow-500/40 relative">
          {events.map((event, index) => (
            <div key={index} className="relative flex flex-col items-center cursor-pointer space-y-4">
              {/* Timeline Dot */}
              <div className="w-6 h-6 bg-yellow-700 rounded-full mt-[-12px]"></div>
              <span className="text-lg mb-2 font-playful text-white">{event.time}</span>

              {/* Flip Card */}
              <motion.div
                className="relative w-52 h-60 cursor-pointer perspective-1000"
                onHoverStart={() => handleFlip(index)}
                onHoverEnd={() => handleFlip(index)}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.4)" }}
              >
                <motion.div
                  className="absolute w-full h-full transition-transform duration-400"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side (Image with Overlay) */}
                  <div className="absolute w-full h-full bg-gray-100 rounded-xl shadow-lg flex flex-col justify-center items-center backface-hidden">
                    <img
                      src="/itidemo.png"
                      alt={event.title}
                      className="w-full h-full object-cover rounded-xl"
                    />

                    {/* Overlay Text (Centered on Image) */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center rounded-xl p-4">
                      <h2 className="text-lg md:text-xl font-bold mx-6">{event.title}</h2>
                      <p className="text-sm md:text-base mt-1 mx-6">{event.description}</p>
                    </div>
                  </div>

                  {/* Back Side (Details) */}
                  {/* <div className="absolute w-full h-full bg-red-900  rounded-xl shadow-lg p-4 flex flex-col justify-center items-center backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}>
                    <h2 className="text-white text-lg font-bold font-imenglish">{event.title}</h2>
                    <p className="text-gray-200 mt-2 text-md font-playful">{event.description}</p>
                  </div> */}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
