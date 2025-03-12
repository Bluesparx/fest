import React, { useEffect, useState } from "react";
import StackedCards from "@/components/StackedCards";
import Footer from "@/components/Footer";

const events = [
  { id: 1, image: "/event-poster.png", title: "Event 1", description: "THIS IS EVENT DESCRIPTION" },
  { id: 2, image: "/event-poster.png", title: "Event 2", description: "THIS IS EVENT DESCRIPTION" },
  { id: 3, image: "/event-poster.png", title: "Event 3", description: "THIS IS EVENT DESCRIPTION" },
  { id: 4, image: "/event-poster.png", title: "Event 4", description: "THIS IS EVENT DESCRIPTION" },
  { id: 5, image: "/event-poster.png", title: "Event 5", description: "THIS IS EVENT DESCRIPTION" },
  { id: 6, image: "/event-poster.png", title: "Event 6", description: "THIS IS EVENT DESCRIPTION" },
  { id: 7, image: "/event-poster.png", title: "Event 7", description: "THIS IS EVENT DESCRIPTION" },
  { id: 8, image: "/event-poster.png", title: "Event 8", description: "THIS IS EVENT DESCRIPTION" },
];

const EventsPage = () => {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden ">
      <div className="relative overflow-x-hidden z-20 min-h-screen">
        <div className="w-full">
          <img src="events-bg.png" className="w-screen" style={{ height: "100%", width: "auto" }} />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="w-screen absolute top-10 p-4 z-10">
          <header className="text-center mt-38">
            <h1 className="text-5xl font-imenglish font-semibold mb-4">Events</h1>
          </header>

          {/* Day 1 Events */}
          <h2 className="text-2xl font-imenglish font-semibold mb-8 text-center uppercase">Day 1</h2>
          <StackedCards events={events} layout="fanOut" />

          {/* Day 2 Events */}
          <h2 className="text-2xl font-imenglish font-semibold mb-8 text-center uppercase">Day 2</h2>
          <StackedCards events={events} layout="fanOut"/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EventsPage;
