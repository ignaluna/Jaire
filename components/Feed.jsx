"use client"

import { useState, useEffect } from "react";
import ShowCard from "./ShowCard";

const ShowCardList = ({ data }) => {
  return (
    <>
      {data.map((show) => 
      (  
        <ShowCard
          key={show._id}
          show={show}
        />
      ))}
    </>
  );
};

const Feed = () => {
  const [allShows, setAllShows] = useState([]);

  const fetchShows = async () => {
    const response = await fetch("/api/show");
    const data = await response.json();

    setAllShows(data);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="h-full">
        {/* All Shows */}
          <ShowCardList data={allShows} />
    </div>
  );
};

export default Feed;
