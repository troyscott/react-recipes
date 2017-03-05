import React, { Component } from 'react';
import Menu from './Menu'
import Summary from './Summary'

import data from './recipes'

class App extends Component {
  render() {
    return (
        <Summary    title="Test 1"
                    ingredients="Test 2"
                    steps="Test 3"    />
    );
  }
}

export default App;
