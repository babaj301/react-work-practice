import React from 'react';
import Banner from '../landing-components/Banner';
import Nav from '../landing-components/Nav';
import Hero from '../landing-components/Hero';
import BrandSection from '../landing-components/BrandSection';
import GirlsSection from '../landing-components/GirlsSection';
import FeaturesSection from '../landing-components/FeaturesSection';
import PictureSection from '../landing-components/PictureSection';
import CardContainer from '../landing-components/CardContainer';
import AdSection from '../landing-components/AdSection';
import Footer from '../landing-components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <div className="px-28">
        <Nav />
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
