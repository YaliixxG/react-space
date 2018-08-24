import React, { Component } from 'react'
import './App.css'

class Loginin extends Component {
    render() {
        return (
            <div className="loginin-bar">
                <h3>Sign in to Space</h3>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="number" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Loginin
