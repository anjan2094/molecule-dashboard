import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './login';
import Dashboard from './dashboard';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPrayingHands, faEdit, faRandom, faBell, faPlay} from '@fortawesome/free-solid-svg-icons';
library.add(faPrayingHands, faEdit, faRandom, faBell, faPlay);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <div> */}
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      {/* </div> */}
    </BrowserRouter>
    );
  }
}

export default App;
