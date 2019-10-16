import React, { Component } from 'react';
import { render } from 'react-dom';

import ComponentOne from './components/ComponentOne';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <ComponentOne/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
