import { useEffect, useState } from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"; // Importing social media icons


const Footer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-28T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="sticky flex-1 bottom-0 left-0 w-full bg-black text-white py-12 z-10 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      
    >
      {/* Logo */}
      <img src="/title.png" alt="Fest Logo" className="w-140 h-60  mt-20" />

      {/* Countdown Timer */}
      <div className="text-center mb-20 font-imenglish ">
        <div className="flex justify-center gap-6 mt-1 font-imenglish">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <div key={index} className="flex flex-col items-center font-imenglish">
              <span className="md:text-7xl text-4xl font-bold font-imenglish">{timeLeft[unit]}</span>
              <span className="text-xl text-gray-200 font-playful">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 mb-10">
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <Instagram size={30} />
        </a>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <Twitter size={30} />
        </a>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          <Linkedin size={30} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-200 md:text-sm  text-xs font-serif mb-2">@Taarangana'25 IGDTUW. All rights reserved.</p>
      <span className="text-gray-100 md:text-xl text-md font-playful mt-1 mb-10">
      Directed and created by <a href="https://www.linkedin.com/in/riddhi-rustagi-9a1976257" className="text-red-400 inline hover:text-red-500">Riddhi</a> and <a href="https://naziahassan.vercel.app" className="text-red-400 hover:text-red-500 inline">Nazia</a> ✨ 
      </span>
    </div>
  );
};

export default Footer;
