import React, { Component } from 'react'
import logo from './img/me.jpg'
import './App.css'
import Demo from './demo.js'
import Navbar from './navBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">挖坑埋神经病</h1>
          <Demo />
        </header>
        <Navbar />
      </div>
    );
  }
}


export default App;
