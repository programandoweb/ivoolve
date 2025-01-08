/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  Website: Programandoweb.net
 *  Proyecto: Ivoolve
 * ---------------------------------------------------
 */

'use client';

import Image from 'next/image';

interface AvatarProps {
    border?: boolean | number; // Permitir booleano o número
    src?: string; // Ruta opcional de la imagen
    alt?: string; // Texto alternativo opcional
}

const name1 = process.env.NEXT_PUBLIC_NAME || '';
const name2 = process.env.NEXT_PUBLIC_NAME2 || '';

const Avatar: React.FC<AvatarProps> = ({ border, src, alt }) => {
    // Verificar si es móvil mediante media queries en lugar de Redux
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    // Definir la clase de borde dependiendo de si es un booleano o un número
    const borderClass =
        typeof border === 'number'
            ? `border-${border} border-white`
            : border
            ? 'border-4 border-white md:border-8'
            : '';

    // Ruta de la imagen, usando src o una imagen predeterminada
    const imageUrl = src || '/img/avatar.jpg';

    // Texto alternativo predeterminado
    const altText = alt || `${name1} ${name2}`;

    return (
        <div className="flex justify-center text-center">
            <Image
                loading="lazy"
                src={imageUrl}
                width={isMobile ? 220 : 250} // Tamaño para móvil y escritorio
                height={isMobile ? 220 : 250} // Tamaño para móvil y escritorio
                alt={altText} // Aplicar el texto alternativo
                className={`rounded-full overflow-hidden ${borderClass}`} // Aplicar la clase de borde
            />
        </div>
    );
};

export default Avatar;
