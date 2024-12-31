// Location: /app/components/About/WhoAreWe.jsx
import React from "react";

const WhoAreWe = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-8" id="who-are-we">
      <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
      <p className="text-lg leading-relaxed mb-6">
        We, at <span className="text-teal-400">S3A Technologies</span>, are a
        group of highly-qualified and innovative individuals. The ‘S’ in our
        name stands for ‘support’, the ‘A’ for ‘achieving’, and 3 for 3x
        efficiency. That’s how we do it at S3A Technologies!
      </p>
      <p className="text-lg leading-relaxed mb-6">
        With the expertise of IT wizards, we offer the best-in-class digital
        solutions for you and your company. We’re not just here to provide a
        service, we are here to provide solutions. Understanding the current
        market pressures, analyzing your company’s needs, and delivering the
        desired success to your doorstep.
      </p>
      <p className="text-lg leading-relaxed">
        But don’t take our word for it, listen to the experienced Technocrats,
        our esteemed clients, and private businesses that swear by us.
      </p>
      <a
        href="#testimonials"
        className="mt-4 inline-block px-6 py-3 bg-teal-400 text-black font-medium rounded hover:bg-teal-500 transition"
      >
        Learn More -- Testimonials
      </a>
    </section>
  );
};

export default WhoAreWe;
