import Image from "next/image"
import Link from "next/link"

const Galery = () => {
    return (
        <div className="h-screen w-screen bg-[url('/assets/images/fondos/fondoartistas.png')] bg-contain filter backdrop-blur-sm flex-center">
            <div className="flex justify-between items-center gap-16 w-1/2 h-1/4 border border-green-900 p-2 rounded-lg bg-green-900 bg-opacity-30 ">
                <Link className="flex flex-col items-center w-full" href="https://www.instagram.com/terriproducciones" target="_blank" rel="noopener noreferrer">
                    <div className="flex-col border-r border-green-900 w-full h-full flex-center transform transition-transform duration-300 hover:-translate-y-1">
                        <Image
                            src="/assets/icons/contact/instagram.svg"
                            alt="Instagram"
                            width={100}
                            height={100}
                        />
                    </div>
                </Link>
                <Link className="flex flex-col items-center w-full object-cover transform transition-transform duration-300 hover:-translate-y-1" href="https://wa.link/1pihhz" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/assets/icons/contact/whatsapp.svg"
                        alt="Ubicación"
                        width={100}
                        height={100}

                    />
                </Link>
                <Link className="flex flex items-center w-full h-full" href="https://wa.link/1pihhz" target="_blank" rel="noopener noreferrer">
                    <div className="flex-col border-l border-green-900 w-full h-full flex-center transform transition-transform duration-300 hover:-translate-y-1">
                        <Image
                            src="/assets/icons/contact/gmail.svg"
                            alt="gmail"
                            width={100}
                            height={100}
                        />
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default Galery