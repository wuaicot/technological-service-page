import HeroSection from '../app/components/HomePage/HeroSection.jsx';
import SliderTaglines from '../app/components/HomePage/SliderTaglines.jsx';
import BrandSection from '../app/components/HomePage/BrandSection.jsx';
import ReputationSection from '../app/components/HomePage/ReputationSection.jsx';
import PlatformSection from '../app/components/HomePage/PlatformSection.jsx';
import EducationSection from '../app/components/HomePage/EducationSection.jsx';
import ContactSection from '../app/components/HomePage/ContactSection.jsx';

import WhoAreWe from '../app/components/About/WhoAreWe.jsx';
import VisionMission from '../app/components/About/VisionMission.jsx';
import Principles from '../app/components/About/Principles.jsx';

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
