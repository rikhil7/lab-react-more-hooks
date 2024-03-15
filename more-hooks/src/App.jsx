import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducer from './Concepts/UseReducer'
import ToDoApp from './Components/TodoApp'
import TodoItem from './Components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseReducer /> */}
    <ToDoApp />
    {/* <TodoItem /> */}
    </>
  )
}

export default App