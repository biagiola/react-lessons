import React, { Component } from 'react';

class LeftNavbar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="Sidenav" className="Sidenav" style={{visibility: this.props.show ? "visible" : "hidden", position: "absolute", height: "100%", width: "250px"}}>
    
        <a href="#" id="saveBtn" className="closebtn" onClick={ this.props.close }>&times;</a>
        <h1 id="settings">Settings</h1>
    
        <div className="divsideItems">

          <a href="#">Digits</a>
          <select className="btn" id="digits">
            <option value="1" defaultValue>1</option>
            <option value="2">2</option>
            <option value="3" >3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <a href="#">Operation</a>
          <select className="btn" id="operation" /* onClick="signChanged()" */>
            <option value="add">add</option>
            <option value="sub">sub</option>
            <option value="mult">mult</option>
            <option value="random">random</option>
          </select>
        
          <a href="#">Background</a>
          <select className="btn" id="backgroundColor" /* onInput="bgFunct()" */>
            <option value="DodgerBlue" defaultValue>Blue</option>
            <option value="tomato">Red</option>
            <option value="beige">White</option>
            <option value="#161616">Dark</option>
          </select>

          <a href="#" id="timer">Timer</a>
          <select className="btn" id="speedOpts">
            <option value="">None</option>
            <option value="0.1">0.1s</option>
            <option value="0.2">0.2s</option>
            <option value="0.3">0.3s</option>
            <option value="0.4">0.4s</option>
            <option value="0.5">0.5s</option>
          </select>

          <a href="#">Mode</a>
          <select className="btn" id="mode" /*  onInput="modeFunct()" */>
            <option value="infinitum" defaultValue>Infinitum</option>
            <option value="finitum">finitum</option>
          </select>

          <div id="otherOpstions">
            <a href="#" id="quantity">Quantity</a>
            <select className="btn" id="quantityOpts">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="10">100</option>
            </select>
          </div>  
        </div>
      </div>  
    )
  }
}

export default LeftNavbar;