import React, { useEffect, useState } from "react";
import { motion, useInView} from "framer-motion";
import Hero from "@/components/Hero"; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Gallery from "@/components/ui/gallery";
import { Vortex } from "@/components/ui/vortex";
import { ArrowRight } from "lucide-react";
const aboutText =
  "Immerse yourself in a whirlwind of music, dance, art, and innovation as we bring together students from across the country. From thrilling competitions and mesmerizing performances to insightful workshops and celebrity appearances, this fest is packed with excitement! \n Unleash your creativity, showcase your talent, and make unforgettable memories. Join us as we celebrate passion, culture, and innovation like never before!";

const smallAbout = " From thrilling competitions and mesmerizing performances to insightful workshops and celebrity appearances, this fest is packed with excitement! \n Unleash your creativity, showcase your talent, and make unforgettable memories."

const Typewriter = ({ text, speed = 50 }) => {
  const [visibleCharCount, setVisibleCharCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleCharCount((prev) => prev + 1);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [isInView, text, speed]);

  // Split the text by newline characters
  const paragraphs = text.split("\n");
  let charCounter = 0;

  return (
    <span className="relative font-playful" ref={ref}>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <React.Fragment key={paragraphIndex}>
          {paragraph.split("").map((char, charIndex) => {
            const currentCharIndex = charCounter;
            charCounter++;
            return (
              <span
                key={`${paragraphIndex}-${charIndex}`}
                className={`relative ${currentCharIndex < visibleCharCount ? "text-white" : "text-gray-500/30"}`}
              >
                {char}
              </span>
            );
          })}
          {/* Add break after each paragraph except the last one */}
          {paragraphIndex < paragraphs.length - 1 && (
            <>
              <br />
              {/* Count the newline character in the typing animation */}
              <span className="hidden">{charCounter++}</span>
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 840);

  // Use effect to update the state on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    <div className="relative min-h-screen bg-black overflow-hidden ">
    <div className="relative overflow-x-hidden z-20 min-h-screen">
    <div className="relative overflow-hidden">
    {isSmallScreen ? (
              <Vortex className="h-screen">
                <div className="flex flex-col justify-center items-evenly pt-24 mb-4">
                  <div className="ml-4 flex flex-row gap-4 mb-20">
                     <motion.img
                       src="/caricatures/1.png"
                       className="carousel-item"
                       style={{ width: "45%", height: "auto", marginBottom: "-3rem" }}
                       animate={{ scale: [0.9, 0.96, 0.9] }}
                       transition={{
                         duration: 4.5,
                         repeat: Infinity,
                         repeatType: "reverse",
                         ease: "easeInOut",
                       }}
                     />
                     <motion.img
                       src="/caricatures/5.png"
                       className="carousel-item"
                       style={{ width: "40%", height: "auto", marginBottom: "-2rem" }}
                       animate={{ scale: [1, 1.06, 1] }}
                       transition={{
                         duration: 4.5,
                         repeat: Infinity,
                         repeatType: "reverse",
                         ease: "easeInOut",
                       }}
                     />
                  </div>

          <img
            src="/edited_logo.png"
            alt="Title"
            className="md:w-[40%] w-[80%] h-auto mb-4 mx-auto "
          />
           <div className="flex justify-center align-center">
                <a 
                href="https://www.tickettailor.com/events/igdtuw/1645169" 
                className="relative flex items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className= "bg-yellow-400 rounded-full opacity-75"></div>
                <button 
                  className="relative z-10 flex items-center space-x-2 px-3 py-1.5 
                  bg-yellow-400 text-black font-bold text-sm 
                  rounded-lg shadow-lg 
                  transition-all duration-300 
                  transform hover:-translate-y-1 hover:scale-105
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  <span>Get Passes</span>
                  <ArrowRight 
                    className={`transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : 'translate-x-0'
                    }`} 
                    size={18} 
                  />
                </button>
              </a>
                </div>
        </div>

          <div className="absolute bottom-[-60%] w-[80vw] bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
          <div className="relative flex justify-center items-center">
            
            <motion.img
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: "100%", height: "auto", marginBottom: "6rem" }}
              animate={{ scale: [1.1, 1.18, 1.1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
          </div>
        </Vortex> 
        ) : (
          <>
      <div
        className="relative h-screen w-screen overflow-hidden bg-cover bg-center "
        style={{ backgroundImage: "url('/bg-vortex.png')" }}
      >
        <div className="flex flex-col justify-center pt-6 items-center h-[70vh]">
          <img
            src="/edited_logo.png"
            alt="Title"
            className="w-[40%] h-auto mb-4"
          />
          <div className="flex justify-center align-center">
                <a 
                href="https://www.tickettailor.com/events/igdtuw/1645169" 
                className="relative flex items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className= "bg-yellow-400 rounded-full opacity-75"></div>
                <button 
                  className="relative z-10 flex items-center space-x-2 px-3 py-1.5 
                  bg-yellow-400 text-black font-bold text-sm 
                  rounded-lg shadow-lg 
                  transition-all duration-300 
                  transform hover:-translate-y-1 hover:scale-105
                  active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  <span>Get Passes</span>
                  <ArrowRight 
                    className={`transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : 'translate-x-0'
                    }`} 
                    size={18} 
                  />
                </button>
              </a>
                </div>
        </div>

        <div className="carousel absolute bottom-2 w-[35vw] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="absolute bottom-[-60%] w-[30vw] bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
          <div className="relative flex justify-center items-center">
            {/* <motion.img
              src="/caricatures/1.png"
              className="carousel-item"
              style={{ width: "45%", height: "auto", marginBottom: "-3rem" }}
              animate={{ scale: [0.9, 0.96, 0.9] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            /> */}
            <motion.img
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: "auto", height: "100%", marginBottom: "3vh" }}
              animate={{ scale: [1.1, 1.18, 1.1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
            {/* <motion.img
              src="/caricatures/5.png"
              className="carousel-item"
              style={{ width: "40%", height: "auto", marginBottom: "-2rem" }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            /> */}
          </div>
        </div> 
        </div>
        </>
        )}

        {!isSmallScreen && <Hero />}
      </div>

      <div
        className="md:h-[100vh] bg-yellow-600 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('image.png')" }}
      >
        <div className="text-center  md:w-[60vw] bg-black/40 p-8 md:rounded-lg backdrop-blur-xl">
          <h1 className="text-4xl text-center md:text-5xl font-bold mb-6 text-white font-imenglish">
            IGDTUW's Cultural Fest
          </h1>
          <p className="text-xl max-w-xl mx-auto text-white">
          {isSmallScreen ? (
            <Typewriter text={smallAbout} speed={30} />
          ) : (
            <Typewriter text={aboutText} speed={30} />
          )}
          </p>
        </div>
      </div>

      <div className="bg-black h-[100vh] flex flex-col  align-center justify-center text-white py-20">
        
      <h2 className="font-imenglish text-5xl text-center py-10">Unforgettable Performances</h2>
        
        {/* <img src="/Throwback-Taarangana.png"/> */}
        <div>
          <Gallery />
          </div>
        
      </div>

      <div className="min-h-[70vh]" style={{backgroundImage: `url(/image.png)`, backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
      <div className="min-h-[70vh] flex flex-col md:flex-row lg:flex-row justify-center align-center bg-black/40">
        
        <div className="flex-1 px-8 md:py-16 pt-10 md:pt-0 align-center justify-center flex flex-col md:mb-8">
          <h1 className="text-5xl font-bold text-white font-imenglish md:mb-4">Frequently Asked Questions</h1>
          
        </div>
        
        <div className="flex-grow py-16 md:bg-black/50 md:flex-2 p-4 md:pl-8">
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            <AccordionItem value="item-1" className="border-b  border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500 ">
                When and where is the fest taking place?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                The fest will be held on March 28-29, 2025 at the IGDTUW campus. The event will start at 11:00 AM and continue until 8:30 PM on both days.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500">
                How can I register for the competitions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                Registration for all competitions is available online through our official website. Navigate to the "Events" section and select the competitions you'd like to participate in. You can also register on-site at the registration desk, but early online registration is recommended as some events have limited slots.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500">
                Is there an entry fee for the fest?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                General entry to the fest is free for all students with a valid college ID and pass. Entry to the fest is strictly through passes.
              </AccordionContent>
            </AccordionItem>
            
            
            
            <AccordionItem value="item-5" className="border-b border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500">
                Who are the celebrity performers this year?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                We're excited to have some amazing performers this year! The complete lineup will be announced on our social media channels few days before the event. Follow us on Instagram and Twitter to stay updated with all the announcements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500">
              Who can attend Taarangana?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
              While organized by IGDTUW, Taarangana is open to students from various colleges and universities, fostering a diverse and inclusive environment. 
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-b border-gray-700">
              <AccordionTrigger className="text-white md:text-xl px-4 py-3 text-md hover:text-yellow-500">
              How can one stay updated about Fest passes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
              The schedule release of passes will be posted in the website soon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      </div>
    </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default HomePage;
