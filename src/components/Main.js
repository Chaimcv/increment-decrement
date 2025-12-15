
import React,{useState,useEffect} from "react";

const Main = () => {
    const[count,setCount]=useState(0);
    const[colour,setColour]=useState('red');
     
     console.log(colour,"global colour");
      console.log(count,"global count");
      useEffect(()=>{ 
        if( count>=0 && count<10){
        setColour('red');
         console.log(count,"1");
          console.log(colour,"1");
       }
       else if(count>=10 && count<20)
       {
        setColour('green');
         console.log(count,"2");
          console.log(colour,"2");
       }
       else
        {
        setColour('blue');
         console.log(count,"3");
          console.log(colour,"3");
       }
       } ,[count])
      const increment=function(){
       setCount(count+5);
      
      }
      
      const decrement=function(){
       if(count>0){
        setCount(count-5);}
        else{
            setCount(0);
        }
        
       

    }
      const result=function(){
        setCount(0);
        setColour('red'); 
      }
  return (
    <div>
        <h2 style={{color:colour}}>{count}</h2>
      <button onClick={increment}>+</button>
       <button onClick={result}>Reset</button>
       <button onClick={decrement}>-</button>
    </div>
  )
}

export default Main