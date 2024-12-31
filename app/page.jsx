// File: /app/page.jsx
import HeroSection from './components/HomePage/HeroSection';
import SliderTaglines from './components/HomePage/SliderTaglines';
import BrandSection from './components/HomePage/BrandSection';
import ReputationSection from './components/HomePage/ReputationSection';
import PlatformSection from './components/HomePage/PlatformSection';
import EducationSection from './components/HomePage/EducationSection';
import ContactSection from './components/HomePage/ContactSection';

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
