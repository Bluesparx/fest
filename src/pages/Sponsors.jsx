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
    { id: 4, name: "co sponsor company ", logo: "/api/placeholder/140/140", caption: "Co Sponsor" },
    { id: 5, name: "co sponsor company ", logo: "/api/placeholder/140/140", caption: "Associate Sponsor" },
    { id: 6, name: "co sponsor company ", logo: "/api/placeholder/140/140", caption: "Sponsor" },
    { id: 7, name: "co sponsor company ", logo: "/api/placeholder/140/140", caption: "Sponsor" }
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
      <div className="mb-3 p-2 bg-white/10 rounded-lg flex items-center justify-center w-36 h-36">
        <img 
          src={sponsor.logo} 
          alt={`${sponsor.name} logo`} 
          className="w-32 h-32 object-contain" 
        />
      </div>
      <h3 className="text-lg font-bold text-center font-imenglish">{sponsor.name}</h3>
      <p className="text-gray-400 text-sm text-center mt-1">{sponsor.caption}</p>
    </CardContent>
  </Card>
);

const SponsorSection = ({ title, sponsors, isTitle = false }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-imenglish font-semibold mb-8 text-center uppercase tracking-wider">
      {title}
    </h2>
    <div className={`grid ${isTitle ? 'md:w-[60vw] mx-auto md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} m-4 gap-6 justify-evenly justify-center `}>
      {sponsors.map(sponsor => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  </div>
);

const SponsorsPage = () => {
  return (
    <>
    <div className="relative overflow-x-hidden z-20 min-h-screen bg-[#650000] w-[100vw]">
      
      <div className="absolute top-0 z-20 w-[100vw] min-h-screen">
        <div className="container mx-auto mt-32 px-4">
          
          <SponsorSection 
            title="Title Sponsors" 
            sponsors={sponsors.titleSponsors} 
            isTitle={true} 
          />

          <SponsorSection 
            title="Sponsors" 
            sponsors={sponsors.coSponsors} 
          />

          <SponsorSection 
            title="Partners & Supporters" 
            sponsors={sponsors.otherSponsors} 
          />
        </div>
      </div>
      </div>
      <Footer/>
      </>
  );
};

export default SponsorsPage;
