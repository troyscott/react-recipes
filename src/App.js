import React, { Component } from 'react';
import Menu from './Menu'
import data from './recipes'

console.log(data.length)

class App extends Component {
  render() {
    return (

        <Menu recipes={ data } />
    );
  }
}

export default App;
