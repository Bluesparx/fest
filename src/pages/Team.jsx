import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import DesktopTeam from "@/components/DesktopTeam";
import MobileTeam from "@/components/MobileTeam";

const TeamsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? <MobileTeam /> : <DesktopTeam />}
      <Footer />
    </>
  );
};

export default TeamsPage;
