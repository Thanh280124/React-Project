import { useState,useReducer } from "react";
import {counterReduc,initialState} from './UseReducer';

export const Counter = () => {
    const [state,dispatch] = useReducer(counterReduc,initialState);
    const [input,setInput] = useState(0)
  
    const handleIncre = () => dispatch({type: 'incre'});
    const handleDecre = () => dispatch({type: 'decre'});
  
    const handleIncreByAmount = () => {
    dispatch({type: 'increByAmount', payload: +input}) 
    setInput(0)
  };
    const handleDecreByAmout = () => { dispatch({type: 'decreByAmount', payload: +input})};
  
    return (
      <div>
       <h2>Count: {state.count}</h2>
       <button onClick={handleIncre}>Incre</button>
       <button onClick={handleDecre}>Decre</button>
       <div>
        <input type="number" value={input} onChange={e => setInput(e.target.value)} />
       <button onClick={handleIncreByAmount}>Add</button>
       <button onClick={handleDecreByAmout}>Sub</button>
       </div>
      </div>
    )
  }
  