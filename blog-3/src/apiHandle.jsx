import { useEffect } from "react";
import { useState } from "react"

function useFetch(url){
    const [data,setData] = useState(null);
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((result) => setData(result))
    },[url])
    return data
}

export function ComponentA(){
    const data = useFetch("https://api.agify.io?name=meelad")
    return (
        <>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export function ComponentB(){
    const data = useFetch("https://catfact.ninja/fact");
    return (
        <>
            <p>{data ? data.fact : "Loading..."}</p>
        </>
    )
}

// custom hook should start from use