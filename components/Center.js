import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";

export default class Center extends Component {
  render() {
    const cardDetail = [
      {
        heading: "TYCO Yearly Project Meeting",
        tag: "Meeting",
        time: "Sunday, Nov 6 (10:00 AM - 12:00AM)",
        location: "Google Meet",
        desc: "Meet link : mxh-sjg-sdhk",
      },
      {
        heading: "Meeting old friends",
        tag: "Meeting",
        time: "Sunday, Nov 6 (10:00 AM - 12:00AM)",
        location: "Google Meet",
        desc: "Meet link : mxh-sjg-sdhk",
      },
      {
        heading: "GYM",
        tag: "Regular activities",
        time: "Sunday, Nov 6 (10:00 AM - 12:00AM)",
        location: "Google Meet",
        desc: "Meet link : mxh-sjg-sdhk",
      },
      {
        heading: "GYM",
        tag: "Regular activities",
        time: "Sunday, Nov 6 (10:00 AM - 12:00AM)",
        location: "Google Meet",
        desc: "Meet link : mxh-sjg-sdhk",
      },
    ];
    const CardList = cardDetail.map((card) => (
      <Card
        status={true}
        heading={card.heading}
        tag={card.tag}
        time={card.time}
        location={card.location}
        desc={card.desc}
      />
    ));
    return (
      <div className="absolute top-0 left-[15%] h-screen w-[63%] z-10 ">
        <div className="relative flex justify-center items-center p-2 h-16 w-full">
          <Search />
        </div>
        <div className=" grid grid-cols-3 gap-2 h-auto p-2">
          {CardList}
        </div>
      </div>
    );
  }
}
