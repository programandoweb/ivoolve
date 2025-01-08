/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

'use client';

import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction/CallToAction ';
import ComparisonTable from '@/components/ComparisonTable';
//import DynamicVisualization from '@/components/DynamicVisualization';
import FeaturedFunctionalities from '@/components/FeaturedFunctionalities';
import Footer from '@/components/Footer/Footer';
import GuaranteeSection from '@/components/GuaranteeSection';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import PricingPlans from '@/components/PricingPlans';
import TestimonialsAndSuccessStories from '@/components/TestimonialsAndSuccessStories/Testimonials';
import React from 'react';

const AccountingLanding = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Cabecera de la página */}
      <Header />

      {/* Hero Section */}
      <Hero id="hero" />

      {/* Beneficios principales */}
      <Benefits id="benefits" />

      {/* Llamado a la acción */}
      <CallToAction id="cta" />

      {/* Testimonios y Casos de Éxito */}
      <TestimonialsAndSuccessStories id="testimonials" />

      {/* Funcionalidades Destacadas */}
      <FeaturedFunctionalities id="functionalities" />

      {/* Comparativa con la Competencia */}
      <ComparisonTable id="comparison" />

      {/* Visualización Dinámica (opcional) */}
      {/*
        <DynamicVisualization id="visualization" />  
      */}

      {/* Planes y Precios */}
      <PricingPlans id="pricing" />

      {/* Formulario para capturar leads */}
      <LeadForm id="lead-form" />

      {/* Garantía */}
      <GuaranteeSection id="guarantee" />

      {/* Pie de página */}
      <Footer />    
    </main>
  );
};

export default AccountingLanding;










