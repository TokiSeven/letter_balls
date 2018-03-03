import React, { Component } from 'react';
import logo from './logo.svg';
import Ball from './Ball';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ball delay={1} />
                <Ball delay={2.5} />
                <Ball delay={4} />
                <Ball delay={5.5} />
                <Ball delay={7} />
            </div>
        );
    }
}

export default App;
