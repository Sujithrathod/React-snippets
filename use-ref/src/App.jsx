import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
    const [count , setCount] = useState(0);
    const store = useRef(null);

    function startCount() {
      let timer = setInterval(()=>{
        setCount(count => count + 1)
      },1000);
      store.current = timer;
    };

    function stopCount(){
      clearInterval(store.current);
    }

    return (
        <>
          <p>{count}</p>
          <div>
            <button onClick={startCount}> start</button>
            <button onClick={stopCount}>stop</button>
          </div>
        </>
    )
}

export default App
