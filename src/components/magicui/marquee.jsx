import React from "react";

export function Marquee({
  className = "",
  direction = "up", // "up" or "down"
  pauseOnHover = false,
  children,
  speed = 20, // Adjust speed (higher = slower)
  ...props
}) {
  return (
    <>
      <style>
        {`
          @keyframes marqueeUp {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); } /* Moves only half the height for seamless effect */
          }

          @keyframes marqueeDown {
            from { transform: translateY(-50%); }
            to { transform: translateY(0); }
          }

          .animate-marquee-up {
            animation: marqueeUp ${speed}s linear infinite;
          }

          .animate-marquee-down {
            animation: marqueeDown ${speed}s linear infinite;
          }

          .pause-on-hover:hover {
            animation-play-state: paused !important;
          }

          .filmstrip {
            position: relative;
            border: 10px dotted white; /* Dotted border */
            padding: 10px;
            background: black;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          }

          .filmstrip::before,
          .filmstrip::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 100%;
            background: radial-gradient(white 20%, transparent 20%);
            background-size: 8px 20px;
            top: 0;
          }

          .filmstrip::before {
            left: -25px;
          }

          .filmstrip::after {
            right: -25px;
          }
        `}
      </style>
      <div {...props} className={`filmstrip h-[500px] w-[200px] ${className}`}>
        <div
          className={`flex flex-col ${
            direction === "up" ? "animate-marquee-up" : "animate-marquee-down"
          } ${pauseOnHover ? "pause-on-hover" : ""}`}
        >
          {/* Duplicate content for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              {children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
