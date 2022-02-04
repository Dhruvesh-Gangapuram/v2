import React from "react";
import CardDetails from "./CardDetails";
import time from "./logo/time.png";
import location from "./logo/location.png";
import desc from "./logo/desc.png";

function Mini(props) {
  if (props.miniStatus) {
    return (
      <div>
        <CardDetails img={time} Content={props.time} />
        <CardDetails img={location} Content={props.location} />
        <CardDetails img={desc} Content={props.desc} />
      </div>
    );
  }
  return <div></div>
}
export default function Card(props) {
  return (
    <div className="flex h-auto w-[100%] bg-red shadow-lg rounded-lg overflow-hidden">
      <div className=" relative left-2 h-full w-[97%] bg-white pt-2 pb-2 pl-2 ">
        <h1 className="relative text-md font-bold font-sans tracking-wide">
          {props.heading}
        </h1>
        <h6 className="relative text-xs text-lightgray">{props.tag}</h6>
        <Mini miniStatus= {props.status} time={props.time} location ={props.location} desc={props.desc}/>
      </div>
    </div>
  );
}
