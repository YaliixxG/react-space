import React, { Component } from 'react'
import logo from './img/me.jpg'
import './App.css'
import Demo from './demo.js'
import Navbar from './navBar.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title" onClick={this.display}>
                        {this.state.show ? '挖坑埋神经病' : '浓痰嚼不烂'}
                    </h1>
                    <Demo />
                </header>
                <Navbar />
            </div>
        )
    }

    display = () => {
        this.setState({
            show: !this.state.show
        })
    }
}

export default App
