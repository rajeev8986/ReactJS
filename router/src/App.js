import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Help from './components/Help';
import Home from './components/Home';
import { findAllByTestId } from '@testing-library/react';

function App( x , y ) {
 /* return (
   <BrowserRouter  >
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/help">Help</Link>
          </li>
        </ul>
      </div>
      <switch>
      <Route exact path='/' component = {Home}></Route>
      <Route exact path='/about' component = {About}></Route>
      <Route exact path='/help' component = {Help}></Route>
      </switch>
   </BrowserRouter>
  );*/

  return x+ y; 
}



export default App;
