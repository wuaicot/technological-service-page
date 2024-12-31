import HeroSection from './components/HomePage/HeroSection';
import SliderTaglines from './components/HomePage/SliderTaglines';
import BrandSection from './components/HomePage/BrandSection';
import ReputationSection from './components/HomePage/ReputationSection';
import PlatformSection from './components/HomePage/PlatformSection';
import EducationSection from './components/HomePage/EducationSection';
import ContactSection from './components/HomePage/ContactSection';
import WhoAreWe from './components/About/WhoAreWe';
import VisionMission from './components/About/VisionMission';
import Principles from './components/About/Principles';

export default function HomePage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Home Page Sections */}
      <section className="snap-start h-screen">
        <HeroSection />
      </section>
      <section className="snap-start h-screen">
        <SliderTaglines />
      </section>
      <section className="snap-start h-screen">
        <BrandSection />
      </section>
      <section className="snap-start h-screen">
        <ReputationSection />
      </section>
      <section className="snap-start h-screen">
        <PlatformSection />
      </section>
      <section className="snap-start h-screen">
        <EducationSection />
      </section>
      <section className="snap-start h-screen">
        <ContactSection />
      </section>

      {/* About Page Sections */}
      <section className="snap-start h-screen">
        <WhoAreWe />
      </section>
      <section className="snap-start h-screen">
        <VisionMission />
      </section>
      <section className="snap-start h-screen">
        <Principles />
      </section>
    </main>
  );
}
