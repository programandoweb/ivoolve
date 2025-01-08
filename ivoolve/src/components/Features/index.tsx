/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

import React from "react";
import FeatureCard from "./FeatureCard";

const Features: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Beneficios de trabajar con un contador
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Asesoramiento experto"
          description="Recibe ayuda personalizada para cumplir con tus obligaciones fiscales."
        />
        <FeatureCard
          title="Ahorro de tiempo"
          description="Deja las tareas contables en manos de un profesional y enfócate en tu negocio."
        />
        <FeatureCard
          title="Cumplimiento garantizado"
          description="Asegúrate de cumplir con la normatividad tributaria."
        />
      </div>
    </div>
  </section>
);

export default Features;
