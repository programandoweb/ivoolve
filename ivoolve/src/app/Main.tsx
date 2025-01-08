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

import React from 'react';
import Header from '@/components/Header';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const AccountingLanding = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Header />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default AccountingLanding;










