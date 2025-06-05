import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './Example1'
import Example2 from "./Example2"
import Example3 from "./Example3"
import Example4 from './Example4'
import Example5 from './Example5'

function App() {
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
  ]
  return (
    <>
      {/* {users.map(function(user,index){
        return(
          <li key={index}>
              {index} name is {user.name} role was {user.role}
           </li>
        )
      })
      } */}
      <Example1/>
      <Example2/>
      <Example3/>
      <Example4/>
      <Example5/>
    </>
  )
}

export default App
