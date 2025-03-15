import React, { useEffect, useState } from "react";
import StackedCards from "@/components/StackedCards";
import Footer from "@/components/Footer";

const day1Events = [
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/miss-mr-taarangana-igdtuw-delhi-1430053" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/urban-thump-igdtuw-delhi-1430091" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/aaghaz-igdtuw-delhi-1430097" },
  { image: "/events/alaap.png", registerLink: "https://unstop.com/p/alaap-the-solo-singing-competition-taarangana-igdtuw-delhi-1429792" },
  { image: "/events/lilac.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
];

const day2Events = [
  { time: "Surprise Event", description: "A surprise entertainment segment.", image: "/event-poster.png" },
  { time: "Artist Performance", title: "Artist Performance", description: "A spectacular artist showcase.", image: "/event-poster.png" },
  { time: "Solo Dance Competition", title: "Solo Dance Competition", description: "Incredible solo dance performances.", image: "/event-poster.png" },
  { time: "Rang Manch / Solo Acting", title: "Rang Manch / Solo Acting", description: "Drama and expressions on stage.", image: "/event-poster.png" },
  { time: "Antra / Group Singing", title: "Antra / Group Singing", description: "Soulful melodies from groups.", image: "/event-poster.png" },
  { time: "Lyrical Showdown / Rap Battle", title: "Lyrical Showdown / Rap Battle", description: "Rap battles with intense wordplay.", image: "/event-poster.png" },

  { time: "Lilac Dreams", title: "Lilac Dreams", description: "A dreamy stage performance.", image: "/event-poster.png" },
];

const EventsPage = () => {
  return (
    <>
    <div className="relative overflow-x-hidden z-20 min-h-screen  bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/events-bg.png')"}}>
    <div className=" top-0 z-10 w-[100vw] min-h-screen justify-center flex items-center flex-col bg-black/65">
    
    <div className="relative  min-h-screen ">
          <header className="text-center mt-38">
            <h1 className="text-5xl font-imenglish font-semibold my-12 pt-4 text-white">Events</h1>
          </header>

          {/* Day 1 Events */}
          <h2 className="text-3xl font-imenglish font-bold text-white my-8 text-center ">Day 1</h2>
          
          <StackedCards events={day1Events} layout={window.innerWidth < 440 ? "slide" : "fanOut"} />

          {/* Day 2 Events */}
          <h2 className="text-3xl font-imenglish font-bold text-white mb-8  text-center ">Day 2</h2>
          <StackedCards events={day2Events} layout={window.innerWidth < 440 ? "slide" : "fanOut"} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventsPage;
