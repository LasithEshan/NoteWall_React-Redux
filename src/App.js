import React, { Component } from 'react';
import Notes from './containers/notes/Notes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes/>
      </div>
    );
  }
}

export default App;
