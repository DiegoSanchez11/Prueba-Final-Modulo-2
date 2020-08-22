import React from 'react';
import ReactDOM from 'react-dom';
// React Router DOM
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Css
import './index.css';
// Pages
import HomeLogin from './pages/HomeLogin';
import Playlist from './pages/Playlist';

// Provando
import ContainerAuth from './components/ContainerAuth';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/playlist">
          <Playlist />
        </Route>
        <Route path="/">
          <HomeLogin />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
