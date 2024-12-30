// File: /app/page.jsx
import HeroSection from './components/homepage/HeroSection';
import SliderTaglines from './components/homepage/SliderTaglines';
import BrandSection from './components/homepage/BrandSection';
import ReputationSection from './components/homepage/ReputationSection';
import PlatformSection from './components/homepage/PlatformSection';
import EducationSection from './components/homepage/EducationSection';
import ContactSection from './components/homepage/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <HeroSection />
      <SliderTaglines />
      <BrandSection />
      <ReputationSection />
      <PlatformSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
