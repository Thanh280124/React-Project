import { useState } from "react"
import { MdOutlineRemoveCircle } from "react-icons/md";
const Todo = () => {
    const [todo, setTodo ] = useState([]);
    const [inputValue,setInputValue] = useState('');
  const addTask = () => {
    if (!inputValue.trim()) return;
   setTodo((todos) =>{
      return todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 100)
      })
    })
    setInputValue("");
  }

  const removeTask = id => setTodo(todo => todo.filter(t => t.id != id)) 
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative">
      <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your task" value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
      <button className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={addTask}>Submit</button>
      </div>
      
      <div className="m">
        {todo.map(({text,id}) => (
         <li key={id}>
          <span>{text}</span>
          <button onClick={() => removeTask(id)}><MdOutlineRemoveCircle /></button>
         </li>
        ))}
      </div>
    </div>
  )
}

export default Todo
