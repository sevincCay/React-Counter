import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
let [counter,setCounter]=useState(0)

function handleMinus(){
  setCounter(
    counter = counter -1
  )
}

function handlePlus(){
  setCounter(
    counter = counter +1
  )

}
const handleReset=()=>{
  setCounter(
    counter = 0 
  )
}


  return (
    <div className="App">
      <div className="container">
        <button onClick={handleMinus}>-</button>
        <div className="counter">
          <p>{counter}</p>
          <button onClick={handleReset}>Reset</button>
          </div>
        <button onClick={handlePlus}>+</button>

      </div>
    </div>
  );
}

export default App;
