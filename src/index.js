import React, { Component } from 'react';
import './style.css';
import { render } from 'react-dom';
import Settings from './components/Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Settings/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));