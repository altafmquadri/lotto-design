import React from 'react';
import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery title={'Mini Daily'} numBalls={4} maxNum={10}/>
      <Lottery/>
    </div>
  );
}

export default App;
