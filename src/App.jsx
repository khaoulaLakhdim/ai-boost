import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactButton from './components/ContactButton';
import AIBoostSection from './components/AIBoostSection';
import SmartConversSection from './components/SmartConversSection';
import SmartConversWhySection from './components/SmartConversWhySection';
import SmartConversFeaturesSection from './components/SmartConversFeaturesSection';
import TestimonialCarouselSection from './components/TestimonialCarouselSection';
import SmartConversContactSection from './components/SmartConversContactSection';
import HomeBenefitsSection from './components/HomeBenefitsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [section, setSection] = useState('home');

  const handleContactClick = () => {
    setSection('smartconvers');
    setTimeout(() => {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Navbar onMenuClick={setSection} />
      {section === 'home' && <>
        <HeroSection />
        <ServicesSection />
        <HomeBenefitsSection />
        <TestimonialCarouselSection />
      </>}
      {section === 'aiboost' && <>
        <AIBoostSection />
      </>}
      {section === 'smartconvers' && <>
        <SmartConversSection />
        <SmartConversWhySection />
        <SmartConversFeaturesSection />
        <TestimonialCarouselSection />
        <SmartConversContactSection />
      </>}
      <Footer />
      <ContactButton onContactClick={handleContactClick} />
    </>
  );
}

export default App;
