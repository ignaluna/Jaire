import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Galery = () => {
    const pathName = usePathname();
    return (
        <div className="flex-col md:h-screen w-screen max-md:h-[300px] max-md:px-16 bg-[url('/assets/images/fondos/fondoartistas2.png')] bg-cover filter backdrop-blur-sm bg-no-repeat flex-center">
            <div className="flex justify-evenly items-center gap-16 w-1/2 h-1/4 max-md:h-[50%] max-md:w-full border border-green-900 p-2 rounded-lg bg-green-900 bg-opacity-30 ">
                <Link className="flex flex-col items-center w-full" href="https://www.instagram.com/terriproducciones" target="_blank" rel="noopener noreferrer">
                    <div className="flex-col border-r border-green-900 w-full h-full my-4 flex-center transform transition-transform duration-300 hover:-translate-y-1">
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
                <Link className="flex flex items-center w-full" href={`mailto:${"terriproduccionescontacto@gmail.com"}`} target="_blank" rel="noopener noreferrer">
                    <div className="flex-col border-l border-green-900 w-full h-full my-4 flex-center">
                        <Image
                            src="/assets/icons/contact/gmail.svg"
                            alt="gmail"
                            width={100}
                            height={100}
                            className="transform transition-transform duration-300 hover:-translate-y-1"
                        />
                    </div>
                </Link>
            </div>
            {pathName === "/create-show" &&
                <h1 className=" font-jura text-white bg-black rounded p-2 border-l border-green-900 bg-green-900 bg-opacity-80"> Comunicate con Nosotros para subir tu show a nuestra cartelera :D</h1>
            }
        </div>
    )
}

export default Galery