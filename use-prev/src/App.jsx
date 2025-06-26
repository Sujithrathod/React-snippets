import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [curr, setCurr] = useState(1);
  const prevVal = usePrev(curr);

  return (
    <>
      <p>{curr}</p>
      <button onClick={() => setCurr(count => count + 1)}>increment</button>
      <p>previous value {prevVal}</p>
    </>
  )
}

function usePrev(curr) {
  const prevVal = useRef();

  useEffect(() => {
    prevVal.current = curr;
  },[curr])

  return prevVal.current
}

export default App
