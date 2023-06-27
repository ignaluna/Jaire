"use client"

import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import ShowCard from './ShowCard';
import Loading from './Loading';


export const Slider = () => {
  const [allShows, setAllShows] = useState(0);

  const fetchShows = async () => {
    const controller = new AbortController();
    const { signal } = controller;
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Set timeout for 10 seconds

    try {
      const response = await fetch("/api/show", { signal });
      const data = await response.json();
      setAllShows(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error('Timeout exceeded for fetching data.');
      } else {
        console.error('Error occurred while fetching data:', error);
      }
    } finally {
      clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <>
      {!allShows ?
        <Loading />
        :
        < div className="flex flex-row h-screen w-screen">

          <div className="flex max-md:hidden flex-col h-auto items-center justify-around ml-4 my-9 px-4 border-r border-green-900 flex-grow" style={{ lineHeight: "0" }}>
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
              <SwiperSlide key={show._id} className='max-md:gap-3'>
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