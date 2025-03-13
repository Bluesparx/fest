import Footer from "@/components/Footer";
import HorizontalTimeline from "@/components/ui/Timeline";
import VerticalTimeline from "@/components/ui/VerticalTimeline";
import React from "react";

const day1Events = [
  { time: "11:00 am", title: "Miss & Mr. Taarangana", description: "An exciting talent showcase.", image: "/event-poster.png"},
  { time: "time", title: "Urban Thump", description: "Feel the rhythm of the street.", image: "/event-poster.png" },
  { time: "time", title: "Aaghaz", description: "A mesmerizing opening performance." , image: "/event-poster.png"},
  { time: "time", title: "Alaap", description: "Soulful musical experience.", image: "/event-poster.png" },
  
];

const day1EventsPart2 = [
  { time: "time", title: "Jashn E Alfaz", description: "Poetry and spoken word magic.", image: "/event-poster.png" },
  { time: "time", title: "Kaun Banega Bollywood Pati", description: "A fun Bollywood-themed game show." , image: "/event-poster.png"},
  { time: "Singer Performance", title: "Singer Performance", description: "Live vocal performance.", image: "/event-poster.png" },
  { time: "Bollywood Masquerade", title: "Bollywood Masquerade", description: "A grand masquerade ball.", image: "/event-poster.png" },
];

const day2Events = [
  { time: "Lilac Dreams", title: "Lilac Dreams", description: "A dreamy stage performance.", image: "/event-poster.png" },
  { time: "Lyrical Showdown / Rap Battle", title: "Lyrical Showdown / Rap Battle", description: "Rap battles with intense wordplay.", image: "/event-poster.png" },
  { time: "Antra / Group Singing", title: "Antra / Group Singing", description: "Soulful melodies from groups.", image: "/event-poster.png" },
  { time: "Rang Manch / Solo Acting", title: "Rang Manch / Solo Acting", description: "Drama and expressions on stage.", image: "/event-poster.png" },
  
];

const day2EventsPart2 = [
  { time: "Solo Dance Competition", title: "Solo Dance Competition", description: "Incredible solo dance performances.", image: "/event-poster.png" },
  { time: "Artist Performance", title: "Artist Performance", description: "A spectacular artist showcase.", image: "/event-poster.png" },
  { time: "Filler Event", title: "Filler Event", description: "A surprise entertainment segment.", image: "/event-poster.png" },
];

const Itinerary = () => {
  return (
    <>
    <div className="relative overflow-x-hidden z-20 min-h-screen  bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/curtain.png')"}}>
      <div className=" top-0 z-10 w-[100vw] min-h-screen justify-center flex items-center flex-col bg-black/50">
    
    <div className="relative  min-h-screen ">

        {/* Itinerary Heading */}
        <h1 className="text-6xl font-bold text-center text-yellow-500 mb-10 mt-36 font-imenglish sm:text-6xl">Itinerary</h1>

        {/* Day 1 Heading */}
        <p className="text-4xl font-bold text-center text-white mb-6 font-imenglish sm:text-4xl">Day 1 (Cinema Day)</p>
        
        {/* Day 1 - First Timeline */}
        <div className="w-full max-w-6xl sm:block  hidden ">
          <HorizontalTimeline events={day1Events} />
        </div>

        <div className="w-full max-w-md block sm:hidden">
              <VerticalTimeline events={day1Events} />
            </div>

        {/* Day 1 - Second Timeline */}
        <div className="w-full max-w-6xl mt-10 hidden sm:block">
          <HorizontalTimeline events={day1EventsPart2} />
        </div>

        <div className="w-full max-w-md mt-10 block sm:hidden">
              <VerticalTimeline events={day1EventsPart2} />
            </div>

        {/* Day 2 Heading */}
        <p className="text-4xl sm:text-4xl font-bold text-center text-white mt-20 mb-6 font-imenglish">Day 2 (Pronite Day)</p>
        
        {/* Day 2 - First Timeline */}
        <div className="w-full max-w-6xl hidden sm:block">
          <HorizontalTimeline events={day2Events} />
        </div>

        <div className="w-full max-w-md block sm:hidden">
              <VerticalTimeline events={day2Events} />
            </div>

        {/* Day 2 - Second Timeline */}
        <div className="w-full max-w-6xl mt-10 hidden sm:block">
          <HorizontalTimeline events={day2EventsPart2} />
        </div>

        <div className="w-full max-w-md block sm:hidden mb-4">
              <VerticalTimeline events={day2EventsPart2} />
            </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Itinerary;
