import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.changeColor = this.changeColor.bind( this );
  }

  changeColor() {
    this.title.current.style.color = 'tomato';
  }

  render() {
    return (
      <div className="App">
        <h1 ref = { this.title }>Hola comunidad </h1>
        <button onClick = { this.changeColor }>Cambiar color</button>
      </div>
    );
  }
}

export default App;