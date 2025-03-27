import Footer from "./Footer";
import { Phone, Mail } from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const coreTeam = [
  { id: 1, image: "/team/prakriti.png", name: "Prakriti Jaiswal", position: "President", phone: "+91 9717378434", email: "president.ucc.igdtuw@gmail.com" },
  { id: 2, image: "/team/rishita.jpg", name: "Rishita Makde", position: "Vice President", phone: "+91 9821702730", email: "vicepresident.ucc.igdtuw@gmail.com" },
  { id: 3, image: "/team/Priyal.jpg", name: "Priyal Gupta", position: "General Secretary", phone: "+91 7701803605", email: "generalsecretary.ucc.igdtuw@gmail.com" },
  { id: 4, image: "/team/astha.jpg", name: "Astha Ojha", position: "Treasurer", phone: "+91 9560639457", email: "treasurer.ucc.igdtuw@gmail.com" },
  { id: 5, image: "/team/devika.jpg", name: "Devika Sharma", position: "Public Relations Officer (PRO)" , phone: "+91 9205868389", email: "profficer.ucc.igdtuw@gmail.com" },
  { id: 6, image: "/team/sakshi.png", name: "Sakshi Shroff", position: "Event Head", phone: "+91 7596814605", email: "eventcoordinator.ucc.igdtuw@gmail.com" },
  { id: 7, image: "/team/meha.jpg", name: "Meha Jain", position: "Event Head", phone: "+91 9990199276", email: "eventcoordinator.ucc.igdtuw@gmail.com" },
];


const creativeTeam = [
  { id: 1, image: "/team/Creative/Deepasha.jpg", name: "Deepasha" },
  { id: 2, image: "/team/Creative/Bhoomika.png", name: "Bhoomika Meena" },
  { id: 3, image: "/team/Creative/Richa.png", name: "Richa" },
];

const techTeam = [
  { id: 1, image: "/team/Tech/Nazia.jpg", name: "Nazia Hassan" },
  { id: 2, image: "/team/Tech/Riddhi.png", name: "Riddhi Rustagi"},
];

const ContentTeam = [
  { id: 1, image: "/team/Content/Navya.jpeg", name: "Navya Kataria" },
  { id: 2, image: "/team/Content/Ruchika.jpeg", name: "Ruchika Patro"},
];

const HRTeam = [
  { id: 1, image: "/team/HR/Gunjan.jpg", name: "Gunjan" },
  
];

const marketingTeam = [
  { id: 1, image: "/team/marketing1.jpg", name: "Sanya Kapoor" },
  { id: 2, image: "/team/marketing2.jpg", name: "Ishita Mehta" },
];

const sponsorshipTeam = [
  { id: 1, image: "/team/sponsi/Neha.jpg", name: "Neha" },
  { id: 2, image: "/team/sponsi/Harjas.jpg", name: "Harjas Kaur" },
  { id: 3, image: "/team/sponsi/Avni.png", name: "Avni Goyal" },
  { id: 4, image: "/team/sponsi/Astha.png", name: "Astha Panda" },
  { id: 5, image: "/team/sponsi/Khushboo.jpg", name: "Khushboo Rana" },
  { id: 6, image: "/team/sponsi/Shubhi.jpg", name: "Shubhi Vashisht" },
];

const EMTeam = [
  { id: 1, image: "/team/EM/Anshika.jpg", name: "Anshika Ahuja" },
  { id: 2, image: "/team/EM/Jhanvi.jpg", name: "Jhanvi Madan" },
  { id: 3, image: "/team/EM/Tania.jpg", name: "Tania Shaik" },
  { id: 4, image: "/team/EM/Sukriti.png", name: "Sukriti Hansraj" }
];

const designTeam = [
  { id: 1, image: "/team/design1.jpg", name: "Rohan Sharma", position: "Design Head" },
  { id: 2, image: "/team/design2.jpg", name: "Neha Kapoor", position: "Graphic Designer" },
];

const PRTeam = [
  { id: 1, image: "/team/PR/Mahita.jpg", name: "Mahita Boyina" },
  { id: 2, image: "/team/PR/Raksha.jpg", name: "Raksha Narayan" },
  { id: 3, image: "/team/PR/Vanshika.jpg", name: "Vanshika Sardana" },
  { id: 4, image: "/team/PR/Diva.JPG", name: "Diva Yadav" },
  { id: 5, image: "/team/PR/Juhi.JPG", name: "Juhi Verma" },
  
];
const MediaTeam = [
  { id: 1, image: "/team/Media/Adiba.jpg", name: "Adiba" },
  { id: 2, image: "/team/Media/Chahal.jpeg", name: "Chahal" },
  { id: 3, image: "/team/Media/Daisy.jpg", name: "Daisy" },
  { id: 4, image: "/team/Media/Mahak.png", name: "Diva Yadav" },
  { id: 5, image: "/team/Media/priyanshi_.jpg", name: "Priyanshi" },
  
];

const teams = [
  { title: "Cores", members: coreTeam, showContacts: true },
  { title: "Creative Leads", members: creativeTeam, showContacts: false },
  { title: "Content Leads", members: ContentTeam, showContacts: false },
  { title: "EM Leads", members: EMTeam, showContacts: false },
  { title: "Tech Leads", members: techTeam, showContacts: false },
  { title: "Sponsorship Leads", members: sponsorshipTeam, showContacts: false },
  { title: "Media Leads", members: MediaTeam, showContacts: false },
  { title: "PR Leads", members: PRTeam, showContacts: false },
  { title: "HR and Logistics Lead", members: HRTeam, showContacts: false },
 
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TeamSection = ({ title, team, showContacts }) => (
  <div className="w-[85vw] md:w-[80vw] mx-auto overflow-hidden my-12">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white uppercase font-imenglish mb-6">
      {title}
    </h2>
    <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
      {team.map((member, index) => (
        <div key={index} className="flex flex-col items-center p-4">
          <div className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 bg-black/50 backdrop-blur-md rounded-lg flex flex-col items-center justify-center shadow-lg p-4">
            <div className="w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 overflow-hidden rounded-full border-4 border-yellow-400">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <h3 className="mt-4 text-xl lg:text-2xl font-bold text-center font-imenglish text-white">
              {member.name}
            </h3>
            <p className="text-sm lg:text-lg text-gray-300 font-playful">
              {member.position}
            </p>
            {showContacts && (
              <div className="flex items-center gap-4 mt-2 text-gray-200">
                <a href={`tel:${member.phone}`} className="hover:text-yellow-400">
                  <Phone size={22} />
                </a>
                <a href={`mailto:${member.email}`} className="hover:text-yellow-400">
                  <Mail size={22} />
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

const DesktopTeam = () => {
  return (
    <>
      <div className="relative min-h-screen z-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img src="team.jpg" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative w-screen z-10 p-4">
          <header className="text-center mt-16">
            <h1 className="text-3xl mt-40 sm:text-4xl md:text-5xl lg:text-6xl font-imenglish font-semibold mb-4 text-white uppercase">
              Meet the Team
            </h1>
          </header>
          {teams.map((team, index) => (
            <TeamSection key={index} title={team.title} team={team.members} showContacts={team.showContacts} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DesktopTeam;
