import React, { Component } from "react";
import userdp from "./logo/userdp.png";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // to retrive image, email and username from database
    };
  }

  render() {
    return (
      <div className=" flex justify-center mt-5">
        <img className="h-12 " src={userdp} alt="userdp"></img>
        <div className="flex flex-col justify-center ml-5">
          <h1 className="m-0 leading-3 font-Baloo-Chettan-2 font-medium text-lg">Subrina Carpenter</h1>
          <p className="m-0 text-xs">gangapuramdhruvesh@</p>
        </div>
      </div>
    );
  }
}
