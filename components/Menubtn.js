import React from "react";

function Gray(props) {
  return <p className="cursor-default font-sans text-lightgray pl-3">{props.content}</p>;
}

function White(props) {
  return <p className="cursor-default font-sans text-white pl-3">{props.content}</p>;
}
export default function Menubtn(props) {
  var condition = props.count;
  if (condition) {
    return (
      <div className="flex items-center h-12 w-36 p-2  ">
        <img src={props.img} className="h-6"></img>
        <Gray content={props.content} />
      </div>
    );
  } else {
    return (
      <div className="flex  items-center h-12 w-36 p-2 rounded  bg-darkBlue">
        <img src={props.img} className="h-6"></img>
        <White content={props.content} />
      </div>
    );
  }
}
