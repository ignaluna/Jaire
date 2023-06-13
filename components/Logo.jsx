import React from 'react'

const Logo = () => {
    return (
        <div className="relative flex justify-center items-center w-screen h-screen">
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover blur-sm"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/images/videofondo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="flex relative justify-center items-center m-4 bg-black bg-opacity-75 rounded-lg">
                <img src="/assets/images/LogoBlanco.png" alt="Logo" className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl logo animate-fade-in" />
            </div>
        </div>
    )
}

export default Logo