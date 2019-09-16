import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Navbar from './components/navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/about' component={ About }/>
                <Route path='/services' component={ Services }/>
                <Route path='/:post_id' component={ Post }/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
