import React, { useEffect, useState } from "react";
import StackedCards from "@/components/StackedCards";
import Footer from "@/components/Footer";

const day1Events = [
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/miss-mr-taarangana-igdtuw-delhi-1430053" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/urban-thump-igdtuw-delhi-1430091" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/aaghaz-igdtuw-delhi-1430097" },
  { image: "/events/alaap.png", registerLink: "https://unstop.com/p/alaap-the-solo-singing-competition-taarangana-igdtuw-delhi-1429792" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/jashn-e-alfaz-igdtuw-delhi-1430104" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
]; 

const day2Events = [
  { image: "/events/lilac.png", registerLink: "" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/urban-thump-igdtuw-delhi-1430091" },
  { image: "/event-poster.png", registerLink: "https://unstop.com/p/lyrical-showdown-igdtuw-delhi-1430155" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
  { image: "/event-poster.png", registerLink: "https://unstop.com" },
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
