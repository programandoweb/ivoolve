/**
 * ---------------------------------------------------
 *  Desarrollado por: Jorge Méndez - Programandoweb
 *  Correo: lic.jorgemendez@gmail.com
 *  Celular 3115000926
 *  website: Programandoweb.net
 *  Proyecto: Ivoolve *  
 * ---------------------------------------------------
 */

import Image from "next/image";

const LogoImage = () => (
  <div className="flex justify-center items-center">
    <Image
      src="/img/layout/logo.png"
      alt={(process.env.NEXT_PUBLIC_NAME + " " + process.env.NEXT_PUBLIC_NAME2) || ""}
      title={(process.env.NEXT_PUBLIC_NAME + " " + process.env.NEXT_PUBLIC_NAME2) || ""}
      width={186}
      height={186}
      priority
      className="rounded-lg w-full max-w-[86px] md:max-w-[130px]" // Ajusta el tamaño
    />
  </div>
);

export default LogoImage;
