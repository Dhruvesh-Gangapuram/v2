import React, { Component } from 'react';
import Center from './Center';
import MenuContainer from './MenuContainer'
import RightMenu from './RightMenu';

export default class Homepage extends Component {
  render() {
    return (
        <div>
            <MenuContainer />
            <Center />
            <RightMenu />
        </div>
    );
  }
}
