import React, { Component } from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Drawer from './components/Drawer';

// Required for Material-UI
injectTapEventPlugin();

class App extends Component {
  state = {
    drawerOpened: false
  }

  toggleDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header toggleDrawer={this.toggleDrawer} />
          <Drawer open={this.state.drawerOpened} onRequestChange={this.toggleDrawer} />
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.querySelector('#root'));
