import React from "react";

const VerticalTimeline = ({ events }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col items-center text-center">
       
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-lg font-bold text-white">{event.time}</p>
            <h3 className="text-2xl text-yellow-500 font-semibold">{event.title}</h3>
            <p className="text-white">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
