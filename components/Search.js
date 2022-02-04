import React from "react";
import search from './logo/search.png'

export default function Search() {
  return (
    
      <div className="h-[90%] w-[95%] rounded flex justify-around bg-white items-center shadow-lg">
        <img src={search} alt="search" className="w-[3%] h-[50%] "></img>
        <input className="relative float-right h-full w-[90%]  outline-none p-5 tracking-wider" placeholder="Search"></input>
      </div>

  );
}
