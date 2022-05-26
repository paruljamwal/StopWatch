import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
const StopWatch = () => {
    // const [timerid,setTimerId]=useState(null);
    const timerid=useRef(null) //{current:null}
    const [watch,setWatch]=useState(0);
    const start = ()=>{
        if(!timerid.current){
          let id= setInterval(()=>{
          setWatch((prev)=>(prev+1))
          },1000)
          timerid.current=id;
        }
    };
    const pause=()=>{
        clearInterval(timerid.current)
        timerid.current=null
    }
    const reset=()=>{
        // clearInterval(timerid.current)
        setWatch(0)
        timerid.current=null
    }
    useEffect(()=>{
        return reset
    },[])
  return (
    <div className='App'>
        <h1>StopWatch</h1>
        <h1>{watch}</h1>
         <div>
             <button onClick={start}>Start</button>
             <button onClick={pause}>Pause</button>
             <button onClick={reset} >Reset</button>
         </div>
    </div>
  )
}

export default StopWatch