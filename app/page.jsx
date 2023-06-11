import Feed from "@components/Feed";
import ShowsActivos from "@components/ShowsActivos";
import Show from "@models/show";
import ShowCard from "@components/ShowCard";
import { Slider } from "@components/Swiper";
import Accordion from "@components/Accordion";
import Carousel from "@components/Carousel";

const data = [
  {
    question: "QUIENES SOMOS???",
    answer:
      "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment.",
    number: 1
  },
  {
    question: "Question 2",
    answer:
      "The information in this article is based on the expert advice found in trusted medical and government sources, such as the American Academy of Pediatrics and the American College of Obstetricians and Gynecologists. You can find a full list of sources used for this article below. The content on this page should not replace professional medical advice. Always consult medical professionals for full diagnosis and treatment.",
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

    <div className="flex justify-center items-center min-h-screen">
      <img src="/assets/images/LogoBlanco.png" alt="Logo" className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl logo animate-fade-in" />
    </div>

    {/* Quienes somos? */}

    <Accordion data={data} move={"right"} number={1} />

    {/* Slider with shows */}

    <div className="flex h-screen w-screen items-center justify-center overflow-visible">
      <Slider />
    </div>

    {/* <Accordion data={data} move={"left"} number={2} /> */}

    {/* <Carousel /> */}
    {/* Carrousel de artistas */}
    {/* <div className="h-screen w-screen ">
      <ShowsActivos />
    </div> */}
  </section>
);

export default Home;