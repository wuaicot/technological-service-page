"use client"
import { useState, useEffect } from 'react';

const taglines = [
  "Don’t let technology be a barrier. Make it your business carrier!",
  "With S3A Technologies, you don’t just get services, you get solutions!",
  "A to Z IT solutions for every scale of business.",
  "Not just another IT company, we are your innovation partner!",
  "Bridge the gap between your brand and your audience.",
  "The one-stop solution to all your digital problems."
];

export default function SliderTaglines() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 text-center py-4">
      <h2 className="text-2xl font-semibold animate-fade-in">{taglines[currentTagline]}</h2>
    </div>
  );
}
