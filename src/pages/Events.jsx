import React, { useEffect, useState } from "react";
import StackedCards from "@/components/StackedCards";
import Footer from "@/components/Footer";

const day1Events = [
  { time: "Bollywood Masquerade", title: "Bollywood Masquerade", description: "A grand masquerade ball.", image: "/event-poster.png" },
  
  { time: "Singer Performance", title: "Singer Performance", description: "Live vocal performance.", image: "/event-poster.png" },
  { time: "time", title: "Kaun Banega Bollywood Pati", description: "A fun Bollywood-themed game show.", image: "/event-poster.png" },
  { time: "time", title: "Urban Thump", description: "Feel the rhythm of the street.", image: "/event-poster.png" },
  { time: "time", title: "Aaghaz", description: "A mesmerizing opening performance.", image: "/event-poster.png" },
  { time: "time", title: "Alaap", description: "Soulful musical experience.", image: "/event-poster.png" },
  { time: "time", title: "Jashn E Alfaz", description: "Poetry and spoken word magic.", image: "/event-poster.png" },
  { time: "11:00 am", title: "Miss & Mr. Taarangana", description: "An exciting talent showcase.", image: "/event-poster.png" },
  
];

const day2Events = [
  { time: "Filler Event", title: "Filler Event", description: "A surprise entertainment segment.", image: "/event-poster.png" },
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
          
          <StackedCards events={day1Events} layout={window.innerWidth < 840 ? "slide" : "fanOut"} />

          {/* Day 2 Events */}
          <h2 className="text-3xl font-imenglish font-bold text-white mb-8  text-center ">Day 2</h2>
          <StackedCards events={day2Events} layout={window.innerWidth < 840 ? "slide" : "fanOut"} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventsPage;
