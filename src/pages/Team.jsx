import React from "react";

const teamMembers = [
  { id: 1, image: "/posters/demo.png", name: "Prakriti Jaiswal", position: "President" },
  { id: 2, image: "/posters/demo.png", name: "Rishita Makde", position: "Vice President" },
  { id: 3, image: "/posters/demo.png", name: "Priyal Gupta", position: "General Secretary" },
  { id: 4, image: "/posters/demo.png", name: "Astha Ojha", position: "Treasurer" },
  { id: 5, image: "/posters/demo.png", name: "Devika Sharma", position: "Public Relations Officer (PRO)" },
  { id: 6, image: "/posters/demo.png", name: "Sakshi Shroff", position: "Event Co-ordinator" },
];

const TeamsPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="relative w-full h-[70vh]">
        <img src="team.png" className="w-screen h-[130vh]" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute top-10 p-4 z-10 w-full">
        {/* Page Heading */}
        <header className="text-center mt-40">
          <h1 className="text-5xl font-imenglish font-semibold mb-10 text-white uppercase tracking-wide">
            Meet the Team
          </h1>
        </header>

        {/* Carousel */}
        <div className="relative w-[85vw] md:w-[80vw] mx-auto overflow-hidden">
          <div className="flex animate-marquee gap-x-6">
            {teamMembers.concat(teamMembers).map((member) => (
              <div key={member.id} className="pl-4 md:basis-1/3 lg:basis-1/4 flex flex-col items-center">
                
                <div className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 bg-black/50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center shadow-lg p-4">
                  
                  <div className="w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 overflow-hidden rounded-full border-4 border-yellow-400">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-xl lg:text-2xl font-bold text-center font-imenglish text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm lg:text-lg text-gray-300 font-playful">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
