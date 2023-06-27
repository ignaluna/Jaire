import { Slider } from "@components/Swiper";
import Accordion from "@components/Accordion";
import Carousel from "@components/Carousel";
import Logo from "@components/Logo";
import Galery from "@components/Contact";
import Link from "next/link";

const data = [
  {
    question: "QUIENES SOMOS???",
    answer: "TERRIbles producciones",
    number: 1
  },
  {
    question: "SUMATE",
    answer:
      "+++++++++++++++++",
    number: 2
  },
  {
    question: "Question 3",
    answer:
      "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment."
  }
];

const Home = () => (
  <section className='flex w-full h-full flex-center flex-col '>

    {/* Imagen Logo + Reels */}

    <Logo />

    {/* Fondo espacio exterior */}

    <div className="bg-[url('/assets/images/fondos/marte.png')] bg-cover bg-bottom filter backdrop-blur-sm bg-no-repeat h-auto w-screen">

      {/* Amigxs */}

      <Carousel />

      {/* Slider with shows */}

      <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
        <Slider />
      </div>
    </div>
    {/* Quienes somos? */}

    <Accordion data={data} move={"right"} number={1} />

    {/* NUestros Artistas */}

    <Galery />

    {/* Conovocatoria */}

    <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSd1niMAsSbmm-ULyc4IEb6dEBBpTiwHcQqx1G1W6cIf8sB45g/viewform"} target="_blank" rel="noopener noreferrer">
      <Accordion data={data} move={"left"} number={2} />
    </Link>

  </section >
);

export default Home;