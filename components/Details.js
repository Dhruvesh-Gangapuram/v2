import React from "react";
import Input1 from "./Input1";

export default function Details(props) {
  return (
    <div className="w-full h-9 flex items-center">
      <img src={props.img} alt={props.alt} className="h-[50%] relative left-5"></img>
      <div className="relative left-6 h-full flex items-center">
        <Input1 placeholder={props.placeholder} />
      </div>
    </div>
  );
}
