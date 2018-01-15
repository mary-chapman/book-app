import React, { Component } from 'react';
import './App.css';

import ListContainer from './components/ListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
            <div className="header__text">
              <h1>Reading List</h1>
            </div>    
        </div>
        <ListContainer />
      </div>
    );
  }
}

export default App;
