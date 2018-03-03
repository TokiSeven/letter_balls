import * as React from 'react';

const symbols = "qwertyuiopasdfghjklzxcvbnm";

export default class Ball extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: this.getChar(),
            delay: this.props.delay,
            left: this.getOffset(),
        };

        this.timerInstance = null;
        this.timeoutFinished = this.timeoutFinished.bind(this);
    }

    getRand(max, min = 0) {
        Math.random();
        Math.random();
        Math.random();
        return Math.random() * (max - min);
    }

    getOffset() {
        return this.getRand(window.innerWidth - 250);
    }

    getChar() {
        return symbols.charAt(this.getRand(symbols.length - 1));
    }

    componentDidMount() {
        if (!this.timerInstance) {
            let timeout = 8000; // 8s
            if (this.props.delay) {
                timeout += 1000 * this.props.delay; // delay in s, but we need ms
            }
            this.timerInstance = setTimeout(this.timeoutFinished, timeout);
        }
    }

    timeoutFinished() {
        this.setState({
            symbol: this.getChar(),
            delay: 0,
            left: this.getOffset(),
        });        
    }

    render() {
        return (
            <div className="ball" style={{
                animationDelay: `${this.state.delay}s`,
                left: this.state.left,
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 600 600"
                    width='250px'
                >
                    <path d="M324.6,493.6c-3.4,0-6.6,0.1-9.7,0c-1.7,0-2.8,0.5-4,1.8c-3,3.3-6.4,6.4-9.5,9.7c-1,1-1.7,1-2.7,0c-3-3.1-6.2-6.1-9.2-9.3  c-1.5-1.6-3-2.2-5.1-2.1c-2.9,0.1-5.7,0-9,0c0.9-3.8,1.8-7.4,2.6-10.9c2.1-8.5,4.1-17,6.4-25.4c0.6-2.3-0.3-2.8-2.1-3.1  c-8.9-1.7-17.2-4.9-25.2-9.1c-14.5-7.5-26.9-17.7-38.1-29.5c-13.6-14.4-24.7-30.6-34.3-48c-8.8-16-16-32.6-21.7-49.9  c-4.5-13.6-8-27.4-10.1-41.5c-2-13.2-3.2-26.5-2.3-39.9c1.3-19.6,6.1-38.3,14.5-56c10.3-21.7,25-40,43.9-54.8  c15.2-11.9,32.1-20.5,50.7-25.8c18.6-5.3,37.6-6.7,56.8-4.7c20.7,2.2,40.1,8.7,58,19.1c16.5,9.6,30.6,22,42.5,37  c13.4,16.9,22.8,35.7,28.1,56.5c4.4,17.3,5.8,34.8,4.2,52.7c-1.2,13.7-3.5,27.1-7,40.3c-5.4,20.6-13,40.5-22.8,59.5  c-8.3,16.2-17.9,31.4-29.5,45.5c-13.4,16.3-28.8,30.2-47.7,40c-7.7,4-15.8,7-24.4,8.6c-1.9,0.4-2.8,0.9-2.1,3.3  c3,11.2,5.7,22.5,8.5,33.8C324.4,491.9,324.5,492.6,324.6,493.6z"
                        fill={this.props.color || '#333'}
                    />
                </svg>
                <div className="ball__symbol">
                    {this.state.symbol}
                </div>
            </div>
        );
    }
}