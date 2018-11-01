import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Hero from './components/hero.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero heroStyle="hero landing" title="Test Title" />
      </div>
    );
  }
}

export default App;
