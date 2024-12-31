// Location: /app/components/About/VisionMission.jsx
import React from "react";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-800 text-white px-8" id="vision-mission">
      <h2 className="text-4xl font-bold mb-6">Vision & Mission</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-teal-400">Vision</h3>
        <p className="text-lg leading-relaxed mt-2">
          Our vision is to put each one of you on the map of success with the
          unique power of digital technology.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-teal-400">Mission</h3>
        <p className="text-lg leading-relaxed mt-2">
          To provide state-of-the-art scalable IT solutions that give you a
          competitive edge in the world of business and technology.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
