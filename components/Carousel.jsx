import React from 'react'

const Carousel = () => {
    return (
        <div className='h-1/2 flex-col flex-between px-4'>
            <div className='flex flex-row w-full items-center'>
                <div className="border-b border-green-900 flex-grow w-full m-5"></div>
                <h1 className='titulos bold font-jura'>AMIGXS</h1>
                <div className="border-b border-green-900 flex-grow w-full m-5"></div>
            </div>
            <div className="slider w-full px-4">
                <div className='slide-track'>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/alpogo.png"
                            alt="alpogo" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/pdg.png"
                            alt="pielldegallina" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/pezvolcan.png"
                            alt="pez volcan" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full'
                            src="../assets/images/quality.png"
                            alt="quality" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/alpogo.png"
                            alt="alpogo" />
                    </div>
                    <div className='slide hover:translate-z-20'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/pdg.png"
                            alt="pielldegallina" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full hover:translate-z-20'
                            src="../assets/images/pezvolcan.png"
                            alt="pez volcan" />
                    </div>
                    <div className='slide'>
                        <img className='w-full h-full '
                            src="../assets/images/quality.png"
                            alt="quality" />
                    </div>
                </div>
                <div className="border-b border-green-900 flex-grow w-full py-4"></div>
            </div>
        </div>
    )
}

export default Carousel