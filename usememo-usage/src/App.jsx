import logo from './logo.svg';
import './App.css';
import { isValidElement, useState } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';

function App() {

  const [counterone,setcounterone]=useState(0)
  const [countertwo,setcountertwo]=useState(0)


const mymemo=useCallback( function iseven(){


  for(let i=0;i<10**9;i++)
  {
  
  }
  
  
  if(counterone%2==0)
  {
    return true
  }
  else{
    return false
  }
  
  },[counterone]
  )   


  return (
    <div className="App">
     
     <h1>counterOne {counterone}</h1>
     <button onClick={()=>{setcounterone(counterone+1)}}>increaseconterone</button>
     <h1>countertwo {countertwo}</h1>
     <button onClick={()=>{setcountertwo(countertwo+1)}}>increasecountertwo</button>
     <h1>counterone is {mymemo()?"even":"odd"}</h1>



    </div>
  );
}

export default App;
