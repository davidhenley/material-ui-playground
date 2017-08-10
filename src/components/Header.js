import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <AppBar
        title="My App"
        onLeftIconButtonTouchTap={this.props.toggleDrawer}
      />
    );
  }
}

export default Header;
