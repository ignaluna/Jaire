"use client"
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Image from 'next/image';

const Logo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoClass, setVideoClass] = useState('w-full h-full object-cover blur-sm hidden');

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setVideoClass('w-full h-full object-cover blur-sm');
    }, 3000); // Tiempo de carga límite: 5 segundos

    return () => {
      clearTimeout(loadingTimeout); // Limpiar el timeout al desmontar el componente
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      <div className="absolute inset-0">
        <video
          className={videoClass}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
        >
          <source src="/assets/images/videofondo.mp4" type="video/mp4" />
        </video>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex relative justify-center items-center m-4 bg-black bg-opacity-75 rounded-lg">
          <Image
            src="/assets/images/LogoBlanco.png"
            alt="Logo"
            className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl logo"
            height={500}
            width={500}
          />
        </div>
      )}
    </div>
  );
};

export default Logo;
