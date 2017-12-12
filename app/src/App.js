import React, { Component } from 'react';
import './App.css';

//import ListItem from './components/ListItem';
import ListContainer from './components/ListContainer';
import AddForm from './components/AddForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContainer />
      </div>
    );
  }
}

export default App;
