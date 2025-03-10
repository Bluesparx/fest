
import { Marquee } from "./magicui/marquee";

function Hero() {
  return (
    <div className=" w-full h-full bg-black" >
      {/* Top Left (Up) */}
      <div className="absolute top-6 left-4 p-4">
        <Marquee pauseOnHover={true}>
          <img
            src="/posters/sholay.png"
            alt="Sholay"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
          <img
            src="/posters/ddlj.png"
            alt="DDLJ"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
          <img
            src="/posters/agneepath.png"
            alt="Agneepath"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
        </Marquee>
      </div>

      {/* Top Right (Down) */}
      <div className="absolute top-6 right-4 p-4">
        <Marquee pauseOnHover={true} direction="down">
          <img
            src="/posters/sholay.png"
            alt="Sholay"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
          <img
            src="/posters/ddlj.png"
            alt="DDLJ"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
          <img
            src="/posters/agneepath.png"
            alt="Agneepath"
            className="w-40 h-60 rounded-lg border-2 border-white shadow-lg"
          />
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
