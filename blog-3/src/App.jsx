import { useState ,useEffect,useRef} from 'react'
import './App.css'
import {ComponentA ,ComponentB } from "./apiHandle"
function App() {
  const [data,setData] = useState(null);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((res) => res.json())
    .then((result) => setData(result))
  },[data])
  
  return (
    <div>
      <h1>{data ? data.title : <p>Loading....</p>}</h1>
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default App

// fetching data using useEffect
// useRef -> it gives you a way to hang onto something (like a DOM element) that doesn't get wiped out when your component re-renders