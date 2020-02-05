import React, { Component } from 'react';
import './Lottery.css'
import LotteryBall from './LotteryBall'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    state = { 
        nums: []
    }

    generateNums = () => {
        let random
        let newNums = []
        while (newNums.length < this.props.numBalls) {
            random = Math.floor(Math.random() * this.props.maxNum) + 1
            newNums.push(random)
        }
        this.setState({ nums: [...newNums] });
    }

    componentDidMount() {
        this.generateNums()
    }

    renderBalls = () => {
        return this.state.nums.map((n, index) => <LotteryBall  key={index} num={n}/>)
    }

    render() { 
        return ( 
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Lottery-Container">
                    {this.renderBalls()}
                </div>
                <button onClick={this.generateNums}>Generate</button>
            </div>
        );
    }
}

export default Lottery