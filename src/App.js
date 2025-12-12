import React,{useState} from "react";
import './App.css';


function App() {
  const[colour,setColour]=useState(0);
  const[count,setCount]=useState(0);
  const increment=function(){
   setCount(count+5);
   console.log(count);
   setColour(count>20?(< span style={{color:"green"}}>{count}</span>):{count});
  }
  const decrement=function(){
    count>0?setCount(count-5):setCount(0);
  }
  const result=function(){
    setCount(0);
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
       <button onClick={result}>Reset</button>
       <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
