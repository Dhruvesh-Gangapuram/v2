import React, { Component } from "react";
import Details from "./Details";
import Input1 from "./Input1";
import Tag from "./Tag";
import time from "./logo/time.png";
import location from "./logo/location.png";
import desc from "./logo/desc.png";

export default class Createtask extends Component {
  render() {
    return (
      <div className="w-full h-auto mt-5">
        <Input1 placeholder="Keep it small for better display" title="Title" />
        <Tag placeholder="Tags" title="Tags" />
        <h6 className="text-xs pl-2 mt-2 mb-2">Details</h6>
        <Details img={time} alt="Time" placeholder="Enter date and time" />
        <Details
          img={location}
          alt="location"
          placeholder="Enter the location"
        />
        <Details img={desc} alt="desc" placeholder="Enter description" />

        <div className="relative left-2 top-3 h-12 w-[95%] bg-darkBlue rounded-sm flex items-center justify-center">
          <spam className="text-white font-bold tracking-wider">Create Task</spam>
        </div>
      </div>
    );
  }
}
