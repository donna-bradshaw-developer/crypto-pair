import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import CurrencyList from './components/CurrencyList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path='/search' component={ Search }/>
          <Route path='/list' component= { CurrencyList }/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
