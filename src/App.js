import React, { Component } from 'react';
import Menu from './Menu'
import Summary from './Summary'

import data from './recipes'

class App extends Component {
  render() {
    return (
        <Summary />
    );
  }
}

export default App;
