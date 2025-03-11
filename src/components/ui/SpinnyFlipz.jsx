import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/posters/sholay.png",
  "/posters/ddlj.png",
  "/posters/agneepath.png",
  "/posters/sholay.png",
  "/posters/ddlj.png",
  "/posters/agneepath.png",
  "/posters/sholay.png",
];

const SpinnyFlipz = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    const cards = wheel.querySelectorAll(".wheel__card");

    const setup = () => {
      let radius = wheel.offsetWidth / 2;
      let center = radius;
      let slice = 360 / cards.length;
      let DEG2RAD = Math.PI / 180;

      gsap.set(cards, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    };

    setup();

    // Continuous spinning animation
    const spinTween = gsap.to(wheel, {
      rotation: "+=360",
      ease: "linear",
      duration: 70,
      repeat: -1,
    });

    return () => {
      spinTween.kill();
    };
  }, []);

  return (
    <div className="w-screen h-full text-white font-nunito overflow-x-hidden">
      <section className="absolute inset-x-0 top-[80px] w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div
          ref={wheelRef}
          className="absolute top-0 flex items-center justify-center w-[300vw] h-[300vw] max-w-[2000px] max-h-[2000px] left-1/2 -translate-x-1/2"
        >
          {images.concat(images, images, images).map((src, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-[6%] max-w-[200px] aspect-square wheel__card"
            >
              <img
                src={src}
                alt="wheel item"
                className="w-full pointer-events-none absolute"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpinnyFlipz;
