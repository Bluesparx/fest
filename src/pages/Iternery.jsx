import HorizontalTimeline from "@/components/ui/Timeline";
import React from "react";

const day1Events = [
  { time: "time", title: "Miss & Mr. Taarangana", description: "An exciting talent showcase.", image: "/event-poster.png"},
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
    <div className="relative  min-h-screen ">
      <div className=" top-0 z-10 w-[100vw] min-h-screen justify-center flex items-center flex-col  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/curtain.jpg')"}}>
        
        {/* Itinerary Heading */}
        <h1 className="text-6xl font-bold text-center text-yellow-500 mb-10 mt-36 font-imenglish">Itinerary</h1>

        {/* Day 1 Heading */}
        <p className="text-4xl font-bold text-center text-white mb-6 font-imenglish">Day 1 (Cinema Day)</p>
        
        {/* Day 1 - First Timeline */}
        <div className="w-full max-w-6xl">
          <HorizontalTimeline events={day1Events} />
        </div>

        {/* Day 1 - Second Timeline */}
        <div className="w-full max-w-6xl mt-10">
          <HorizontalTimeline events={day1EventsPart2} />
        </div>

        {/* Day 2 Heading */}
        <p className="text-4xl font-bold text-center text-white mt-20 mb-6 font-imenglish">Day 2 (Pronite Day)</p>
        
        {/* Day 2 - First Timeline */}
        <div className="w-full max-w-6xl">
          <HorizontalTimeline events={day2Events} />
        </div>

        {/* Day 2 - Second Timeline */}
        <div className="w-full max-w-6xl mt-10">
          <HorizontalTimeline events={day2EventsPart2} />
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
