import React, { Component } from 'react';
import Burger from './Burger';
import Sidebar from './Sidebar';
import RightNavbar from './RightNavbar';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSidebarVisible: false,
    };

    this.toggleLeftSidebar = this.toggleLeftSidebar.bind(this);

  }

  // toggles the dropdown each time it is called
  toggleLeftSidebar = () => this.setState(state => ({
    leftSidebarVisible: !state.leftSidebarVisible,
  }));


  render() { 
    return (
      <div>
        <Burger 
          leftOnClick={ this.toggleLeftSidebar } 
        />
        <Sidebar  show={ this.state.leftSidebarVisible } close={ this.toggleLeftSidebar } />
      </div>
    );
  }
}
 
export default Settings;