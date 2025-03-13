import React, { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    image: "/posters/demo.png",
    name: "Prakriti Jaiswal",
    position: "President",
    phone: "+91 9876543210",
    email: "prakriti@example.com",
  },
  {
    id: 2,
    image: "/posters/demo.png",
    name: "Rishita Makde",
    position: "Vice President",
    phone: "+91 9123456789",
    email: "rishita@example.com",
  },
  {
    id: 3,
    image: "/team/Priyal.jpg",
    name: "Priyal Gupta",
    position: "General Secretary",
    phone: "+91 7701803605",
    email: "generalsecretary.ucc.igdtuw@gmail.com",
  },
  {
    id: 4,
    image: "/team/astha.jpg",
    name: "Astha Ojha",
    position: "Treasurer",
    phone: "+91 9560639457",
    email: "treasurer.ucc.igdtuw@gmail.com",
  },
  {
    id: 5,
    image: "/posters/demo.png",
    name: "Devika Sharma",
    position: "Public Relations Officer (PRO)",
    phone: "+91 7766554433",
    email: "devika@example.com",
  },
  {
    id: 6,
    image: "/posters/demo.png",
    name: "Sakshi Shroff",
    position: "Event Co-ordinator",
    phone: "+91 6677889900",
    email: "sakshi@example.com",
  },
  {
    id: 7,
    image: "/team/meha.jpg",
    name: "Meha Jain",
    position: "Event Co-ordinator",
    phone: "+91 9990199276",
    email: "eventcoordinator.ucc.igdtuw@gmail.com",
  },
];

const MobileTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const teamCount = teamMembers.length;

  // Auto-detect active section
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const index = Math.round(scrollLeft / clientWidth) % teamCount;
        setActiveIndex(index);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, [teamCount]);

  // Scroll to selected dot
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className="relative overflow-x-hidden z-20 min-h-screen">
          <div className="relative w-full h-[100vh]">
            <img
              src="team.png"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="w-screen absolute top-10 p-4 z-10">
            <header className="text-center mt-38">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-imenglish font-semibold mb-4 text-white uppercase">
                Meet the Team
              </h1>
            </header>

            <div className="relative w-[85vw] md:w-[80vw] mx-auto overflow-hidden">
              <div className="flex overflow-x-scroll scroll-snap-type-x mandatory" ref={scrollRef}>
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="min-w-full flex flex-col items-center"
                  >
                    <div className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 bg-black/50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center shadow-lg p-4">
                      {/* Profile Image */}
                      <div className="w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 overflow-hidden rounded-full border-4 border-yellow-400">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Name & Position */}
                      <h3 className="mt-4 text-xl lg:text-2xl font-bold text-center font-imenglish text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm lg:text-lg text-gray-300 font-playful">
                        {member.position}
                      </p>

                      {/* Contact Icons */}
                      <div className="flex items-center gap-4 mt-2 text-gray-200">
                        <a href={`tel:${member.phone}`} className="hover:text-yellow-400">
                          <Phone size={22} />
                        </a>
                        <a href={`mailto:${member.email}`} className="hover:text-yellow-400">
                          <Mail size={22} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    activeIndex === index ? "bg-yellow-400 w-4 h-4" : "bg-gray-400"
                  }`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MobileTeam;
