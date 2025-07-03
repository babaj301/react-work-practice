import React from "react";
import Nav from "../components/landing-components/Nav";
import Hero from "../components/landing-components/Hero";
import BrandSection from "../components/landing-components/BrandSection";
import GirlsSection from "../components/landing-components/GirlsSection";
import FeaturesSection from "../components/landing-components/FeaturesSection";
import PictureSection from "../components/landing-components/PictureSection";
import CardContainer from "../components/landing-components/CardContainer";
import AdSection from "../components/landing-components/AdSection";
import Footer from "../components/landing-components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <div className="pt-48 px-14 w-full overflow-x-hidden ">
        <Hero />
        <BrandSection />
        <GirlsSection />
        <FeaturesSection />
        <PictureSection />
        <CardContainer />
        <AdSection />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
