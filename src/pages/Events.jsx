import React, { useEffect, useState, useCallback } from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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

const EventCarousel = ({ dayTitle, activeIndex, setActiveIndex }) => {
  const visibleCards = 4; // Number of visible cards
  const maxIndex = Math.max(0, events.length - visibleCards);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, [setActiveIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [setActiveIndex, maxIndex]);

  return (
    <div className="mt-12 mb-16">
      <h2 className="text-xl font-imenglish font-semibold mb-8 text-center uppercase tracking-wider">{dayTitle}</h2>
      <div className="relative">
        <Carousel className="w-[70vw] md:w-[80vw] mx-auto">
          <CarouselContent
            className="-ml-8"
            style={{
              transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {events.map((event) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/3 lg:basis-1/3">
                <Card className="bg-black/80 border-2 border-gray-800 hover:border-red-600 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="h-60 w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-center font-imenglish">{event.title}</h3>
                    <CardDescription className="mt-2">
                      <p className="text-gray-300 text-center">{event.description}</p>
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            onClick={handlePrevious} 
            className="left-1 bg-red-600/80 hover:bg-red-600 border-none text-white shadow-lg"
            disabled={activeIndex === 0}
          />
          <CarouselNext 
            onClick={handleNext} 
            className="right-1 bg-red-600/80 hover:bg-red-600 border-none text-white shadow-lg"
            disabled={activeIndex >= maxIndex}
          />
        </Carousel>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`mx-1 h-2 w-2 rounded-full transition-all ${
                activeIndex === index ? "bg-red-600 w-4" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [activeIndexDay1, setActiveIndexDay1] = useState(0);
  const [activeIndexDay2, setActiveIndexDay2] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndexDay1((prevIndex) => {
        const visibleCards = 4;
        const maxIndex = Math.max(0, events.length - visibleCards);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
      
      setActiveIndexDay2((prevIndex) => {
        const visibleCards = 4;
        const maxIndex = Math.max(0, events.length - visibleCards);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
    ><div className="relative overflow-x-hidden">
    <div className="w-full">
      <img src="events-bg.png" className="w-screen" style={{ height: "80%", width: "auto" }} />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    <div className="w-screen absolute top-10 p-4 z-10">
      <header className="text-center mt-40">
        <h1 className="text-4xl font-imenglish font-semibold mb-4">Events</h1>
      </header>
      

        {/* Day 1 Events */}
        <EventCarousel 
          dayTitle="Day 1" 
          activeIndex={activeIndexDay1} 
          setActiveIndex={setActiveIndexDay1}
        />

        {/* Day 2 Events */}
        <EventCarousel 
          dayTitle="Day 2" 
          activeIndex={activeIndexDay2} 
          setActiveIndex={setActiveIndexDay2}
        />
      </div>
    </div>
    </div>
  );
};

export default EventsPage;