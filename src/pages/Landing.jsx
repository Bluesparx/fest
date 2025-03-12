import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { FocusCardsDemo } from "@/components/FocusCardsDemo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const aboutText =
  "Immerse yourself in a whirlwind of music, dance, art, and innovation as we bring together students from across the country. From thrilling competitions and mesmerizing performances to insightful workshops and celebrity appearances, this fest is packed with excitement! \n Unleash your creativity, showcase your talent, and make unforgettable memories. Join us as we celebrate passion, culture, and innovation like never before!";
  const Typewriter = ({ text, speed = 50 }) => {
    const [visibleCharCount, setVisibleCharCount] = useState(0);
  
    useEffect(() => {
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
    }, [text, speed]);
  
    // Split the text by newline characters
    const paragraphs = text.split("\n");
    let charCounter = 0;
  
    return (
      <span className="relative font-playful">
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
  return (
    <>
    <div className="relative min-h-screen overflow-hidden ">
    <div className="relative overflow-x-hidden z-20 min-h-screen">
    <div className="relative overflow-x-hidden">
      <div
        className="relative h-screen w-screen overflow-hidden bg-cover bg-center "
        style={{ backgroundImage: "url('/bg-vortex.png')" }}
      >
        <div className="flex flex-col justify-center items-center h-[70vh]">
          <img
            src="/title.png"
            alt="Title"
            className="w-[40%] h-auto mb-4"
          />
          <p className="text-xl font-imenglish text-gray-300 mb-8 max-w-lg mx-auto">
            28-29 March '25
          </p>
        </div>

        <div className="carousel absolute bottom-2 w-[35vw] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <div className="absolute bottom-[-60%] w-[30vw] bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
          <div className="relative flex justify-center items-center">
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
              src="/posters/truck.png"
              className="carousel-item"
              style={{ width: "auto", height: "100%", marginBottom: "6rem" }}
              animate={{ scale: [1.1, 1.18, 1.1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.7,
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
        </div>

        <Hero />
      </div>

      <div
        className="h-[78vh] bg-yellow-600 flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('image.png')" }}
      >
        <div className="text-center px-16 bg-black/40 p-8 rounded-lg backdrop-blur-xl">
          <h1 className="text-5xl font-bold mb-6 text-white font-imenglish">
            IGDTUW's Cultural Fest
          </h1>
          <p className="text-xl max-w-xl mx-auto text-white">
            <Typewriter text={aboutText} speed={30} />
          </p>
        </div>
      </div>

      {/* Performances Section */}
      <div className="bg-black text-white py-16">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold mb-6 font-imenglish">
            Unforgettable Performances
          </h1>
          <FocusCardsDemo />
        </div>
      </div>

      <div className="min-h-[70vh]" style={{backgroundImage: `url(/image.png)`, backgroundSize: 'cover', backgroundBlendMode: 'overlay'}}>
      <div className="min-h-[70vh] flex flex-col md:flex-row lg:flex-row justify-center align-center bg-black/40">
        
        <div className="flex-1 px-8 py-16 align-center justify-center flex flex-col mb-8">
          <h1 className="text-5xl font-bold text-white font-imenglish mb-4">Frequently Asked Questions</h1>
          
        </div>
        
        <div className="flex-grow py-16 bg-black/50 md:flex-2 md:pl-8">
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            <AccordionItem value="item-1" className="border-b  border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500 ">
                When and where is the fest taking place?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                The fest will be held on March 28-29, 2025 at the IGDTUW campus. The event will start at 9:00 AM and continue until 9:00 PM on both days.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500">
                How can I register for the competitions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                Registration for all competitions is available online through our official website. Navigate to the "Events" section and select the competitions you'd like to participate in. You can also register on-site at the registration desk, but early online registration is recommended as some events have limited slots.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500 ">
                Is there an entry fee for the fest?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                General entry to the fest is free for all students with a valid college ID. However, some workshops and premium events may have a nominal fee. Detailed pricing information is available on our website under the "Tickets" section.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500">
                Will there be accommodation for outstation participants?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                Yes, we provide accommodation for outstation participants at a nominal fee. Accommodation requests must be made at least 10 days before the event through our website. Limited spots are available, so early booking is recommended.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500 ">
                Who are the celebrity performers this year?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                We're excited to have some amazing performers this year! The complete lineup will be announced on our social media channels two weeks before the event. Follow us on Instagram and Twitter to stay updated with all the announcements.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500 ">
                Can non-students attend the fest?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                Absolutely! While the fest is primarily designed for students, we welcome everyone to attend. Non-students can purchase visitor passes from our website or at the venue entrance. These passes provide access to all general areas and performances.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-b border-gray-700">
              <AccordionTrigger className="text-white text-xl py-4 hover:text-yellow-500 ">
                How can I volunteer for the fest?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-4">
                We're always looking for enthusiastic volunteers! Visit the "Join Us" section on our website and fill out the volunteer application form. Selected volunteers will be contacted by our team and will receive special perks including exclusive merchandise and certificates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
