import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends Component {
  state = {
    loggedIn: false
  }

  renderLogin() {
    return (
      <FlatButton onTouchTap={() => this.setState({ loggedIn: true })} label="Login" />
    );
  }

  renderProfile() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="David Henley" />
        <MenuItem onTouchTap={() => this.setState({ loggedIn: false })} primaryText="Sign Out" />
      </IconMenu>
    );
  }

  render() {
    return (
      <AppBar
        title="My App"
        onLeftIconButtonTouchTap={this.props.toggleDrawer}
        iconElementRight={this.state.loggedIn ? this.renderProfile() : this.renderLogin()}
      />
    );
  }
}

export default Header;
