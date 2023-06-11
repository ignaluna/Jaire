"use client"
import { useState } from "react";

const Accordion = ({ data, move, number }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="w-screen accordion bg-green-700" >
      {data.map((item, i) => (
        item.number === number ? 
        <div className="h-full w-full" onClick={() => toggle(i)}>
          <div className=" w-full h-full border-t-2 border-b-2 border-gray-900" key={i}>
            <div className={` border-r-4 border-green-900 accordion absolute w-screen h-full flex justify-center items-center 
            titleq ${move === "left" ? selected === i ? "show" : "" : selected === i ? "" : "show"}`} >
              <h2 className="font-passion-one font-bold">{move === "left"? item.answer : item.question }</h2>
            </div>
            <div className={`flex w-full h-full px-5 text-center justify-center items-center content 
            ${move === "left" ? selected === i ? "" : "show" : selected === i ? "show" : ""}`}>
              <h2>{move === "left"? item.question :  item.answer }</h2>
            </div>
          </div>
        </div>
        :
        ""
      ))}
    </div>
  );
};

export default Accordion;
