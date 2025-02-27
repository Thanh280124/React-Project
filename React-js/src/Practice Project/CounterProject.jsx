import { useState } from "react"
import { RiResetLeftLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { RiSubtractLine } from "react-icons/ri";
const CounterProject = () => {
        const [count,setCount] = useState(0);
        const increaseNum = () => setCount(count + 1);
        const decreaseNum = () => setCount(count - 1);
        const resetNum = () => setCount(0);
    return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-9xl font-bold text-center text-white">{count}</h1>
      <div className="text-center">
        <button onClick={increaseNum} className="bg-blue-500 m-10 text-6xl rounded-full p-2"><TiPlus /></button>
        <button onClick={resetNum} className="bg-pink-500 m-10 text-6xl rounded-full p-2"><RiResetLeftLine /></button>
        <button onClick = {decreaseNum} className="bg-cyan-500 m-10 text-6xl rounded-full p-2"><RiSubtractLine /></button>   
    </div>
    </div>
  )
}

export default CounterProject
