/**
 * Visualización Dinámica de Software
 */

import React from "react";

const DynamicVisualization = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-brand-600 mb-10">
        Mira cómo funciona Ivoolve
      </h2>
      <video
        className="mx-auto rounded-lg shadow-lg"
        controls
        width="800"
        height="450"
      >
        <source src="/videos/ivoolve-demo.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </div>
  </section>
);

export default DynamicVisualization;
