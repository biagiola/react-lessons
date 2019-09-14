import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/about' component={ About }/>
                <Route path='/services' component={ Services }/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
