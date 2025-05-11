import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import VisionSection from '../components/VisionSection/VisionSection';
import ChallengesSection from '../components/ChallengesSection/ChallengesSection';
import SolutionSection from '../components/SolutionSection/SolutionSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/Footer/Footer';
import StartNowSection from '../components/StartNowSection/StartNowSection';

const LandingPage: React.FC = () => (
  <>
    <Header />
    <HeroSection />
    <VisionSection />
    <ChallengesSection />
    <SolutionSection />
    <FeaturesSection />
    <StartNowSection />
    <Footer />
    {/* Other sections will be added here: Vision, Challenges, Solution, Features, Footer */}
  </>
);

export default LandingPage; 