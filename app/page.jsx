import HeroSection from './components/HomePage/HeroSection';
import SliderTaglines from './components/HomePage/SliderTaglines';
import BrandSection from './components/HomePage/BrandSection';
import ReputationSection from './components/HomePage/ReputationSection';
import PlatformSection from './components/HomePage/PlatformSection';
import EducationSection from './components/HomePage/EducationSection';
import ContactSection from './components/HomePage/ContactSection';

// Importa las secciones de About Page
import WhoAreWe from './components/About/WhoAreWe';
import VisionMission from './components/About/VisionMission';
import Principles from './components/About/Principles';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Secciones de Home Page */}
      <HeroSection />
      <SliderTaglines />
      <BrandSection />
      <ReputationSection />
      <PlatformSection />
      <EducationSection />
      <ContactSection />

      {/* Secciones de About Page */}
      <WhoAreWe />
      <VisionMission />
      <Principles />
    </main>
  );
}
