import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HashList from "./components/HashList";
import ShaTwoPage from './pages/sha_two';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> header </h2>
      </header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HashList />
          </Route>
          <Route  exect path='/sha-2'>
            <ShaTwoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
