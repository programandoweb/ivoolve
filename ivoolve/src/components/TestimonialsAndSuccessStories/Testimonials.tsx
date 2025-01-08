/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular: 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Avatar from '@/components/Avatar';

// Definición de la interfaz para los testimonios
interface Review {
    content: string; // Contenido del testimonio
    name: string; // Nombre del autor
    featured: string; // Cargo o posición del autor
    image: string; // URL de la imagen del autor
}

// Definición de las props del componente
interface TestimonialCarouselProps {
    id: string; // Identificador único de la sección
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ id }) => {
    // Datos ficticios para los testimonios
    const reviews: Review[] = [
        {
            content: "Ivoolve nos ayudó a mejorar la productividad de nuestra empresa en un 150% en tan solo 2 meses.",
            name: "Carla Gómez",
            featured: "CEO en TechCorp",
            image: "/img/avatars/avatar1.png",
        },
        {
            content: "Gracias a Ivoolve, nuestras ventas se duplicaron y hemos alcanzado nuevos mercados.",
            name: "Juan Pérez",
            featured: "Gerente de Ventas en MarketPlus",
            image: "/img/avatars/avatar2.png",
        },
        {
            content: "El equipo de Ivoolve es increíble. Transformaron nuestra plataforma en algo completamente funcional y atractivo.",
            name: "Laura Martínez",
            featured: "Fundadora en StartupX",
            image: "/img/avatars/avatar3.png",
        },
        {
            content: "Con Ivoolve, automatizamos nuestros procesos internos, ahorrando tiempo y recursos valiosos.",
            name: "Luis Fernández",
            featured: "Director de Operaciones en BizFlow",
            image: "/img/avatars/avatar4.png",
        },
        {
            content: "El soporte técnico y la atención al cliente de Ivoolve es insuperable. Recomendado 100%.",
            name: "Ana Ruiz",
            featured: "Gerente de Proyectos en ProBuild",
            image: "/img/avatars/avatar5.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const handlePrevious = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
            setFade(true);
        }, 300);
    }, [reviews.length]);

    const handleNext = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
            setFade(true);
        }, 300);
    }, [reviews.length]);

    // Control de autoplay
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                handleNext();
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, handleNext]);

    const { content: quote, name: author, featured: position, image } = reviews[currentIndex];

    return (
        <section className="py-8 text-center" id={id} aria-labelledby="testimonials-title">
            <div className="container mx-auto px-4">
                <h2 id="testimonials-title" className="text-3xl font-bold">
                    Lo que dicen nuestros clientes
                </h2>

                <div
                    className={`relative p-8 rounded-lg transition-opacity duration-500 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <p className="text-lg font-light italic text-gray-700 mb-6">{quote}</p>

                    <div className="flex flex-col items-center">
                        <Avatar src={image} alt={`${author} foto`} />
                        <h3 className="text-xl font-semibold text-purple-700 mt-4">{author}</h3>
                        {position && <p className="text-gray-500">{position}</p>}
                    </div>
                </div>
                {/* Controles de Navegación */}
                <div className="flex justify-center space-x-4 mt-8">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition"
                    >
                        Siguiente
                    </button>
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition"
                    >
                        {isPlaying ? 'Pausar' : 'Reanudar'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
