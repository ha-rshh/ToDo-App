import { useState } from 'react'

import './App.css'

function App() {
  
  const [todo, setTodo] = useState("hiii")
  const [todos, setTodos] = useState([])

  const handleSubmit = () =>{

  }

  return (
    <div className="App">
     <div className="container">
      <h1>Todo App</h1>
      <form action="" className='todoform' onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setTodo(e.target.value)}/>  
        {todo}
        <button>Go!!!</button>
      </form>
     </div>
    </div>
  )
}

export default App
  