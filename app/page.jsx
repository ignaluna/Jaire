import Carousell from "@components/ShowsActivos";
import Feed from "@components/Feed";
import ShowsActivos from "@components/ShowsActivos";
import Show from "@models/show";
import ShowCard from "@components/ShowCard";
import { Slider } from "@components/Swiper";

const Home = () => (
  <section className='w-full flex-center flex-col '>

    {/* Imagen Logo + Reels */}

    <div className="flex justify-center items-center min-h-screen">
      <img src="/assets/images/LogoBlanco.png" alt="Logo" className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl logo animate-fade-in" />
    </div>

    {/* Slider with shows */}

    <div className="flex h-screen w-screen items-center justify-center overflow-visible">
      <Slider />
    </div>

    {/* Carrousel de artistas */}
    {/* <div className="h-screen w-screen ">
      <ShowsActivos />
    </div> */}
  </section>
);

export default Home;