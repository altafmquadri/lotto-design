import React from 'react';
import './LotteryBall.css'


const LotteryBall = (props) => {
        return ( 
            <div className="Lottery-ball">{props.num}</div>
        );
}

export default LotteryBall;