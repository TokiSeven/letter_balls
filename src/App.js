import React, { Component } from 'react';
import logo from './logo.svg';
import Ball from './Ball';
import './App.css';

const symbols = (window.location.hash.substr(1) || "q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m").split(',');

class App extends Component {
    constructor(props) {
        super(props);
        let symbolsClicked = {};
        for(let i = 0; i < symbols.length; i++) {
            symbolsClicked[symbols[i]] = 0;
        }
        this.state = {
            symbolsClicked,
        };
        this.increaseSymbol = this.increaseSymbol.bind(this);
    }

    increaseSymbol(name) {
        let symbolsClicked = Object.assign({}, this.state.symbolsClicked);
        symbolsClicked[name]++;
        this.setState({
            symbolsClicked,
        });
    }

    render() {
        return (
            <div className="App">
                <ul className="score">
                    {Object.keys(this.state.symbolsClicked).map((symbol, i) =>
                        <li key={symbol}>{symbol}: <b>{this.state.symbolsClicked[symbol]}</b></li>
                    )}
                </ul>
                <Ball symbols={symbols} symbolsClicked={this.increaseSymbol} delay={1} />
                <Ball symbols={symbols} symbolsClicked={this.increaseSymbol} delay={2.5} />
                <Ball symbols={symbols} symbolsClicked={this.increaseSymbol} delay={4} />
                <Ball symbols={symbols} symbolsClicked={this.increaseSymbol} delay={5.5} />
                <Ball symbols={symbols} symbolsClicked={this.increaseSymbol} delay={7} />
            </div>
        );
    }
}

export default App;
