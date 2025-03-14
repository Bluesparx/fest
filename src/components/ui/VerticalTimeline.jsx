import React from "react";

const VerticalTimeline = ({ events }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-row w-[90vw] items-center pr-3">
            <p className="text-md text-yellow-500  flex-1 font-bold text-white">{event.time}</p>
          <div className="border-l-2 flex-3  bg-black/60 px-8 py-3 rounded-l-sm rounded-r-xl border-yellow-500 pl-4">
            
            <h3 className="text-xl text-yellow-500 font-semibold">{event.title}</h3>
            <p className="text-white text-sm">{event.description}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
