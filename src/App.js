//@flow

import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MyMap from './map';

class App extends Component<{}> {
  render() {
    return (
      <HashRouter basename="/">
        <div style={{ height: '100%' }}>
          <Switch>
            <Route path="/" exact component={MyMap} />
            <Route path="/index.html" component={MyMap} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
