import React from 'react';

import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
