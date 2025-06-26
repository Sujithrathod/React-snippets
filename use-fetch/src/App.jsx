import { useEffect, useState } from "react"
import "./App.css"

export default function App() {
  const [count,setCount] = useState(1);
  const {response,loading} = useFetch(count);

  return (
    <>
       <p>{loading? "Loading" :  JSON.stringify(response)}</p>
      <button onClick={() => setCount(1)}>1st</button>
      <button onClick={() => setCount(2)}>2nd</button>
      <button onClick={() => setCount(3)}>3rd</button>
    </>
  )
}

function useFetch(count) {
  const [response,setResponse] = useState({});
  const [loading,setLoading] = useState(true);

  async function fetchData(count) {
    setLoading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/" + count);
    const jsonData = await data.json();
    setResponse(jsonData);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(count)
  },[count])

  return {
    response,
    loading
  }
}