import React, { Component } from "react";

export default class Input1 extends Component {
   
    
  render() {
    return (
      <div className="w-full h-auto pl-2 pr-2 tracking-wide ">
        <p className="text-xs">{this.props.title}</p>
        <div>
          <input
            className="outline-none w-[95%] border-b-[1px] text-sm capitalize"
            placeholder={this.props.placeholder}
          ></input>
        </div>
      </div>
    );
  }
}
