"use client"

import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Pagination, Autoplay, EffectCreative } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import ShowCard from './ShowCard';
import Loading from './Loading';


export const Slider = () => {
  const [allShows, setAllShows] = useState(0);

  const fetchShows = async () => {
    const response = await fetch("/api/show");
    const data = await response.json();

    setAllShows(data);
  };

  useEffect(() => {
    fetchShows();
    console.log(allShows)
  }, []);
  return (
    <>
      {!allShows ?
        <Loading />
        :
        < div className="flex flex-row h-screen w-screen">

          <div className="flex flex-col h-auto items-center justify-around ml-4 my-9 px-4 border-r border-green-900 flex-grow" style={{ lineHeight: "0" }}>
            <span className='font-jura titulos' style={{ lineHeight: "0" }}>S</span>
            <span className='font-jura titulos' style={{ lineHeight: "0" }}>H</span>
            <span className='font-jura titulos' style={{ lineHeight: "0" }}>O</span>
            <span className='font-jura titulos' style={{ lineHeight: "0" }}>W</span>
            <span className='font-jura titulos' style={{ lineHeight: "0" }}>S</span>
          </div>
          <Swiper
            loop={true}
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
          >
            {allShows.map((show) => (
              <SwiperSlide key={show._id}>
                <ShowCard
                  key={show._id}
                  show={show}
                />
                {/* <img src={show.flyer} alt={show.creator}/> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      }
    </>
  )

}