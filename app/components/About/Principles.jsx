// Location: /app/components/About/Principles.jsx
import React from "react";

const Principles = () => {
  return (
    <section className="py-16 bg-gray-900 text-white px-8" id="principles">
      <h2 className="text-4xl font-bold mb-6">Our Principles</h2>
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li>
          <strong>Observe:</strong> Your needs and wants.
        </li>
        <li>
          <strong>Create:</strong> Unique solutions to your problems.
        </li>
        <li>
          <strong>Shape:</strong> Your digital identity with our expertise.
        </li>
        <li>
          <strong>Shine:</strong> In this competitive world of marketing.
        </li>
      </ul>
      <p className="mt-6 text-lg">
        Observe, Create, Shape, and Shine — these principles drive us. What we
        do at S3A Technologies is guided by these pillars.
      </p>
    </section>
  );
};

export default Principles;
