import React, { Component } from "react";



var TagValue = null
function TagStatus(props) {
  if (props.status) {
    return (
      <input
        className="outline-none w-[95%] border-b-[1px] text-sm capitalize"
        placeholder={props.placeholder}
        onKeyPress={props.event}
      ></input>
    );
  } else {
    return (
      <spam className="relative top-2 bg-red rounded-xl pt-1 pb-1 pr-2 pl-2  text-sm capitalize text-white">
        {TagValue}
      </spam>
    );
  }
}
export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagStatus: true,
    };
    this.handleOnInputEvent = this.handleOnInputEvent.bind(this);
  }
  handleOnInputEvent(e) {
    TagValue = e.target.value;
    if (e.charCode === 32) {
      this.setState({
        tagStatus: false,
      });
    }
  }

  render() {
    return (
      <div className="relative top-1 w-full h-12 pl-2 pr-2 tracking-wide ">
        <p className="text-xs">{this.props.title}</p>
        <div className=" container h-full w-full ">
          <TagStatus
            status={this.state.tagStatus}
            placeholder={this.props.placeholder}
            event={this.handleOnInputEvent}
          />
        </div>
      </div>
    );
  }
}
