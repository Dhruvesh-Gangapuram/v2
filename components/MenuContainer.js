import React, { Component } from "react";
import MenuBtn from "./Menubtn";
import completed from "./logo/complete.png";
import completedWhite from "./logo/complete-white.png";
import task from "./logo/task.png";
import taskWhite from "./logo/taskWhite.png";
import dashboard from "./logo/dashboard.png";
import dashboardwhite from "./logo/dashboardWhite.png";
import setting from "./logo/setting.png";
import settingWhite from "./logo/settingWhite.png";
import logout from "./logo/logout.png";
import logoutWhite from "./logo/logoutWhite.png";

export default class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count_complete: true,
      count_task: false,
      count_Dashboard: true,
      count_setting: true,
      count_logout: true,
      completeImg: completed,
      task: taskWhite,
      dashboardImg: dashboard,
      settingImg: setting,
      logoutImg: logout,
    };
    this.onClick = this.onClick.bind(this);
    this.onClicktask = this.onClicktask.bind(this);
    this.onClickdboard = this.onClickdboard.bind(this);
    this.onClicksetting = this.onClicksetting.bind(this);
    this.onClicklogout = this.onClicklogout.bind(this);
  }
  onClick() {
    this.setState((prevState) => ({
      count_complete: false,
      count_task: true,
      count_Dashboard: true,
      count_setting: true,
      count_logout: true,
      completeImg: completedWhite,
      task: task,
      settingImg: setting,
      logoutImg: logout,
      dashboardImg: dashboard,
    }));
  }
  onClicktask() {
    this.setState((prevState) => ({
      count_task: false,
      count_complete: true,
      count_Dashboard: true,
      count_setting: true,
      count_logout: true,
      dashboardImg: dashboard,
      task: taskWhite,
      completeImg: completed,
      settingImg: setting,
      logoutImg: logout,
    }));
  }
  onClickdboard() {
    this.setState((prevState) => ({
      count_Dashboard: false,
      count_complete: true,
      count_task: true,
      count_setting: true,
      count_logout: true,
      dashboardImg: dashboardwhite,
      completeImg: completed,
      task: task,
      settingImg: setting,
      logoutImg: logout,
    }));
  }
  onClicksetting() {
    this.setState((prevState) => ({
      count_setting: false,
      count_Dashboard: true,
      count_complete: true,
      count_task: true,
      count_logout: true,
      dashboardImg: dashboard,
      completeImg: completed,
      task: task,
      settingImg: settingWhite,
      logoutImg: logout,
    }));
  }
  onClicklogout() {
    this.setState((prevState) => ({
      count_logout: false,
      count_setting: true,
      count_Dashboard: true,
      count_complete: true,
      count_task: true,
      dashboardImg: dashboard,
      completeImg: completed,
      task: task,
      settingImg: setting,
      logoutImg: logoutWhite,
    }));
  }
  render() {
    return (
      <div className="absolute top-0 left-0 flex justify-start items-center flex-col box-border  h-screen w-[15%] shadow-2xl shadow-black bg-white">
        <div className="container h-12 w-36 " onClick={this.onClick}>
          <MenuBtn
            img={this.state.completeImg}
            count={this.state.count_complete}
            content="Completed"
          />
        </div>
        <div className="container h-12 w-36 " onClick={this.onClicktask}>
          <MenuBtn
            img={this.state.task}
            count={this.state.count_task}
            content="My task"
          />
        </div>
        <div className="container h-12 w-36" onClick={this.onClickdboard}>
          <MenuBtn
            img={this.state.dashboardImg}
            count={this.state.count_Dashboard}
            content="Dashboard"
          />
        </div>
        <div className="absolute bottom-1 flex justify-start items-center flex-col h-auto w-[100%]">
          <div className="relative -top-1.5 h-px w-[90%] bg-lightgray"></div>
          <div className="container h-12 w-36" onClick={this.onClicksetting}>
            <MenuBtn
              img={this.state.settingImg}
              count={this.state.count_setting}
              content="Setting"
            />
          </div>
          <div className="container h-12 w-36" onClick={this.onClicklogout}>
            <MenuBtn
              img={this.state.logoutImg}
              count={this.state.count_logout}
              content="Log Out"
            />
          </div>
        </div>
      </div>
    );
  }
}
