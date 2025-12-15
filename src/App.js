import React,{useState} from "react";
import './App.css';

function App() {
  
  const[count,setCount]=useState(0);
  const[colour,setColour]=useState('red');
  const increment=function(){
   setCount(count+5);
   count>15 && count<40?setColour('green'):setColour('blue');
  }
  const decrement=function(){
    count>0?setCount(count-5):setCount(0);
    count>0 && count<20?setColour('red'):setColour(
   count>15 && count<40?setColour('green'):setColour('blue'));
  }
  const result=function(){
    setCount(0);
    setColour('red'); 
  }
  return (
    <div className="App">
      <h2 style={{color:colour}}>{count}</h2>
      <button onClick={increment}>+</button>
       <button onClick={result}>Reset</button>
       <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
