import React from "react";
import event1 from "/public/event-poster.png";
import { Vortex } from "@/components/ui/vortex";

const events = [
  { id: 1, image: event1, title: "Event 1" },
  { id: 2, image: event1, title: "Event 2" },
  { id: 3, image: event1, title: "Event 3" },
  { id: 4, image: event1, title: "Event 4" },
  { id: 5, image: event1, title: "Event 5" },
  { id: 6, image: event1, title: "Event 6" },
  { id: 7, image: event1, title: "Event 7" },
  { id: 8, image: event1, title: "Event 8" },
];
const EventsPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute fixed inset-0 z-10 h-screen w-full">
        <Vortex className="h-full w-full" />
      </div>

      <div className="w-screen mx-auto p-4 relative z-10">
        <header className="text-center mt-22">
          <img
            src="/events.png"
            alt="Events Logo"
            className="mx-auto h-[16vh] w-auto"
          />
          <h1 className="text-4xl font-semibold mb-4">Events</h1>
        </header>

        <div className="grid mx-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div key={event.id} className="w-[16vw] rounded-lg bg-blue-100">
              <img
                src={event.image}
                alt={event.title}
                className="h-80 w-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default EventsPage;
