"use client"
import { useState } from "react";

const Accordion = ({ data, move, number }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="w-screen accordion max-sm:h-[15vh] bg-black bg-opacity-75 overflow-hidden" >
      {data.map((item, i) => (
        item.number === number ? 
        <div className="h-full w-full" key={i} onClick={() => toggle(i)}>
            <div className={` border-r-4 border-green-900 accordion max-sm:h-[15vh] absolute w-screen h-full flex justify-center items-center 
            titleq ${move === "left" ? selected === i ? "show" : "" : selected === i ? "" : "show"}
            ${move === "left"? "titulos font-jura max-sm:text-[250%]" : "titulos font-jura max-sm:text-[250%]"}`} >
              <h2 >{move === "left"? item.answer : item.question }</h2>
            </div>
            <div className={`flex w-full h-full px-5 text-center justify-center items-center content 
            ${move === "left" ? selected === i ? "" : "show" : selected === i ? "show" : ""}
            ${move === "left"? "titulos font-jura max-sm:text-[250%]" : "titulos font-jura max-sm:text-[250%]"}`}>
              <h2>{move === "left"? item.question :  item.answer }</h2>
          </div>
        </div>
        :
        ""
      ))}
    </div>
  );
};

export default Accordion;
