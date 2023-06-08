"use client"

import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Pagination, Autoplay, EffectCreative } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import ShowCard from './ShowCard';


export const Slider = () => {
  const [allShows, setAllShows] = useState([]);

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
    <Swiper
      loop={true}
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{delay:3000}}
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
  </>
  )

}