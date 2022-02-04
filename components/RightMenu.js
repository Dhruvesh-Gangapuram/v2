import React, { Component } from "react";
import Card from "./Card";
import Createtask from "./Createtask";
import UserInfo from "./UserInfo";

export default class RightMenu extends Component {
  render() {
    return (
      <div className="absolute  right-0 top-0 box-border container block float-right h-screen w-[22%] shadow-2xl shadow-black bg-white    ">
        <UserInfo />
        <div className="w-full h-auto">
          <Createtask />
        </div>
        <p className="relative top-5 text-md">Upcoming deadlines</p>
        {/* <Card status={false} heading="Gym" tag="Regular activities" /> */}
        <div className="relative grid grid-rows-3 gap-3  top-3 h-auto w-full p-3">
          <Card status={false} heading="Gym" tag="Regular activities" />
          <Card status={false} heading="Gym" tag="Regular activities" />
          <Card status={false} heading="Gym" tag="Regular activities" />
        </div>
      </div>
    );
  }
}
