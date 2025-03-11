import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const teamMembers = [
  { id: 1, image: "/team1.png", name: "Prakriti Jaiswal", position: "President" },
  { id: 2, image: "/team2.png", name: "Rishita Makde", position: "Vice President" },
  { id: 3, image: "/team3.png", name: "Priyal Gupta", position: "General Secretary" },
  { id: 4, image: "/team4.png", name: "Astha Ojha", position: "Treasurer" },
  { id: 5, image: "/team5.png", name: "Devika Sharma", position: "Public Relations Officer (PRO)" },
  { id: 6, image: "/team6.png", name: "Sakshi Shroff", position: "Event Co-ordinator" },
];

const TeamsPage = () => {
  return (
    <div className="relative min-h-screen ">
      {/* Background Image */}
      <div className="relative  w-full h-[50vh] ">
        <img src="team.png" className="w-screen h-[130vh]" />
        <div className=" relative w-full absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute top-10 p-4 z-10 w-full">
        {/* Page Heading */}
        <header className="text-center mt-40">
          <h1 className="text-4xl font-imenglish font-semibold mb-8 text-white uppercase tracking-wide">
            Meet the Team
          </h1>
        </header>

        {/* Single Carousel */}
        <div className="relative w-[70vw] md:w-[80vw] mx-auto">
          <Carousel>
            <CarouselContent className="-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="pl-4 md:basis-1/4 lg:basis-1/4 flex flex-col items-center">
                  <div className="overflow-hidden rounded-full w-40 h-40">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-center font-imenglish text-white">{member.name}</h3>
                  <p className="text-sm text-gray-300 font-imenglish">{member.position}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 bg-red-600/80 hover:bg-red-600 border-none text-white shadow-lg" />
            <CarouselNext className="right-1 bg-red-600/80 hover:bg-red-600 border-none text-white shadow-lg" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
