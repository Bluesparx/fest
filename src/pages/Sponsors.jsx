import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const sponsors = {
  titleSponsors: [
    { id: 1, name: "Title comp", logo: "/api/placeholder/140/140", caption: "Title Sponsor" },
    { id: 2, name: "Title comp", logo: "/api/placeholder/140/140", caption: "Title Sponsor" },
    { id: 3, name: "Title comp", logo: "/api/placeholder/140/140", caption: "Title Sponsor" }
  ],
  coSponsors: [
    { id: 4, name: "Philips", logo: "/sponsors/philips.png", caption: "Sponsor" },
    { id: 5, name: "ICICI", logo: "/sponsors/icici.png", caption: "Sponsor" },
    { id: 6, name: "MuscleBlaze", logo: "/sponsors/mb.png", caption: "Sponsor" },
    { id: 7, name: "Punjab & Sind Bank", logo: "/sponsors/psb.png", caption: "Sponsor"},
    { id: 8, name: "Slick", logo: "/sponsors/slick.png", caption: "Sponsor"},
    { id: 9, name: "Top One Percent", logo: "/sponsors/top1.png", caption: "Sponsor"},
   ],
  otherSponsors: [
    { id: 13, name: "company", logo: "/api/placeholder/140/140", caption: "Community Partner" },
    { id: 14, name: "company", logo: "/api/placeholder/140/140", caption: "Media Partner" },
    { id: 15, name: "company", logo: "/api/placeholder/140/140", caption: "Technology Partner" },
    { id: 16, name: "company", logo: "/api/placeholder/140/140", caption: "Design Partner" },
    { id: 17, name: "company", logo: "/api/placeholder/140/140", caption: "Food Partner" },
    { id: 18, name: "company", logo: "/api/placeholder/140/140", caption: "Regional Partner" }
  ]
};

const SponsorCard = ({ sponsor }) => (
  <Card className="bg-black/80 border border-yellow-600/40 shadow-md shadow-yellow-600/20 transition-all duration-300">
    <CardContent className="p-4 flex flex-col items-center">
      <div className="mb-3 p-2 bg-white/10 rounded-lg flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36">
        <img 
          src={sponsor.logo} 
          alt={`${sponsor.name} logo`} 
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain" 
        />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-center font-imenglish">{sponsor.name}</h3>
      <p className="text-gray-400 text-xs sm:text-sm text-center mt-1">{sponsor.caption}</p>
    </CardContent>
  </Card>
);

const SponsorSection = ({ title, sponsors, isTitle = false }) => (
  <div className="mb-12 sm:mb-16 px-4">
    <h2 className="text-xl sm:text-2xl font-imenglish font-semibold mb-6 sm:mb-8 text-center uppercase tracking-wider text-white">
      {title}
    </h2>
    <div className={` text-white grid grid-cols-1 ${isTitle ? 'sm:grid-cols-2 md:w-[60vw] mx-auto md:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-4 sm:gap-6 justify-center`}> 
      {sponsors.map(sponsor => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  </div>
);

const SponsorsPage = () => {
  return (
    <>
      <div className="relative overflow-x-hidden z-20 min-h-screen bg-[#6d0203] overflow-hidden ">
        <div className="top-0 z-10 w-full min-h-screen flex flex-col items-center bg-black/10">
          <div className="relative min-h-screen w-full sm:w-[75vw] mt-20 sm:mt-38 mb-8 px-4">
            {/* <SponsorSection 
              title="Title Sponsors" 
              sponsors={sponsors.titleSponsors} 
              isTitle={true} 
            /> */}
            <SponsorSection 
              title="Sponsors" 
              sponsors={sponsors.coSponsors} 
            />
            {/* <SponsorSection 
              title="Partners & Supporters" 
              sponsors={sponsors.otherSponsors} 
            /> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SponsorsPage;