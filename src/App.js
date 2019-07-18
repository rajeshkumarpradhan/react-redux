import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Group from './Components/Group/GroupData'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Group} />
          <Route path={"/trunk"} component={Group}  />
        </Switch>
       
      </Router>
     
    </div>
  );
}

export default App;
